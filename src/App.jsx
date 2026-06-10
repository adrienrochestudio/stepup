import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import Webinars from './pages/Webinars';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Enroll from './pages/Enroll';
import EnrollSuccess from './pages/EnrollSuccess';
import EnrollCancel from './pages/EnrollCancel';
import Partners from './pages/Partners';
import LegalTerms from './pages/LegalTerms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import MentionsLegales from './pages/MentionsLegales';
import SalesTerms from './pages/SalesTerms';

// Heavy, occasionally-visited routes are code-split so their large
// dependencies stay out of the initial bundle:
//  - ResourceMap pulls in react-globe.gl + three (~tens of MB of source)
//  - Course loads the SCORM runtime (scorm-again)
//  - AdminCohorts loads the xlsx parser
const ResourceMap = lazy(() => import('./pages/ResourceMap'));
const Course = lazy(() => import('./pages/Course'));
const AdminCohorts = lazy(() => import('./pages/AdminCohorts'));
const AdminBackoffice = lazy(() => import('./pages/AdminBackoffice'));

export default function App() {
  return (
    <Suspense fallback={<div style={{ minHeight: '60vh' }} />}>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources/map" element={<ResourceMap />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/about/partners" element={<Partners />} />
        <Route path="/terms" element={<LegalTerms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/legal-notice" element={<MentionsLegales />} />
        <Route path="/terms-of-sale" element={<SalesTerms />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} />
        </Route>

        <Route path="/enroll/:courseId" element={<Enroll />} />
        <Route path="/enroll/:courseId/success" element={<EnrollSuccess />} />
        <Route path="/enroll/:courseId/cancel" element={<EnrollCancel />} />

        <Route element={<ProtectedRoute requireRole={['cohort_manager', 'admin']} />}>
          <Route path="/admin/cohorts" element={<AdminCohorts />} />
        </Route>

        <Route element={<ProtectedRoute requireRole="admin" />}>
          <Route path="/admin" element={<AdminBackoffice />} />
        </Route>
      </Route>
    </Routes>
    </Suspense>
  );
}
