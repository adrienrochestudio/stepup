import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const languages = [
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
  { code: 'es', label: 'Español' },
  { code: 'de', label: 'Deutsch' },
  { code: 'pt', label: 'Português' },
  { code: 'it', label: 'Italiano' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = i18n.language?.substring(0, 2) || 'fr';

  const handleChange = (code) => {
    i18n.changeLanguage(code);
    setOpen(false);
  };

  return (
    <div className="lang-switcher" ref={ref}>
      <button className="lang-switcher-btn" onClick={() => setOpen(!open)}>
        {currentLang.toUpperCase()}
      </button>

      {open && (
        <div className="lang-switcher-dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`lang-option ${currentLang === lang.code ? 'active' : ''}`}
              onClick={() => handleChange(lang.code)}
            >
              {lang.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
