# StepUP — Architecture cible & cahier de reprise

Document destiné à l'ingénieur·e / prestataire qui reprendra le projet pour le
porter en production. Il décrit ce qui existe, l'architecture visée, et les
exigences non négociables liées au contexte (Conseil de l'Europe, données
sensibles, hébergement européen).

---

## 1. Contexte & contraintes

- **Commanditaire** : initiative portée dans le cadre du Conseil de l'Europe (Eurimages / Ecoprod).
- **Échelle visée** : 1 500+ apprenants, montée en charge progressive.
- **Données** : comptes, progression, certificats, potentiellement **données personnelles sensibles** → RGPD strict.
- **Souveraineté** : hébergement **en Europe**, hors juridiction extra-européenne. Cible retenue : **Infomaniak (Suisse)**, fournisseur éco-responsable (cohérent avec la mission éco-production).
- **Accessibilité** : organisme à vocation publique → **EN 301 549 / WCAG 2.1 AA** (obligation légale).

## 2. État actuel (prototype)

Le dépôt actuel est un **prototype fonctionnel et abouti**, à considérer comme
**maquette de référence et cahier des charges vivant**, pas comme un système de
production.

- **Frontend** : React 19 + Vite, en cours de migration vers **TypeScript** (socle déjà migré : `services/`, `hooks/`, `context/`, `i18n/`, types dans `src/types.ts`).
- **i18n** : i18next, 6 langues (fr, en, es, de, pt, it). La donnée de la carte reste volontairement en anglais.
- **Hébergement actuel** : GitHub Pages (statique, US) → **non retenu pour la production**.
- **Authentification** : **factice** en mode démo (`DEV_DEFAULT_USER` admin auto-connecté). À remplacer.
- **Données** : **mock** (`src/data/`) ; les soumissions des formulaires sont stockées en `localStorage` (`src/services/submissions.ts`) faute de backend.
- **Paiement** : intégration **Stripe** ébauchée (serveur Express dans `server/`, non déployé).
- **E-learning** : lecteur **SCORM** maison (`hooks/useScorm.ts`, `components/ScormPlayer`).

Ce qui est **réutilisable tel quel** : tout l'UI/UX, l'i18n, la carte interactive, les composants, l'identité visuelle, les parcours. Ce qui est **à bâtir** : backend, base de données, authentification réelle, persistance, conformité.

## 3. Architecture cible

```
                    ┌───────────────────────────────────────────────┐
                    │                Infomaniak (Suisse)             │
                    │                                                │
  Navigateur ──────▶│  Frontend React + TypeScript (build statique)  │
                    │        │                                       │
                    │        ▼  HTTPS / JSON                         │
                    │  API Backend Node + TypeScript (Express/Nest)  │
                    │        │            │              │           │
                    │        ▼            ▼              ▼           │
                    │  PostgreSQL     Keycloak      Stockage objet   │
                    │  (managé)     (auth/SSO/RBAC)  (paquets SCORM) │
                    └───────────────────────────────────────────────┘
                                    │
                                    ▼
                              Stripe (paiement)
```

### Composants
| Brique | Choix recommandé | Pourquoi |
|--------|------------------|----------|
| Frontend | React + **TypeScript** | Existant, à finir de typer |
| Backend | **Node + TypeScript** (Express ou NestJS) | Continuité du langage, écosystème |
| Base de données | **PostgreSQL** | Relationnel, robuste, RGPD-friendly |
| Auth / rôles | **Keycloak** (auto-hébergé) | OIDC/SAML, SSO, RBAC, standard institutionnel EU |
| Stockage fichiers / SCORM | **Stockage objet S3 Infomaniak** | Souverain, scalable |
| Paiement | **Stripe** (ou PSP européen) | Conforme EU, déjà ébauché |
| Hébergement | **Infomaniak Public Cloud (OpenStack) / Kubernetes managé** | Suisse, éco-responsable |

> Note : l'hébergement web mutualisé Infomaniak est orienté PHP/MySQL. Pour une
> app Node + PostgreSQL, viser **Public Cloud / VPS / Kubernetes managé**.

