import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../hooks/useAuth';
import { apiFetch } from '../services/api';
import { isStripeConfigured } from '../services/stripe';
import { addSubmission } from '../services/submissions';
import './EnrollModal.css';

export default function EnrollModal({ course, onClose, onEnrolled }) {
  const { t } = useTranslation();
  const { user } = useAuth();
  const [tab, setTab] = useState('individual');

  if (!course) return null;

  const title = course.i18nKey ? t(`courses.${course.i18nKey}.title`) : course.title;
  const description = course.i18nKey ? t(`courses.${course.i18nKey}.description`) : course.description;
  const resolvedCourse = { ...course, title, description };

  return (
    <div className="enroll-modal-overlay" onClick={onClose}>
      <div className="enroll-modal" onClick={(e) => e.stopPropagation()}>
        <button className="enroll-modal-close" onClick={onClose}>&times;</button>

        <div className="enroll-modal-header">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className="enroll-modal-tabs">
          <button
            className={`enroll-modal-tab ${tab === 'individual' ? 'active' : ''}`}
            onClick={() => setTab('individual')}
          >
            {t('enrollModal.tabIndividual')}
          </button>
          <button
            className={`enroll-modal-tab ${tab === 'group' ? 'active' : ''}`}
            onClick={() => setTab('group')}
          >
            {t('enrollModal.tabGroup')}
          </button>
        </div>

        <div className="enroll-modal-body">
          {tab === 'individual' ? (
            <IndividualForm course={resolvedCourse} user={user} onEnrolled={onEnrolled} />
          ) : (
            <GroupForm course={resolvedCourse} user={user} />
          )}
        </div>
      </div>
    </div>
  );
}

