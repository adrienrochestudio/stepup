import { allCourses } from './mockCourses';

const promoCodes = {
  SUPERCODETROPBIEN: {
    type: 'full_access',
    courseIds: allCourses.map((c) => c.id),
  },
};

export function validatePromoCode(code) {
  const promo = promoCodes[code.toUpperCase()];
  if (!promo) return null;
  const courses = allCourses.filter((c) => promo.courseIds.includes(c.id));
  return { ...promo, courses };
}
