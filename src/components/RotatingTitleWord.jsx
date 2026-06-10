import { useEffect, useState } from 'react';
import './RotatingTitleWord.css';

export default function RotatingTitleWord({ items, interval = 3500 }) {
  const [state, setState] = useState({ index: 0, prev: null });

  useEffect(() => {
    setState({ index: 0, prev: null });
    if (!items || items.length < 2) return undefined;
    const id = setInterval(() => {
      setState((s) => ({ index: (s.index + 1) % items.length, prev: s.index }));
    }, interval);
    return () => clearInterval(id);
  }, [items, interval]);

  if (!items || items.length === 0) return null;

  return (
    <span className="rotating-word" aria-live="polite">
      {state.prev !== null && (
        <span key={`out-${state.prev}-${state.index}`} className="rotating-word-item out" aria-hidden="true">
          {items[state.prev]}
        </span>
      )}
      <span key={`in-${state.index}`} className="rotating-word-item in">
        {items[state.index]}
      </span>
    </span>
  );
}