function IndividualForm({ course, user, onEnrolled }) {
  const { t } = useTranslation();
  const [code, setCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [codeApplied, setCodeApplied] = useState(null);

  const handleApplyCode = () => {
    if (!code.trim()) return;
    setCodeApplied({ type: 'full', discount: 100 });
  };

  const displayPrice = codeApplied
    ? Math.max(0, course.price - (course.price * codeApplied.discount) / 100)
    : course.price;

  const isFree = course.free || displayPrice === 0;

  const handleCheckout = async () => {
    setError('');
    setLoading(true);

    try {
      if (isFree || !isStripeConfigured) {
        addSubmission('enrollment', {
          email: user?.email || '',
          firstName: user?.displayName?.split(' ')[0] || '',
          lastName: user?.displayName?.split(' ').slice(1).join(' ') || '',
          courseTitle: course.title,
          price: isFree ? 0 : displayPrice,
          code: code.trim() || undefined,
        });
        if (onEnrolled) onEnrolled(course.id);
        return;
      }

      const { url } = await apiFetch('/api/checkout/create-session', {
        method: 'POST',
        body: JSON.stringify({
          courseId: course.id,
          code: code.trim() || undefined,
        }),
      });

      if (url) {
        window.location.href = url;
      }
    } catch (err) {
      setError(err.message || 'Checkout failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="enroll-individual">
      <div className="enroll-individual-price-block">
        {codeApplied && course.price > 0 && (
          <span className="enroll-individual-original-price">{course.price} €</span>
        )}
        <span className="enroll-individual-price">
          {isFree ? t('courseCard.free') : `${displayPrice} €`}
        </span>
      </div>

      <div className="enroll-individual-fields">
        <div className="enroll-field">
          <label>{t('enrollModal.email')}</label>
          <input type="email" value={user?.email || ''} readOnly />
        </div>
        <div className="enroll-field-row">
          <div className="enroll-field">
            <label>{t('enrollModal.lastName')}</label>
            <input type="text" defaultValue={user?.displayName?.split(' ').slice(-1)[0] || ''} />
          </div>
          <div className="enroll-field">
            <label>{t('enrollModal.firstName')}</label>
            <input type="text" defaultValue={user?.displayName?.split(' ')[0] || ''} />
          </div>
        </div>
      </div>

      <div className="enroll-code-section">
        <label>{t('enrollModal.codeLabel')}</label>
        <div className="enroll-code-row">
          <input
            type="text"
            placeholder={t('enrollModal.codePlaceholder')}
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
              setCodeApplied(null);
            }}
          />
          <button
            className="enroll-code-apply"
            onClick={handleApplyCode}
            disabled={!code.trim()}
          >
            {t('enrollModal.codeApply')}
          </button>
        </div>
        {codeApplied && (
          <span className="enroll-code-success">
            {codeApplied.discount === 100
              ? t('enrollModal.codeFull')
              : t('enrollModal.codeDiscount', { percent: codeApplied.discount })}
          </span>
        )}
      </div>

      {!isFree && (
        <div className="enroll-card-fields">
          <p className="enroll-stripe-notice">{t('enrollModal.stripeNotice')}</p>
        </div>
      )}

      <button
        className="enroll-modal-cta"
        onClick={handleCheckout}
        disabled={loading}
      >
        {loading
          ? t('enroll.redirecting')
          : isFree
            ? t('enrollModal.enrollFree')
            : t('enroll.enrollNow')}
      </button>

      {error && <p className="enroll-modal-error">{error}</p>}
    </div>
  );
}

function GroupForm({ course, user }) {
  const { t } = useTranslation();
  const [selectedOffer, setSelectedOffer] = useState('cohort');
  const [nbPersons, setNbPersons] = useState('');
  const [comment, setComment] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addSubmission('group_request', {
      offer: selectedOffer,
      courseTitle: course?.title || '',
      nbPersons: nbPersons || null,
      email: user?.email || '',
      comment: comment.trim(),
    });
    setSent(true);
  };

  if (sent) {
    return (
      <div className="enroll-group-success">
        <span className="enroll-group-success-icon" aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <p>{t('enrollModal.groupSent')}</p>
      </div>
    );
  }

  return (
    <div className="enroll-group">
      <p className="enroll-group-intro">{t('enrollModal.groupIntro')}</p>

      <div className="enroll-group-offers">
        <button
          className={`enroll-group-offer ${selectedOffer === 'cohort' ? 'active' : ''}`}
          onClick={() => setSelectedOffer('cohort')}
          type="button"
        >
          <span className="enroll-group-offer-badge">{t('enrollModal.groupRecommended')}</span>
          <h4>{t('enrollModal.offerCohortTitle')}</h4>
          <p className="enroll-group-offer-desc">{t('enrollModal.offerCohortDesc')}</p>
          <span className="enroll-group-offer-price">850 €</span>
          <span className="enroll-group-offer-detail">{t('enrollModal.offerCohortDetail')}</span>
          <ul className="enroll-group-offer-list">
            <li>{t('enrollModal.offerCohortInclude1')}</li>
            <li>{t('enrollModal.offerCohortInclude2')}</li>
            <li>{t('enrollModal.offerCohortInclude3')}</li>
            <li>{t('enrollModal.offerCohortInclude4')}</li>
          </ul>
        </button>

        <button
          className={`enroll-group-offer ${selectedOffer === 'scorm' ? 'active' : ''}`}
          onClick={() => setSelectedOffer('scorm')}
          type="button"
        >
          <h4>{t('enrollModal.offerScormTitle')}</h4>
          <p className="enroll-group-offer-desc">{t('enrollModal.offerScormDesc')}</p>
          <span className="enroll-group-offer-price">{t('enrollModal.offerScormPrice')}</span>
          <span className="enroll-group-offer-detail">{t('enrollModal.offerScormDetail')}</span>
          <ul className="enroll-group-offer-list">
            <li>{t('enrollModal.offerScormInclude1')}</li>
            <li>{t('enrollModal.offerScormInclude2')}</li>
            <li>{t('enrollModal.offerScormInclude3')}</li>
            <li>{t('enrollModal.offerScormInclude4')}</li>
          </ul>
        </button>
      </div>

      <form onSubmit={handleSubmit} className="enroll-group-form">
        <div className="enroll-field">
          <label>{t('enrollModal.groupNbPersons')}</label>
          <input
            type="number"
            min="1"
            value={nbPersons}
            onChange={(e) => setNbPersons(e.target.value)}
            placeholder={t('enrollModal.groupNbPersonsPlaceholder')}
          />
        </div>

        <div className="enroll-field">
          <label>{t('enrollModal.email')}</label>
          <input type="email" value={user?.email || ''} readOnly />
        </div>

        <div className="enroll-field">
          <label>{t('enrollModal.groupComment')}</label>
          <textarea
            rows={3}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder={t('enrollModal.groupCommentPlaceholder')}
          />
        </div>

        <button type="submit" className="enroll-modal-cta">
          {t('enrollModal.groupSubmit')}
        </button>
      </form>
    </div>
  );
}
