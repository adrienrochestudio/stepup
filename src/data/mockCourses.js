export const allCourses = [
  {
    id: 'intro-eco-production',
    i18nKey: 'introGreenProduction',
    duration: '1h30',
    modules: 4,
    price: 0,
    free: true,
    scormPackageUrl: '',
  },
  {
    id: 'mastering-green-production',
    i18nKey: 'masteringGreenProduction',
    duration: '3h',
    modules: 6,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
  {
    id: 'carbon-footprinting-film-tv',
    i18nKey: 'carbonFootprinting',
    duration: '2h',
    modules: 14,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
  {
    id: 'green-animation',
    i18nKey: 'greenAnimation',
    duration: '1h30',
    modules: null,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
];

export const mockEnrollments = [
  {
    courseId: 'intro-eco-production',
    progress: 35,
    status: 'in_progress',
    enrolledAt: '2025-01-15',
  },
];

export function getEnrolledCourses(enrollments) {
  return enrollments.map((enrollment) => {
    const course = allCourses.find((c) => c.id === enrollment.courseId);
    return { ...course, ...enrollment };
  });
}

export function getCatalogCourses(enrollments) {
  const enrolledIds = enrollments.map((e) => e.courseId);
  return allCourses.filter((c) => !enrolledIds.includes(c.id));
}
