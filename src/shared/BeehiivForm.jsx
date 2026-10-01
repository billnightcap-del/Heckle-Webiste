// Inline Beehiiv subscribe form. Beehiiv's embed is a script that renders where it is placed,
// so the script is inserted into this box on mount.
import { useEffect, useRef } from 'react';

export default function BeehiivForm({ src, style }) {
  const box = useRef(null);
  useEffect(() => {
    const el = box.current;
    if (!el || !src) return;
    const s = document.createElement('script');
    s.src = src;
    s.async = true;
    el.appendChild(s);
    return () => { el.innerHTML = ''; };
  }, [src]);
  return <div ref={box} style={style} />;
}
