import { createRoot } from 'react-dom/client';
import './base.css';

// Template scope: the page's view model layered over the component instance,
// so templates can read both computed values and instance refs (e.g. v.tickerRef).
export const view = (page) => Object.assign(Object.create(page), page.renderVals());

export function mount(element) {
  createRoot(document.getElementById('root')).render(element);
}
