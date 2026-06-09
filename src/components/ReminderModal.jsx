import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './ReminderModal.css';

const reminderTemplates = {
  fr: (name, course) => `Bonjour ${name},\n\nNous vous rappelons que vous êtes inscrit(e) au cours "${course}" sur la plateforme StepUP.\n\nN'hésitez pas à vous connecter pour poursuivre votre formation.\n\nCordialement,\nL'équipe StepUP`,
  en: (name, course) => `Hello ${name},\n\nThis is a reminder that you are enrolled in the course "${course}" on the StepUP platform.\n\nPlease log in to continue your training.\n\nBest regards,\nThe StepUP Team`,
  es: (name, course) => `Hola ${name},\n\nLe recordamos que está inscrito/a en el curso "${course}" en la plataforma StepUP.\n\nNo dude en conectarse para continuar su formación.\n\nCordialmente,\nEl equipo StepUP`,
  de: (name, course) => `Hallo ${name},\n\nWir möchten Sie daran erinnern, dass Sie für den Kurs "${course}" auf der StepUP-Plattform angemeldet sind.\n\nBitte melden Sie sich an, um Ihre Weiterbildung fortzusetzen.\n\nMit freundlichen Grüßen,\nDas StepUP-Team`,
};

export default function ReminderModal({ learner, courseTitle, onClose }) {
  const { t } = useTranslation();
  const [lang, setLang] = useState('fr');
  const learnerName = `${learner.firstName} ${learner.lastName}`;
  const [message, setMessage] = useState(reminderTemplates.fr(learnerName, courseTitle));
  const [sent, setSent] = useState(false);

  const handleLangChange = (newLang) => {
    setLang(newLang);
    setMessage(reminderTemplates[newLang](learnerName, courseTitle));
  };

  const handleSend = () => {
    console.log('[StepUP] Reminder email:', {
      to: learner.email || `${learner.username}@pending`,
      lang,
      message,
    });
    setSent(true);
  };

  return (
    <div className="reminder-overlay" onClick={onClose}>
      <div className="reminder-modal" onClick={(e) => e.stopPropagation()}>
        <div className="reminder-header">
          <h3>{t('reminder.title', { name: learnerName })}</h3>
          <button className="reminder-close" onClick={onClose}>&times;</button>
        </div>

        {sent ? (
          <div className="reminder-sent">
            <span className="reminder-sent-icon">&#10003;</span>
            <p>{t('reminder.sent')}</p>
          </div>
        ) : (
          <>
            <div className="reminder-lang-row">
              <label>{t('reminder.language')}</label>
              <div className="reminder-lang-options">
                {['fr', 'en', 'es', 'de'].map((l) => (
                  <button
                    key={l}
                    type="button"
                    className={`reminder-lang-btn ${lang === l ? 'active' : ''}`}
                    onClick={() => handleLangChange(l)}
                  >
                    {l.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            <textarea
              className="reminder-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={8}
            />

            <button className="reminder-send-btn" onClick={handleSend}>
              {t('reminder.send')}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
