# StepUP Platform — Claude Code Project Brief

## 🎯 Vision & Goals

StepUP is a dual-purpose platform:
1. **Free resource site** (Part 1): World map + webinar library
2. **E-Learning platform** (Part 2-3): SCORM courses, payments, cohort management

**Tech Stack**:
- Frontend: React (Vite)
- Backend: Node.js + Express
- Database: Supabase (PostgreSQL)
- Auth: Supabase Auth
- Payments: Stripe
- Hosting: GitHub (now), migrate later

## 📦 Architecture

### Part 1: Resource Hub (Public)
- /resources/map (interactive world map)
- /resources/webinars (Streamlike embeds)

### Part 2: Learning Dashboard (Auth Required)
- /dashboard (course list)
- /course/:id (SCORM player)

### Part 3: Enrollment & Payments
- /enroll/:courseId (checkout)

### Part 4: Cohort Manager (Admin)
- /admin/cohorts (cohort management)

## 📋 Code Rules

**Modularity**:
- 1 component = 1 file
- Custom hooks for logic
- API calls in services/ folder
- No hardcoded URLs

**Naming**:
- Components: PascalCase
- Functions/hooks: camelCase
- DB tables: snake_case
- API endpoints: kebab-case

**No Rewrites**: Modify existing code, never regenerate

## 🏗️ Phases

- Phase 1: Setup (1.5h)
- Phase 2: Part 1 - Resources (2h)
- Phase 3: Part 2 - E-Learning (4h)
- Phase 4: Part 3-4 - Payments/Admin (3.5h)
- Phase 5: i18n (1.5h)
- **Total: ~13h**

**Ready?** Tell Claude Code: "Phase 1: Project Setup & Architecture"
