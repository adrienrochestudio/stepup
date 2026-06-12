import { useMemo, useState } from 'react';
import i18n from '../i18n';
import { objectsToCsv, downloadCsv } from '../services/csv';
import CohortTracker from '../components/CohortTracker';
import CreateCohortModal from '../components/CreateCohortModal';
import { initialCohorts } from '../data/mockCohorts';
import { initialAccounts, platformStats } from '../data/mockAccounts';
import { allCourses } from '../data/mockCourses';
import {
  getSubmissions,
  setSubmissionStatus,
} from '../services/submissions';
import './AdminBackoffice.css';

const SECTIONS = ['overview', 'inbox', 'accounts', 'cohorts', 'promoCodes', 'certificates'];
const ACCOUNTS_PER_PAGE = 10;

const SUBMISSION_TYPE_KEYS = {
  map_contribution: 'typeMapContribution',
  map_amendment: 'typeMapAmendment',
  group_request: 'typeGroupRequest',
  enrollment: 'typeEnrollment',
};

function formatDate(iso) {
  if (!iso) return '-';
  return new Date(iso).toLocaleDateString('fr-FR', {
    day: 'numeric', month: 'short', year: 'numeric',
  });
}

function courseTitle(t, courseId) {
  const course = allCourses.find((c) => c.id === courseId);
  return course ? t(`courses.${course.i18nKey}.title`) : courseId;
}

// The back-office is an internal admin tool and stays in French regardless
// of the site language.
const t = i18n.getFixedT('fr');

