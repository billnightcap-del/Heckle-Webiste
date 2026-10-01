// Image slot: fills its container with a cover-cropped photo. Slots without a
// photo yet render a quiet placeholder that names the shot the design calls for.
// To add a photo, drop the file in public/images/ and map the slot id below.
const IMAGES = {
  'hero-a': 'images/hero-a.webp',
  'hero-b': 'images/hero-b.webp',
};

const box = { display: 'block', position: 'relative', width: '100%', height: '100%', aspectRatio: '3 / 2', overflow: 'hidden' };

export default function ImageSlot({ id, placeholder, src, alt }) {
  const url = src || IMAGES[id];
  if (url) {
    return (
      <span style={box}>
        <img src={url} alt={alt ?? placeholder ?? ''} loading="lazy" decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </span>
    );
  }
  return (
    <span style={{ ...box, background: 'rgba(127,127,127,.08)' }} role="img" aria-label={placeholder}>
      <span style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, padding: 12, boxSizing: 'border-box', textAlign: 'center', color: '#5a5a56', font: '12px/1.35 system-ui, -apple-system, sans-serif', letterSpacing: '0.02em' }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="m21 15-5-5L5 21" />
        </svg>
        <span style={{ maxWidth: '92%' }}>{placeholder}</span>
      </span>
    </span>
  );
}
