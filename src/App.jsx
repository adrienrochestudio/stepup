import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProtectedRoute from './components/ProtectedRoute';
import Home from './pages/Home';
import ResourceMap from './pages/ResourceMap';
import Webinars from './pages/Webinars';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Course from './pages/Course';
import Enroll from './pages/Enroll';
import EnrollSuccess from './pages/EnrollSuccess';
import EnrollCancel from './pages/EnrollCancel';
import AdminCohorts from './pages/AdminCohorts';
import AboutEurimagesEcoprod from './pages/AboutEurimagesEcoprod';
import Partners from './pages/Partners';
import LegalTerms from './pages/LegalTerms';
import PrivacyPolicy from './pages/PrivacyPolicy';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources/map" element={<ResourceMap />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/about/eurimages-ecoprod" element={<AboutEurimagesEcoprod />} />
        <Route path="/about/partners" element={<Partners />} />
        <Route path="/terms" element={<LegalTerms />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} />
        </Route>

        <Route path="/enroll/:courseId" element={<Enroll />} />
        <Route path="/enroll/:courseId/success" element={<EnrollSuccess />} />
        <Route path="/enroll/:courseId/cancel" element={<EnrollCancel />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin/cohorts" element={<AdminCohorts />} />
        </Route>
      </Route>
    </Routes>
  );
}
