// Inline Beehiiv subscribe form. Beehiiv's embed is a loader script that renders the form where
// the script is placed, so the script is inserted into this box on mount.
import { useEffect, useRef } from 'react';
import { BEEHIIV_LOADER } from './newsletter.js';

export default function BeehiivForm({ formId, style }) {
  const box = useRef(null);
  useEffect(() => {
    const el = box.current;
    if (!el || !formId) return;
    const s = document.createElement('script');
    s.async = true;
    s.src = BEEHIIV_LOADER;
    s.setAttribute('data-beehiiv-form', formId);
    el.appendChild(s);
    return () => { el.innerHTML = ''; };
  }, [formId]);
  return <div ref={box} style={style} />;
}
