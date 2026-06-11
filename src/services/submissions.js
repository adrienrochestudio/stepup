// Local submission store. The site is currently a static front-end (GitHub
// Pages): there is no API to receive what visitors send. Until a real backend
// exists, every form writes here (localStorage) so the admin back-office can
// display and process submissions made in this browser. The exported API is
// shaped like the future HTTP client so swapping in a backend later only
// changes this file.

const STORE_KEY = 'stepup_submissions';

// type: 'map_contribution' | 'map_amendment' | 'group_request' | 'enrollment'
// status: 'new' | 'processed' | 'rejected'

function readAll() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function writeAll(items) {
  localStorage.setItem(STORE_KEY, JSON.stringify(items));
}

// Demo submissions so the inbox is never empty on first visit.
const SEED = [
  {
    id: 'sub-demo-1',
    type: 'map_contribution',
    status: 'new',
    createdAt: '2026-06-08T10:24:00',
    payload: {
      name: 'Lena Kovač',
      email: 'lena.kovac@filmcentar.hr',
      organization: 'Film Centar Zagreb',
      country: 'Croatia',
      fields: {
        greenConsultants: 'Zelena Produkcija, green consulting for HRT productions, contact: info@zelenaprodukcija.hr',
      },
    },
  },
  {
    id: 'sub-demo-2',
    type: 'map_amendment',
    status: 'new',
    createdAt: '2026-06-09T16:02:00',
    payload: {
      name: 'Marco Bellini',
      email: 'm.bellini@cinegreen.it',
      organization: 'CineGreen',
      country: 'Italy',
      amendmentSection: 'trainTravel',
      amendmentText: 'The train transport rating for Italy seems outdated, Frecciarossa now covers Naples-Milan in under 5h and regional coverage has improved.',
    },
  },
  {
    id: 'sub-demo-3',
    type: 'group_request',
    status: 'new',
    createdAt: '2026-06-10T09:45:00',
    payload: {
      offer: 'cohort',
      courseTitle: 'Maîtriser l\'éco-production',
      nbPersons: 35,
      email: 'formation@studiopilote.fr',
      comment: 'Nous souhaitons former nos équipes de production sur Q3. Possible de démarrer en septembre ?',
    },
  },
  {
    id: 'sub-demo-4',
    type: 'enrollment',
    status: 'processed',
    createdAt: '2026-06-07T14:12:00',
    payload: {
      email: 'claire.morel@docfilms.be',
      firstName: 'Claire',
      lastName: 'Morel',
      courseTitle: 'Le bilan carbone dans le cinéma et la télévision',
      price: 85,
    },
  },
];

function ensureSeeded() {
  const existing = readAll();
  if (existing) return existing;
  writeAll(SEED);
  return SEED;
}

export function getSubmissions() {
  return [...ensureSeeded()].sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
  );
}

export function addSubmission(type, payload) {
  const items = ensureSeeded();
  const submission = {
    id: `sub-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
    type,
    status: 'new',
    createdAt: new Date().toISOString(),
    payload,
  };
  writeAll([...items, submission]);
  return submission;
}

export function setSubmissionStatus(id, status) {
  const items = ensureSeeded().map((s) =>
    s.id === id ? { ...s, status } : s,
  );
  writeAll(items);
  return items;
}

export function countNewSubmissions() {
  return ensureSeeded().filter((s) => s.status === 'new').length;
}
