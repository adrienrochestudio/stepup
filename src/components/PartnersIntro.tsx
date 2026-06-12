// The "StepUP is a Eurimages initiative developed by Ecoprod." sentence must
// ALWAYS render in English and in italic, regardless of the UI language
// (brand rule). Eurimages and Ecoprod stay clickable and highlight on click.
const INITIATIVE_EN = 'StepUP is a Eurimages initiative developed by Ecoprod.';

export default function PartnersIntro({ lang }: { lang?: string }) {
  const ecoprodUrl = lang === 'fr' ? 'https://ecoprod.com' : 'https://ecoprod.com/en/';
  const parts = INITIATIVE_EN.split(/(Eurimages|Ecoprod)/);

  return (
    <em className="partners-intro-text">
      {parts.map((part, i) => {
        if (part === 'Eurimages') {
          return (
            <a key={i} href="https://www.coe.int/en/web/eurimages" target="_blank" rel="noopener noreferrer" className="link-highlight">
              Eurimages
            </a>
          );
        }
        if (part === 'Ecoprod') {
          return (
            <a key={i} href={ecoprodUrl} target="_blank" rel="noopener noreferrer" className="link-highlight">
              Ecoprod
            </a>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </em>
  );
}
