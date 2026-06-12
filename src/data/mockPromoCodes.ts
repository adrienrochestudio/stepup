import { allCourses } from './mockCourses';

const promoCodes: Record<string, { type: string; courseIds: string[] }> = {
  SUPERCODETROPBIEN: {
    type: 'full_access',
    courseIds: allCourses.map((c) => c.id),
  },
};

export function validatePromoCode(code: string) {
  const promo = promoCodes[code.toUpperCase()];
  if (!promo) return null;
  const courses = allCourses.filter((c) => promo.courseIds.includes(c.id));
  return { ...promo, courses };
}
