export const allCourses = [
  {
    id: 'intro-eco-production',
    i18nKey: 'introGreenProduction',
    duration: '2h',
    modules: 5,
    price: 0,
    free: true,
    scormPackageUrl: '',
  },
  {
    id: 'mastering-green-production',
    i18nKey: 'masteringGreenProduction',
    duration: '6h',
    modules: 12,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
  {
    id: 'carbon-footprinting-film-tv',
    i18nKey: 'carbonFootprinting',
    duration: '5h',
    modules: 10,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
  {
    id: 'green-animation',
    i18nKey: 'greenAnimation',
    duration: '4h',
    modules: 8,
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
