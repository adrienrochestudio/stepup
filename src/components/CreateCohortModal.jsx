import { useState, useEffect } from 'react';
import { mockCourses } from '../data/mockCourses';
import './CreateCohortModal.css';

export default function CreateCohortModal({ onClose, onCreate }) {
  const [name, setName] = useState('');
  const [courseId, setCourseId] = useState(mockCourses[0]?.id || '');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [maxStudents, setMaxStudents] = useState(20);

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const course = mockCourses.find((c) => c.id === courseId);
    onCreate({
      id: `cohort-${Date.now()}`,
      name,
      courseId,
      courseTitle: course?.title || '',
      startDate,
      endDate,
      maxStudents: parseInt(maxStudents, 10),
      enrolledStudents: [],
      status: 'upcoming',
    });
    onClose();
  };

  return (
    <div className="cohort-modal-overlay" onClick={onClose}>
      <div className="cohort-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cohort-modal-header">
          <h2>Create New Cohort</h2>
          <button className="cohort-modal-close" onClick={onClose}>&times;</button>
        </div>

        <form className="cohort-modal-form" onSubmit={handleSubmit}>
          <div className="cohort-modal-field">
            <label>Cohort Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Promotion Été 2025"
              required
            />
          </div>

          <div className="cohort-modal-field">
            <label>Course</label>
            <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
              {mockCourses.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div className="cohort-modal-row">
            <div className="cohort-modal-field">
              <label>Start Date</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="cohort-modal-field">
              <label>End Date</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
          </div>

          <div className="cohort-modal-field">
            <label>Max Students</label>
            <input
              type="number"
              min="1"
              max="100"
              value={maxStudents}
              onChange={(e) => setMaxStudents(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="cohort-modal-submit">
            Create Cohort
          </button>
        </form>
      </div>
    </div>
  );
}
