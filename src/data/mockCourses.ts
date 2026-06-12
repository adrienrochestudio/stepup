import type { Course, Enrollment } from '../types';

export const allCourses: Course[] = [
  {
    id: 'intro-eco-production',
    i18nKey: 'introGreenProduction',
    duration: '1h30',
    modules: 4,
    price: 0,
    free: true,
    image: '/stepup/images/courses/intro-eco-production.png',
    scormPackages: {
      en: '/stepup/scorm/intro-eco-production/en/index.html',
      fr: '/stepup/scorm/intro-eco-production/fr/index.html',
    },
  },
  {
    id: 'mastering-green-production',
    i18nKey: 'masteringGreenProduction',
    duration: '3h',
    modules: 6,
    price: 85,
    free: false,
    image: '/stepup/images/courses/mastering-green-production.png',
    scormPackages: {
      en: '',
      fr: '',
    },
  },
  {
    id: 'carbon-footprinting-film-tv',
    i18nKey: 'carbonFootprinting',
    duration: '2h',
    modules: 14,
    price: 85,
    free: false,
    image: '/stepup/images/courses/carbon-footprinting-film-tv.png',
    scormPackages: {
      en: '/stepup/scorm/carbon-footprinting-film-tv/en/index.html',
      fr: '/stepup/scorm/carbon-footprinting-film-tv/fr/index.html',
    },
  },
  {
    id: 'green-animation',
    i18nKey: 'greenAnimation',
    duration: '1h30',
    modules: null,
    price: 85,
    free: false,
    image: '/stepup/images/courses/green-animation.png',
    scormPackages: {
      en: '/stepup/scorm/green-animation/en/index.html',
      fr: '/stepup/scorm/green-animation/fr/index.html',
    },
  },
];

export const mockEnrollments: Enrollment[] = [
  {
    courseId: 'intro-eco-production',
    progress: 35,
    status: 'in_progress',
    enrolledAt: '2025-01-15',
  },
];

export function getEnrolledCourses(enrollments: Enrollment[]) {
  return enrollments.map((enrollment) => {
    const course = allCourses.find((c) => c.id === enrollment.courseId);
    return { ...course, ...enrollment };
  });
}

export function getCatalogCourses(enrollments: Enrollment[]) {
  const enrolledIds = enrollments.map((e) => e.courseId);
  return allCourses.filter((c) => !enrolledIds.includes(c.id));
}
