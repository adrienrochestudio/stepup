export const allCourses = [
  {
    id: 'intro-eco-production',
    title: 'Introduction à l\'éco-production',
    description: 'Découvrez les fondamentaux de la production audiovisuelle éco-responsable. Ce cours gratuit est automatiquement accessible à tous les apprenants inscrits.',
    duration: '2h',
    modules: 5,
    price: 0,
    free: true,
    scormPackageUrl: '',
  },
  {
    id: 'mastering-green-production',
    title: 'Mastering Green Production',
    description: 'Go beyond the basics and master sustainable production workflows, from pre-production to distribution.',
    duration: '6h',
    modules: 12,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
  {
    id: 'carbon-footprinting-film-tv',
    title: 'Mastering Carbon Footprinting in the Film and TV Industry',
    description: 'Learn to measure, report and reduce the carbon footprint of film and television productions using industry-standard methodologies.',
    duration: '5h',
    modules: 10,
    price: 85,
    free: false,
    scormPackageUrl: '',
  },
  {
    id: 'green-animation',
    title: 'Green Animation',
    description: 'Sustainable practices specifically tailored for animation studios: render farms, energy use, remote collaboration, and eco-friendly pipelines.',
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
