import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { allCourses } from '../data/mockCourses';
import { validatePromoCode } from '../data/mockPromoCodes';
import { parseCsv, rowsToCsv, downloadCsv } from '../services/csv';
import './CreateCohortModal.css';

function generatePassword() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789';
  let pwd = '';
  for (let i = 0; i < 8; i++) pwd += chars[Math.floor(Math.random() * chars.length)];
  return pwd;
}

function buildUsername(firstName, lastName) {
  return (firstName + lastName).toLowerCase().replace(/[^a-z0-9]/g, '');
}

export default function CreateCohortModal({ onClose, onCreate }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const fileInputRef = useRef(null);

  const orgName = user?.organizationName || '';
  const currentYear = new Date().getFullYear();

  const [courseId, setCourseId] = useState(allCourses[0]?.id || '');
  const [suffix, setSuffix] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [maxStudents, setMaxStudents] = useState(20);

  const [promoCode, setPromoCode] = useState('');
  const [promoResult, setPromoResult] = useState(null);
  const [promoError, setPromoError] = useState(false);

  const [importedLearners, setImportedLearners] = useState([]);
  const [importError, setImportError] = useState('');

  const selectedCourse = allCourses.find((c) => c.id === courseId);
  const autoName = [orgName, selectedCourse?.title, currentYear].filter(Boolean).join(' - ');
  const fullName = suffix ? `${autoName} - ${suffix}` : autoName;

  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleApplyPromo = () => {
    const result = validatePromoCode(promoCode);
    if (result) {
      setPromoResult(result);
      setPromoError(false);
    } else {
      setPromoResult(null);
      setPromoError(true);
    }
  };

  const handleFileImport = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setImportError('');

    const reader = new FileReader();
    reader.onload = (evt) => {
      try {
        const rows = parseCsv(String(evt.target.result));

        const dataRows = rows.slice(1).filter((r) => r[0]?.trim() && r[1]?.trim());
        if (dataRows.length === 0) {
          setImportError(t('admin.modal.importEmpty'));
          return;
        }

        const learners = dataRows.map((row, i) => {
          const firstName = String(row[0]).trim();
          const lastName = String(row[1]).trim();
          return {
            id: `imported-${Date.now()}-${i}`,
            firstName,
            lastName,
            username: buildUsername(firstName, lastName),
            email: '',
            password: generatePassword(),
            status: 'never_connected',
            lastLogin: null,
          };
        });

        setImportedLearners(learners);
      } catch {
        setImportError(t('admin.modal.importError'));
      }
    };
    reader.readAsText(file);
  };

  const handleDownloadTemplate = () => {
    const csv = rowsToCsv([
      [t('admin.modal.templateFirstName'), t('admin.modal.templateLastName')],
      ['Jean', 'Dupont'],
      ['Marie', 'Martin'],
    ]);
    downloadCsv('template_apprenants.csv', csv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const enrolledStudents = importedLearners.map((l) => ({
      ...l,
      enrolledAt: new Date().toISOString().split('T')[0],
    }));

    const newCohort = {
      id: `cohort-${Date.now()}`,
      name: fullName,
      courseId,
      courseTitle: selectedCourse?.title || '',
      startDate,
      endDate,
      maxStudents: parseInt(maxStudents, 10),
      promoCode: promoResult ? promoCode.toUpperCase() : '',
      enrolledStudents,
      status: 'active',
    };

    if (enrolledStudents.length > 0) {
      console.log('[StepUP] Invitation emails to send:', enrolledStudents.map((s) => ({
        to: s.email || `${s.username}@pending`,
        username: s.username,
        password: s.password,
        course: selectedCourse?.title,
        site: window.location.origin,
      })));
    }

    onCreate(newCohort);
    onClose();
  };

  return (
    <div className="cohort-modal-overlay" onClick={onClose}>
      <div className="cohort-modal cohort-modal-wide" onClick={(e) => e.stopPropagation()}>
        <div className="cohort-modal-header">
          <h2>{t('admin.modal.title')}</h2>
          <button className="cohort-modal-close" onClick={onClose}>&times;</button>
        </div>

        <form className="cohort-modal-form" onSubmit={handleSubmit}>
          {/* Auto-generated name */}
          <div className="cohort-modal-field">
            <label>{t('admin.modal.name')}</label>
            <div className="cohort-name-preview">{autoName}</div>
            <input
              type="text"
              value={suffix}
              onChange={(e) => setSuffix(e.target.value)}
              placeholder={t('admin.modal.suffixPlaceholder')}
            />
            {suffix && (
              <div className="cohort-name-full">
                {t('admin.modal.fullName')}: <strong>{fullName}</strong>
              </div>
            )}
          </div>

          {/* Course selection */}
          <div className="cohort-modal-field">
            <label>{t('admin.modal.course')}</label>
            <select value={courseId} onChange={(e) => setCourseId(e.target.value)}>
              {allCourses.map((c) => (
                <option key={c.id} value={c.id}>{c.title}</option>
              ))}
            </select>
          </div>

          {/* Promo code */}
          <div className="cohort-modal-field">
            <label>{t('admin.modal.promoCode')}</label>
            <div className="cohort-promo-row">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => { setPromoCode(e.target.value); setPromoError(false); setPromoResult(null); }}
                placeholder={t('admin.modal.promoCodePlaceholder')}
              />
              <button type="button" className="cohort-promo-btn" onClick={handleApplyPromo}>
                {t('admin.modal.promoApply')}
              </button>
            </div>
            {promoResult && (
              <div className="cohort-promo-success">
                {t('admin.modal.promoSuccess')}
                <ul>
                  {promoResult.courses.map((c) => <li key={c.id}>{c.title}</li>)}
                </ul>
              </div>
            )}
            {promoError && (
              <div className="cohort-promo-error">{t('admin.modal.promoInvalid')}</div>
            )}
          </div>

          {/* Dates */}
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
              max="200"
              value={maxStudents}
              onChange={(e) => setMaxStudents(e.target.value)}
              required
            />
          </div>

          {/* Import learners */}
          <div className="cohort-modal-field">
            <label>{t('admin.modal.importTitle')}</label>
            <p className="cohort-import-hint">{t('admin.modal.importHint')}</p>
            <div className="cohort-import-actions">
              <button type="button" className="cohort-import-template-btn" onClick={handleDownloadTemplate}>
                {t('admin.modal.downloadTemplate')}
              </button>
              <button type="button" className="cohort-import-btn" onClick={() => fileInputRef.current?.click()}>
                {t('admin.modal.importFile')}
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".csv,text/csv"
                onChange={handleFileImport}
                style={{ display: 'none' }}
              />
            </div>
            {importError && <div className="cohort-import-error">{importError}</div>}
          </div>

          {/* Preview imported learners */}
          {importedLearners.length > 0 && (
            <div className="cohort-modal-field">
              <label>{t('admin.modal.importedCount', { count: importedLearners.length })}</label>
              <div className="cohort-import-preview-wrap">
                <table className="cohort-import-preview">
                  <thead>
                    <tr>
                      <th>{t('admin.modal.templateFirstName')}</th>
                      <th>{t('admin.modal.templateLastName')}</th>
                      <th>{t('admin.modal.username')}</th>
                      <th>{t('admin.modal.password')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importedLearners.map((l) => (
                      <tr key={l.id}>
                        <td>{l.firstName}</td>
                        <td>{l.lastName}</td>
                        <td>{l.username}</td>
                        <td><code>{l.password}</code></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="cohort-import-email-notice">
                {t('admin.modal.emailNotice')}
              </div>
            </div>
          )}

          <button type="submit" className="cohort-modal-submit">
            {t('admin.modal.submit')}
          </button>
        </form>
      </div>
    </div>
  );
}
