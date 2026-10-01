// The Setlist runs on Beehiiv. Set VITE_BEEHIIV_FORM_ID to the ID from your Beehiiv subscribe
// form's embed code (the part after embeds.beehiiv.com/). Until then the sign-up form says
// sign-ups are opening soon instead of pretending to subscribe anyone.
export const BEEHIIV_FORM_ID = import.meta.env.VITE_BEEHIIV_FORM_ID || '';
export const beehiivEmbedUrl = BEEHIIV_FORM_ID ? `https://embeds.beehiiv.com/${encodeURIComponent(BEEHIIV_FORM_ID)}?slim=true` : '';
