// The Setlist runs on Beehiiv (hecklecomedy.beehiiv.com). Set VITE_BEEHIIV_FORM_ID to the form ID
// from the embed code's data-beehiiv-form="…" attribute. Until then the sign-up box says sign-ups
// are opening soon instead of pretending to subscribe anyone.
// Form: "Heckle site · The Setlist (home page)" in Subscribers → Subscribe forms.
export const BEEHIIV_FORM_ID = import.meta.env.VITE_BEEHIIV_FORM_ID || '';
export const BEEHIIV_LOADER = 'https://subscribe-forms.beehiiv.com/v3/loader.js';
