// Renders the "StepUP is a Eurimages initiative developed by Ecoprod."
// sentence with Eurimages and Ecoprod always clickable, in any language.
export default function PartnersIntro({ text, lang }) {
  const ecoprodUrl = lang === 'fr' ? 'https://ecoprod.com' : 'https://ecoprod.com/en/';
  const parts = text.split(/(Eurimages|Ecoprod)/);

  return parts.map((part, i) => {
    if (part === 'Eurimages') {
      return (
        <a key={i} href="https://www.coe.int/en/web/eurimages" target="_blank" rel="noopener noreferrer">
          Eurimages
        </a>
      );
    }
    if (part === 'Ecoprod') {
      return (
        <a key={i} href={ecoprodUrl} target="_blank" rel="noopener noreferrer">
          Ecoprod
        </a>
      );
    }
    return part;
  });
}
