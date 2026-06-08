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
import AdminCohorts from './pages/AdminCohorts';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/resources/map" element={<ResourceMap />} />
        <Route path="/resources/webinars" element={<Webinars />} />
        <Route path="/login" element={<Login />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/course/:id" element={<Course />} />
        </Route>

        <Route path="/enroll/:courseId" element={<Enroll />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/admin/cohorts" element={<AdminCohorts />} />
        </Route>
      </Route>
    </Routes>
  );
}