export default function AdminBackoffice() {
  const [section, setSection] = useState('overview');
  const [submissions, setSubmissions] = useState(getSubmissions);
  const [accounts, setAccounts] = useState<any[]>(initialAccounts);
  const [cohorts, setCohorts] = useState(initialCohorts);
  const [showCohortModal, setShowCohortModal] = useState(false);
  const [promoCodes, setPromoCodes] = useState([
    { code: 'SUPERCODETROPBIEN', type: 'full_access', active: true, uses: 12 },
  ]);
  const [newPromo, setNewPromo] = useState('');
  const [inboxFilter, setInboxFilter] = useState('all');
  const [certSent, setCertSent] = useState({});
  const [accountSearch, setAccountSearch] = useState('');
  const [accountRoleFilter, setAccountRoleFilter] = useState('all');
  const [accountPage, setAccountPage] = useState(1);

  const newCount = submissions.filter((s) => s.status === 'new').length;
  const pendingCohorts = cohorts.filter((c) => c.status === 'pending_approval');

  const learners = accounts.filter((a) => a.role === 'learner');
  const managers = accounts.filter((a) => a.role === 'cohort_manager');

  const completedLearners = learners.filter((l) =>
    (l.courses || []).some((c) => c.status === 'completed'),
  );

  const filteredAccounts = useMemo(() => {
    let list = accounts;
    if (accountRoleFilter !== 'all') {
      list = list.filter((a) => a.role === accountRoleFilter);
    }
    if (accountSearch.trim()) {
      const q = accountSearch.toLowerCase();
      list = list.filter((a) =>
        `${a.firstName} ${a.lastName} ${a.email} ${a.organization} ${a.country} ${a.jobTitle || ''}`
          .toLowerCase()
          .includes(q),
      );
    }
    return list;
  }, [accounts, accountRoleFilter, accountSearch]);

  const totalAccountPages = Math.max(1, Math.ceil(filteredAccounts.length / ACCOUNTS_PER_PAGE));
  const pagedAccounts = filteredAccounts.slice(
    (accountPage - 1) * ACCOUNTS_PER_PAGE,
    accountPage * ACCOUNTS_PER_PAGE,
  );

  const visibleSubmissions = useMemo(() => {
    if (inboxFilter === 'all') return submissions;
    return submissions.filter((s) => s.type === inboxFilter);
  }, [submissions, inboxFilter]);

  const handleSubmissionStatus = (id, status) => {
    setSubmissionStatus(id, status);
    setSubmissions(getSubmissions());
  };

  const handleToggleAccountStatus = (id) => {
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, status: a.status === 'active' ? 'suspended' : 'active' }
          : a,
      ),
    );
  };

  const handleRemoveAccount = (id) => {
    setAccounts((prev) => prev.filter((a) => a.id !== id));
  };

  const handleToggleManagerExport = (id) => {
    setAccounts((prev) =>
      prev.map((a) =>
        a.id === id
          ? { ...a, restrictions: { ...a.restrictions, canExport: !a.restrictions?.canExport } }
          : a,
      ),
    );
  };

  const handleApproveCohort = (id) => {
    setCohorts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'active' } : c)),
    );
  };

  const handleRejectCohort = (id) => {
    setCohorts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, status: 'rejected' } : c)),
    );
  };

  const handleAddPromo = (e) => {
    e.preventDefault();
    const code = newPromo.trim().toUpperCase();
    if (!code || promoCodes.some((p) => p.code === code)) return;
    setPromoCodes((prev) => [...prev, { code, type: 'full_access', active: true, uses: 0 }]);
    setNewPromo('');
  };

  const handleTogglePromo = (code) => {
    setPromoCodes((prev) =>
      prev.map((p) => (p.code === code ? { ...p, active: !p.active } : p)),
    );
  };

  const handleSendCertificate = (learnerId) => {
    setCertSent((prev) => ({ ...prev, [learnerId]: true }));
  };

  const handleGlobalExport = () => {
    const rows = accounts.map((a) => ({
      [t('backoffice.colName')]: `${a.firstName} ${a.lastName}`,
      Email: a.email,
      [t('backoffice.colRole')]: t(`backoffice.role_${a.role}`),
      [t('backoffice.colOrganization')]: a.organization,
      [t('login.country')]: a.country,
      [t('backoffice.colStatus')]: t(`backoffice.status_${a.status}`),
      [t('cohortTracker.lastActive')]: a.lastLogin ? formatDate(a.lastLogin) : '-',
      [t('backoffice.colCourses')]: (a.courses || [])
        .map((c) => `${courseTitle(t, c.courseId)} (${c.progress}%)`)
        .join(' | '),
    }));
    downloadCsv('stepup_reporting_global.csv', objectsToCsv(rows));
  };

  const renderSubmissionDetail = (s) => {
    const p = s.payload;
    switch (s.type) {
      case 'map_contribution':
        return (
          <>
            <p className="bo-sub-meta">{p.name} · {p.email} · {p.organization} · <strong>{p.country}</strong></p>
            {Object.entries((p.fields || {}) as Record<string, string>).filter(([, v]) => v?.trim()).map(([k, v]) => (
              <p key={k} className="bo-sub-field"><strong>{k}</strong> : {v}</p>
            ))}
          </>
        );
      case 'map_amendment':
        return (
          <>
            <p className="bo-sub-meta">{p.name} · {p.email} · {p.organization} · <strong>{p.country}</strong></p>
            {p.amendmentSection && <p className="bo-sub-field"><strong>{t('backoffice.section')}</strong> : {p.amendmentSection}</p>}
            <p className="bo-sub-field">{p.amendmentText}</p>
          </>
        );
      case 'group_request':
        return (
          <>
            <p className="bo-sub-meta">{p.email} · {p.nbPersons} {t('backoffice.persons')} · {p.offer === 'scorm' ? 'SCORM' : t('enrollModal.offerCohortTitle')}</p>
            {p.courseTitle && <p className="bo-sub-field"><strong>{t('admin.modal.course')}</strong> : {p.courseTitle}</p>}
            {p.comment && <p className="bo-sub-field">{p.comment}</p>}
          </>
        );
      case 'enrollment':
        return (
          <p className="bo-sub-meta">
            {p.firstName} {p.lastName} · {p.email} · {p.courseTitle}
            {typeof p.price === 'number' && <> · {p.price > 0 ? `${p.price} €` : t('courseCard.free')}</>}
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <div className="backoffice">
      <aside className="bo-sidebar">
        <div className="bo-sidebar-title">{t('backoffice.title')}</div>
        <nav>
          {SECTIONS.map((key) => (
            <button
              key={key}
              className={`bo-nav-btn ${section === key ? 'active' : ''}`}
              onClick={() => setSection(key)}
            >
              {t(`backoffice.nav.${key}`)}
              {key === 'inbox' && newCount > 0 && (
                <span className="bo-nav-badge">{newCount}</span>
              )}
              {key === 'cohorts' && pendingCohorts.length > 0 && (
                <span className="bo-nav-badge">{pendingCohorts.length}</span>
              )}
            </button>
          ))}
        </nav>
        <button className="bo-export-btn" onClick={handleGlobalExport}>
          {t('backoffice.globalExport')}
        </button>
      </aside>

      <main className="bo-main">
        {section === 'overview' && (
          <section>
            <h1>{t('backoffice.nav.overview')}</h1>
            <div className="bo-kpis">
              <div className="bo-kpi">
                <span className="bo-kpi-value">{platformStats.totalAccounts.toLocaleString()}</span>
                <span className="bo-kpi-label">{t('backoffice.kpiAccounts')}</span>
              </div>
              <div className="bo-kpi">
                <span className="bo-kpi-value">{platformStats.totalManagers}</span>
                <span className="bo-kpi-label">{t('backoffice.kpiManagers')}</span>
              </div>
              <div className="bo-kpi">
                <span className="bo-kpi-value">{platformStats.totalCohorts}</span>
                <span className="bo-kpi-label">{t('backoffice.kpiCohorts')}</span>
              </div>
              <div className="bo-kpi">
                <span className="bo-kpi-value">{platformStats.coursesInProgress}</span>
                <span className="bo-kpi-label">{t('backoffice.kpiInProgress')}</span>
              </div>
              <div className="bo-kpi">
                <span className="bo-kpi-value">{platformStats.coursesCompleted}</span>
                <span className="bo-kpi-label">{t('backoffice.kpiCompletions')}</span>
              </div>
              <div className="bo-kpi bo-kpi-alert">
                <span className="bo-kpi-value">{newCount + pendingCohorts.length}</span>
                <span className="bo-kpi-label">{t('backoffice.kpiPending')}</span>
              </div>
            </div>

            <h2>{t('backoffice.recentSubmissions')}</h2>
            <div className="bo-sub-list">
              {submissions.slice(0, 4).map((s) => (
                <div key={s.id} className={`bo-sub-card status-${s.status}`}>
                  <div className="bo-sub-head">
                    <span className="bo-sub-type">{t(`backoffice.${SUBMISSION_TYPE_KEYS[s.type]}`)}</span>
                    <span className="bo-sub-date">{formatDate(s.createdAt)}</span>
                  </div>
                  {renderSubmissionDetail(s)}
                </div>
              ))}
            </div>
          </section>
        )}

        {section === 'inbox' && (
          <section>
            <h1>{t('backoffice.nav.inbox')}</h1>
            <div className="bo-inbox-filters">
              {['all', 'map_contribution', 'map_amendment', 'group_request', 'enrollment'].map((f) => (
                <button
                  key={f}
                  className={`bo-filter-btn ${inboxFilter === f ? 'active' : ''}`}
                  onClick={() => setInboxFilter(f)}
                >
                  {f === 'all' ? t('backoffice.filterAll') : t(`backoffice.${SUBMISSION_TYPE_KEYS[f]}`)}
                </button>
              ))}
            </div>
            <div className="bo-sub-list">
              {visibleSubmissions.length === 0 && (
                <p className="bo-empty">{t('backoffice.inboxEmpty')}</p>
              )}
              {visibleSubmissions.map((s) => (
                <div key={s.id} className={`bo-sub-card status-${s.status}`}>
                  <div className="bo-sub-head">
                    <span className="bo-sub-type">{t(`backoffice.${SUBMISSION_TYPE_KEYS[s.type]}`)}</span>
                    <span className={`bo-sub-status status-${s.status}`}>
                      {t(`backoffice.subStatus_${s.status}`)}
                    </span>
                    <span className="bo-sub-date">{formatDate(s.createdAt)}</span>
                  </div>
                  {renderSubmissionDetail(s)}
                  {s.status === 'new' && (
                    <div className="bo-sub-actions">
                      <button onClick={() => handleSubmissionStatus(s.id, 'processed')}>
                        {t('backoffice.markProcessed')}
                      </button>
                      <button className="danger" onClick={() => handleSubmissionStatus(s.id, 'rejected')}>
                        {t('backoffice.markRejected')}
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {section === 'accounts' && (
          <section>
            <h1>{t('backoffice.nav.accounts')} <span className="bo-count">({platformStats.totalAccounts.toLocaleString()})</span></h1>
            <div className="bo-accounts-toolbar">
              <input
                type="text"
                className="bo-search"
                placeholder={t('backoffice.searchPlaceholder')}
                value={accountSearch}
                onChange={(e) => { setAccountSearch(e.target.value); setAccountPage(1); }}
              />
              <div className="bo-inbox-filters">
                {['all', 'learner', 'cohort_manager', 'admin'].map((r) => (
                  <button
                    key={r}
                    className={`bo-filter-btn ${accountRoleFilter === r ? 'active' : ''}`}
                    onClick={() => { setAccountRoleFilter(r); setAccountPage(1); }}
                  >
                    {r === 'all' ? t('backoffice.filterAll') : t(`backoffice.role_${r}`)}
                  </button>
                ))}
              </div>
            </div>
            <div className="bo-table-wrap">
              <table className="bo-table">
                <thead>
                  <tr>
                    <th>{t('backoffice.colName')}</th>
                    <th>{t('backoffice.colRole')}</th>
                    <th>{t('backoffice.colJobTitle')}</th>
                    <th>{t('backoffice.colOrganization')}</th>
                    <th>{t('backoffice.colStatus')}</th>
                    <th>{t('cohortTracker.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {pagedAccounts.map((a) => (
                    <tr key={a.id} className={a.status === 'suspended' ? 'suspended' : ''}>
                      <td>
                        <div className="learner-name">{a.firstName} {a.lastName}</div>
                        <div className="learner-email">{a.email}</div>
                      </td>
                      <td>
                        <span className={`bo-role-badge role-${a.role}`}>{t(`backoffice.role_${a.role}`)}</span>
                        {a.role === 'cohort_manager' && (
                          <div className="bo-manager-meta">
                            <span className="bo-muted">{t('backoffice.quota')}: {a.restrictions?.usedCohorts || 0}/{a.restrictions?.maxCohorts || 0}</span>
                            <label className="bo-restriction-toggle">
                              <input
                                type="checkbox"
                                checked={!!a.restrictions?.canExport}
                                onChange={() => handleToggleManagerExport(a.id)}
                              />
                              {t('backoffice.canExport')}
                            </label>
                          </div>
                        )}
                      </td>
                      <td className="bo-muted">{a.jobTitle || '-'}</td>
                      <td>{a.organization}<br /><span className="bo-muted">{a.country}</span></td>
                      <td>
                        <span className={`bo-status-badge status-${a.status}`}>
                          {t(`backoffice.status_${a.status}`)}
                        </span>
                      </td>
                      <td>
                        {a.role !== 'admin' && (
                          <div className="bo-row-actions">
                            <button onClick={() => handleToggleAccountStatus(a.id)}>
                              {a.status === 'active' ? t('backoffice.suspend') : t('backoffice.reactivate')}
                            </button>
                            <button className="danger" onClick={() => handleRemoveAccount(a.id)}>
                              {t('backoffice.remove')}
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {totalAccountPages > 1 && (
              <div className="bo-pagination">
                <button disabled={accountPage <= 1} onClick={() => setAccountPage((p) => p - 1)}>&laquo;</button>
                <span>{accountPage} / {totalAccountPages}</span>
                <button disabled={accountPage >= totalAccountPages} onClick={() => setAccountPage((p) => p + 1)}>&raquo;</button>
              </div>
            )}
          </section>
        )}

        {section === 'cohorts' && (
          <section>
            <div className="bo-section-head">
              <h1>{t('backoffice.nav.cohorts')} <span className="bo-count">({platformStats.totalCohorts})</span></h1>
              <button className="bo-primary-btn" onClick={() => setShowCohortModal(true)}>
                {t('admin.createCohort')}
              </button>
            </div>

            {pendingCohorts.length > 0 && (
              <div className="bo-pending-section">
                <h2>{t('backoffice.pendingApproval')} ({pendingCohorts.length})</h2>
                <div className="bo-sub-list">
                  {pendingCohorts.map((c) => (
                    <div key={c.id} className="bo-sub-card status-new">
                      <div className="bo-sub-head">
                        <span className="bo-sub-type">{t('backoffice.typeCohortRequest')}</span>
                        <span className="bo-sub-status status-new">{t('backoffice.statusPending')}</span>
                        <span className="bo-sub-date">{formatDate(c.startDate)}</span>
                      </div>
                      <p className="bo-sub-meta">
                        <strong>{c.name}</strong>
                      </p>
                      <p className="bo-sub-field">
                        {t('backoffice.requestedBy')}: {c.managerName} · {c.courseTitle} · {c.maxStudents} {t('backoffice.persons')}
                      </p>
                      <div className="bo-sub-actions">
                        <button onClick={() => handleApproveCohort(c.id)}>
                          {t('backoffice.approve')}
                        </button>
                        <button className="danger" onClick={() => handleRejectCohort(c.id)}>
                          {t('backoffice.markRejected')}
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <CohortTracker cohorts={cohorts.filter((c) => c.status === 'active')} />
          </section>
        )}

        {section === 'promoCodes' && (
          <section>
            <h1>{t('backoffice.nav.promoCodes')}</h1>
            <form className="bo-promo-form" onSubmit={handleAddPromo}>
              <input
                type="text"
                value={newPromo}
                onChange={(e) => setNewPromo(e.target.value)}
                placeholder={t('backoffice.promoPlaceholder')}
              />
              <button type="submit" className="bo-primary-btn" disabled={!newPromo.trim()}>
                {t('backoffice.promoCreate')}
              </button>
            </form>
            <div className="bo-table-wrap">
              <table className="bo-table">
                <thead>
                  <tr>
                    <th>Code</th>
                    <th>{t('backoffice.promoUses')}</th>
                    <th>{t('backoffice.colStatus')}</th>
                    <th>{t('cohortTracker.actions')}</th>
                  </tr>
                </thead>
                <tbody>
                  {promoCodes.map((p) => (
                    <tr key={p.code}>
                      <td><code className="bo-code">{p.code}</code></td>
                      <td>{p.uses}</td>
                      <td>
                        <span className={`bo-status-badge status-${p.active ? 'active' : 'suspended'}`}>
                          {p.active ? t('backoffice.promoActive') : t('backoffice.promoInactive')}
                        </span>
                      </td>
                      <td>
                        <div className="bo-row-actions">
                          <button onClick={() => handleTogglePromo(p.code)}>
                            {p.active ? t('backoffice.promoDeactivate') : t('backoffice.reactivate')}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {section === 'certificates' && (
          <section>
            <h1>{t('backoffice.nav.certificates')}</h1>
            {completedLearners.length === 0 ? (
              <p className="bo-empty">{t('cohortTracker.noCertificates')}</p>
            ) : (
              <div className="bo-table-wrap">
                <table className="bo-table">
                  <thead>
                    <tr>
                      <th>{t('cohortTracker.learner')}</th>
                      <th>{t('admin.modal.course')}</th>
                      <th>{t('cohortTracker.certificate')}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {completedLearners.flatMap((l) =>
                      (l.courses || [])
                        .filter((c) => c.status === 'completed')
                        .map((c) => (
                          <tr key={`${l.id}-${c.courseId}`}>
                            <td>
                              <div className="learner-name">{l.firstName} {l.lastName}</div>
                              <div className="learner-email">{l.email}</div>
                            </td>
                            <td>{courseTitle(t, c.courseId)}</td>
                            <td>
                              <button
                                className="bo-primary-btn small"
                                disabled={certSent[`${l.id}-${c.courseId}`]}
                                onClick={() => handleSendCertificate(`${l.id}-${c.courseId}`)}
                              >
                                {certSent[`${l.id}-${c.courseId}`]
                                  ? t('backoffice.certSent')
                                  : t('backoffice.sendCertificate')}
                              </button>
                            </td>
                          </tr>
                        )),
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        )}
      </main>

      {showCohortModal && (
        <CreateCohortModal
          onClose={() => setShowCohortModal(false)}
          onCreate={(c) => setCohorts((prev) => [c, ...prev])}
        />
      )}
    </div>
  );
}
