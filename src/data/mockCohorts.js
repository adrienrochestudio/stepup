export const initialCohorts = [
  {
    id: 'cohort-1',
    name: 'Ecoprod - Introduction à l\'éco-production - 2025 - Printemps',
    courseId: 'intro-eco-production',
    courseTitle: 'Introduction à l\'éco-production',
    startDate: '2025-03-15',
    endDate: '2025-05-15',
    maxStudents: 25,
    promoCode: 'SUPERCODETROPBIEN',
    enrolledStudents: [
      { id: 's1', firstName: 'Alice', lastName: 'Martin', username: 'alicemartin', email: 'alice@example.com', enrolledAt: '2025-02-20', status: 'completed', lastLogin: '2025-05-10T14:30:00' },
      { id: 's2', firstName: 'Bob', lastName: 'Dupont', username: 'bobdupont', email: 'bob@example.com', enrolledAt: '2025-02-22', status: 'in_progress', lastLogin: '2025-06-07T09:15:00' },
      { id: 's3', firstName: 'Claire', lastName: 'Moreau', username: 'clairemoreau', email: 'claire@example.com', enrolledAt: '2025-03-01', status: 'not_started', lastLogin: '2025-04-12T11:00:00' },
    ],
    status: 'active',
  },
];
