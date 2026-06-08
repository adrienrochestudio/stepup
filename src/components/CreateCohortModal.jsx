import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { allCourses } from '../data/mockCourses';
import './CreateCohortModal.css';

export default function CreateCohortModal({ onClose, onCreate }) {
  const { t } = useTranslation();
  const [name, setName] = useState('');
  const [courseId, setCourseId] = useState(allCourses[0]?.id || '');
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
    const course = allCourses.find((c) => c.id === courseId);
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
          <h2>{t('admin.modal.title')}</h2>
          <button className="cohort-modal-close" onClick={onClose}>&times;</button>
        </div>

        <form className="cohort-modal-form" onSubmit={handleSubmit}>
          <div className="cohort-modal-field">
            <label>{t('admin.modal.name')}</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder={t('admin.modal.namePlaceholder')}
              required
            />
          </div>

          <div className="cohort-modal-field">
            <label>{t('admin.modal.course')}</label>
            <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
              {allCourses.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          <div className="cohort-modal-row">
            <div className="cohort-modal-field">
              <label>{t('admin.modal.startDate')}</label>
              <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
            </div>
            <div className="cohort-modal-field">
              <label>{t('admin.modal.endDate')}</label>
              <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
            </div>
          </div>

          <div className="cohort-modal-field">
            <label>{t('admin.modal.maxStudents')}</label>
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
            {t('admin.modal.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