## 4. Modules fonctionnels

1. **Vitrine publique** : carte interactive (ressources éco-production par pays), bibliothèque de webinaires, pages partenaires.
2. **E-learning** : catalogue, lecteur SCORM, suivi de progression, reprise.
3. **Inscription & paiement** : parcours individuel (Stripe) et demandes groupe/devis.
4. **Gestion de cohortes** (rôle gestionnaire) : création, import d'apprenants (CSV), suivi, relances, certificats.
5. **Back-office super-admin** (rôle admin unique) : reporting global, gestion des comptes, codes promo, certificats, boîte de réception des soumissions (contributions carte, devis, inscriptions).
6. **Contributions carte** : formulaire public modéré (validation admin avant publication).

## 5. Modèle de données (entités principales)

Voir `src/types.ts` pour les formes actuelles. Entités cibles :

- **User** (id, email, rôle, organisation, pays, statut, dates) + identités gérées par Keycloak.
- **Course** (id, i18nKey, durée, modules, prix, gratuit, paquets SCORM).
- **Enrollment** (user, course, statut, progression, dates).
- **Cohort** (nom, cours, dates, capacité, code promo, gestionnaire) + **CohortMember**.
- **Submission** (type : contribution/correction carte, devis groupe, inscription ; statut ; payload ; horodatage).
- **PromoCode**, **Certificate**, **AuditLog**.

## 6. Sécurité & conformité (non négociable)

- **Authentification & autorisation côté serveur** : tous les contrôles de rôle doivent être imposés par l'API/Keycloak, jamais seulement côté client. Retirer `DEV_DEFAULT_USER`.
- **RGPD** : **AIPD/DPIA** très probablement obligatoire (institution + données sensibles), implication d'un **DPO**, registre des traitements, minimisation, durée de conservation, consentement, droits des personnes (accès/rectification/effacement/portabilité).
- **Hébergement & résidence des données en Europe**, **chiffrement** en transit (TLS) et au repos.
- **Journalisation/audit** des actions admin (qui a fait quoi, quand).
- **Sauvegardes** régulières + plan de reprise (PRA/PCA).
- **Accessibilité EN 301 549 / WCAG 2.1 AA** intégrée dès la conception (audit dédié).
- **Audit de sécurité externe + test d'intrusion (pentest)** avant mise en ligne.
- **Gestion des secrets** : variables d'environnement / coffre (jamais dans le code). `.env` déjà ignoré par git ; aucun secret n'a été committé.
- **Génération des mots de passe** : côté serveur, CSPRNG, jamais affichés en clair (le prototype utilise `Math.random()`, à remplacer).

## 7. Qualité & DevOps

- **TypeScript strict** sur tout le code (migration en cours).
- **Tests** : unitaires (logique métier), intégration (API), end-to-end (parcours critiques).
- **CI/CD** : lint + typecheck + tests + build à chaque PR ; déploiement automatisé vers **staging** puis production.
- **Environnements séparés** : dev / staging / prod.
- **Monitoring & alerting** : logs centralisés, métriques, supervision de disponibilité.
- **Revue de code humaine** obligatoire (le prototype a été produit avec assistance IA : la production exige une appropriation et une responsabilité d'ingénierie).

## 8. Trajectoire recommandée

1. **Finaliser la migration TypeScript** du frontend (socle fait ; suivent `data/`, composants, pages).
2. **Décision d'hébergement Infomaniak** + provisioning (Public Cloud / k8s, PostgreSQL, stockage objet).
3. **Backend Node/TS** : API, modèle de données, persistance des soumissions et comptes.
4. **Keycloak** : auth réelle, SSO, rôles serveur ; suppression de l'auth factice.
5. **Conformité en parallèle** : DPIA, DPO, accessibilité.
6. **Tests + CI/CD + staging**.
7. **Audit sécurité + pentest**, puis **mise en production** et **contrat de maintenance**.

---

*Ce document accompagne le prototype. Sa raison d'être : permettre une reprise
propre, sécurisée et conforme, en capitalisant sur le travail d'UX déjà réalisé.*
