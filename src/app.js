/**
 * app.js — Sehatyaab Fresh Batch
 * Main entry point. Hash-based router.
 * Routes:  #/          → homepage
 *          #/protein   → Daily Protein Bites (Fuel)
 *          #/crunch    → Daily Crunch (Nurture)
 *          #/nourish   → Daily Nourish (Glow)
 */

import './styles.css';
import { renderHome }    from './render-home.js';
import { renderProduct } from './render-product.js';

const app = document.getElementById('app');

function getRoute() {
  const hash = window.location.hash || '#/';
  // Normalise: strip trailing slash
  return hash.replace(/\/$/, '') || '#/';
}

function route() {
  const hash = getRoute();

  // Scroll to top on navigation
  window.scrollTo({ top: 0, behavior: 'instant' });

  if (hash === '#/' || hash === '#') {
    renderHome(app);
    return;
  }

  // Product routes: #/protein, #/crunch, #/nourish
  const productSlugs = ['protein', 'crunch', 'nourish'];
  const slug = hash.replace('#/', '');

  if (productSlugs.includes(slug)) {
    renderProduct(slug, app);
    return;
  }

  // 404 fallback — render home
  renderHome(app);
}

// Initial render
route();

// React to hash changes
window.addEventListener('hashchange', route);

// Handle anchor clicks with hash — prevent double-firing
document.addEventListener('click', e => {
  const anchor = e.target.closest('a[href^="#"]');
  if (!anchor) return;

  const href = anchor.getAttribute('href');
  if (!href) return;

  // Let the browser handle pure anchor scrolls (#faq, #ingredients etc.)
  if (href.startsWith('#/') || href === '#') {
    // These are routes — hashchange handles them
    return;
  }

  // In-page scroll anchors — work normally
});
