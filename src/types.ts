// Shared domain types for StepUP. Kept intentionally pragmatic during the
// JS -> TS migration; refine as the backend and data model solidify.

export type Role = 'learner' | 'cohort_manager' | 'admin';

export type CourseStatus =
  | 'not_started'
  | 'in_progress'
  | 'completed'
  | 'not attempted'
  | 'never_connected';

export interface Course {
  id: string;
  i18nKey: string;
  duration: string;
  modules: number | null;
  price: number;
  free: boolean;
  image: string;
  scormPackages: { en: string; fr: string };
}

export interface Enrollment {
  courseId: string;
  progress: number;
  status: CourseStatus;
  enrolledAt: string;
}

// A signed-in user. In mock/dev mode this is our own shape; with a real auth
// backend it is mapped from the provider's user (which is why `role` is
// optional here and resolved by the app).
export interface AppUser {
  uid: string;
  email: string | null;
  displayName?: string | null;
  role?: Role;
  organizationName?: string;
  [key: string]: unknown;
}

export interface AuthContextValue {
  user: AppUser | null;
  loading: boolean;
  login: (email: string, password: string, role?: Role) => Promise<AppUser>;
  signup: (
    email: string,
    password: string,
    role?: Role,
    organizationName?: string,
    extra?: Record<string, unknown>,
  ) => Promise<AppUser>;
  logout: () => Promise<void>;
}

export type SubmissionType =
  | 'map_contribution'
  | 'map_amendment'
  | 'group_request'
  | 'enrollment';

export type SubmissionStatus = 'new' | 'processed' | 'rejected';

export interface Submission {
  id: string;
  type: SubmissionType;
  status: SubmissionStatus;
  createdAt: string;
  // Shape varies by submission type; narrowed at the render site.
  payload: Record<string, any>;
}

export interface CourseProgress {
  courseId: string;
  status: CourseStatus;
  progress: number;
}

export interface Account {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  jobTitle?: string;
  organization: string;
  country: string;
  status: 'active' | 'suspended';
  createdAt: string;
  lastLogin: string | null;
  restrictions?: { maxCohorts: number; usedCohorts?: number; canExport: boolean };
  courses?: CourseProgress[];
}

export interface Learner {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  enrolledAt?: string;
  status: CourseStatus;
  lastLogin: string | null;
  password?: string;
}

export interface Cohort {
  id: string;
  name: string;
  courseId: string;
  courseTitle: string;
  startDate: string;
  endDate: string;
  maxStudents: number;
  promoCode: string;
  enrolledStudents: Learner[];
  status: string;
}

export interface ScormUnifiedStatus {
  progress: number;
  status: CourseStatus | 'not attempted';
}
