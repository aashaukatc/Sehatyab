/**
 * render-product.js — Sehatyaab Fresh Batch
 * Builds and mounts individual product pages (Fuel / Nurture / Glow).
 * Imports from render-common and site-data only.
 */

import {
  products,
  seo,
  getWhatsAppUrl,
} from './site-data.js';

import {
  renderNav,
  renderIngredients,
  renderNutrition,
  renderPricing,
  renderFAQ,
  renderCtaBanner,
  renderDisclaimer,
  renderFooter,
  bindFAQ,
  bindNav,
  updateSEO,
} from './render-common.js';

// ── PRODUCT HERO ─────────────────────────────────────────────────
function buildProductHero(product) {
  const heroBgClass = `${product.theme}-hero-bg`;
  return `
<section class="product-hero ${heroBgClass}" aria-labelledby="prod-hero-heading">
  <div class="product-hero__inner">
    <div class="depth-2">
      <a href="#/" class="back-nav" aria-label="Back to all products">
        ← All Products
      </a>
      <div class="product-hero__badge">
        ${product.themeName} — ${product.name}
      </div>
      <h1 class="product-hero__title" id="prod-hero-heading">
        ${product.h1}
      </h1>
      <p class="product-hero__tagline">${product.tagline}</p>
      <p class="product-hero__desc">${product.description}</p>
      <div style="display:flex; gap:var(--sp-md); flex-wrap:wrap;">
        <a href="${getWhatsAppUrl(product.whatsappMessage)}"
           target="_blank" rel="noopener noreferrer"
           class="glass-cta glass-cta--${product.theme}"
           aria-label="${product.ctaLabel}">
          💬 ${product.ctaLabel}
        </a>
        <a href="#how-it-works"
           class="glass-cta glass-cta--secondary">
          How it works →
        </a>
      </div>
    </div>

    <div class="aurora-panel depth-2" style="padding:var(--sp-xl);">
      <div class="section-label" style="margin-bottom:var(--sp-lg);">Introduction</div>
      <p style="font-family:var(--font-display);font-size:1.15rem;font-style:italic;color:var(--brand-charcoal);line-height:1.6;margin-bottom:var(--sp-lg);">
        ${product.intro}
      </p>
      <div style="padding-top:var(--sp-md);border-top:1px solid var(--brand-border);">
        <span class="section-label" style="margin-bottom:var(--sp-sm);">Designed for</span>
        <p style="font-size:0.9rem;color:var(--brand-muted);">${product.audience}</p>
      </div>
    </div>
  </div>
</section>`;
}

// ── HIGHLIGHTS ────────────────────────────────────────────────────
function buildHighlights(product) {
  const cards = product.highlights.map(h => `
    <div class="glass-card highlight-card">
      <div class="highlight-card__icon" aria-hidden="true">${h.icon}</div>
      <div class="highlight-card__label">${h.label}</div>
      <p class="highlight-card__desc">${h.desc}</p>
    </div>`).join('');

  return `
<section class="product-section section" aria-labelledby="hl-heading">
  <div class="product-section__inner">
    <span class="section-label">Why ${product.name}?</span>
    <h2 class="section-heading" id="hl-heading">
      <em class="display-serif">What makes it</em> different
    </h2>
    <div class="highlights-grid">${cards}</div>
  </div>
</section>`;
}

// ── BEST FOR ─────────────────────────────────────────────────────
function buildBestFor(product) {
  const items = product.bestFor.map(b => `
    <div class="bestfor-item">
      <span>${b}</span>
    </div>`).join('');

  return `
<section class="product-section section--tight" aria-labelledby="bf-heading">
  <div class="product-section__inner">
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:var(--sp-3xl);">
      <div>
        <span class="section-label">Best For</span>
        <h2 class="section-heading" id="bf-heading">
          <em class="display-serif">Who is this for?</em>
        </h2>
        <div class="bestfor-list">${items}</div>
      </div>
      <div class="aurora-panel" style="padding:var(--sp-xl);">
        <span class="section-label" style="margin-bottom:var(--sp-lg);">The Promise</span>
        <blockquote class="pull-quote" style="border-left-color:currentColor;padding-left:var(--sp-xl);">
          <p class="pull-quote__text">"${product.intro}"</p>
          <footer class="pull-quote__attr">— ${product.name}, ${product.themeName} by Sehatyaab</footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>`;
}

// ── STORAGE / SAFETY ─────────────────────────────────────────────
function buildStorageSafety(product) {
  return `
<section class="product-section section--tight" aria-label="Storage and safety information">
  <div class="product-section__inner">
    <div class="storage-box">
      <div class="storage-box__title">🧊 Storage Instructions</div>
      <p>
        Store in a cool, dry place in an airtight container after opening. Refrigeration is recommended for extended freshness. Consume within the window stated on your packaging.
        <!-- TODO: Add confirmed shelf life from owner -->
      </p>
    </div>
    ${renderDisclaimer().replace('<div class="container">', '<div>').replace('</div>\n</div>', '</div>')}
  </div>
</section>`;
}

// ── HOW TO ORDER ─────────────────────────────────────────────────
function buildHowToOrder(product) {
  return `
<section class="product-section section--tight" aria-labelledby="hto-heading">
  <div class="product-section__inner">
    <div class="aurora-panel" style="padding:var(--sp-2xl);text-align:center;">
      <span class="section-label">Ordering ${product.name}</span>
      <h2 id="hto-heading" style="font-family:var(--font-display);font-size:clamp(1.4rem,3vw,2.2rem);margin-bottom:var(--sp-lg);">
        One WhatsApp message is all it takes
      </h2>
      <p style="font-family:var(--font-body);color:var(--brand-muted);max-width:500px;margin:0 auto var(--sp-xl);font-size:0.95rem;line-height:1.75;">
        Tap the button below. A pre-filled WhatsApp message will open. We'll confirm your order, size, address, and delivery time.
      </p>
      <a href="${getWhatsAppUrl(product.whatsappMessage)}"
         target="_blank" rel="noopener noreferrer"
         class="glass-cta glass-cta--whatsapp"
         style="font-size:1rem;padding:1rem 2.2rem;"
         aria-label="${product.ctaLabel}">
        💬 ${product.ctaLabel}
      </a>
    </div>
  </div>
</section>`;
}

// ── PRODUCT PAGE FAQ (uses first 6 FAQs) ─────────────────────────
function buildProductFAQ() {
  return renderFAQ([0, 2, 3, 4, 5, 7]);
}

// ── MAIN RENDER ───────────────────────────────────────────────────
export function renderProduct(slug, container) {
  const product = products[slug];

  if (!product) {
    container.innerHTML = `
<div style="padding:10rem 2rem;text-align:center;">
  <h1 style="font-family:var(--font-display);font-size:3rem;color:var(--brand-charcoal);">Product not found</h1>
  <p style="color:var(--brand-muted);margin:1rem 0 2rem;">The product you're looking for doesn't exist.</p>
  <a href="#/" class="glass-cta glass-cta--primary">← Back to Home</a>
</div>`;
    return;
  }

  updateSEO(seo.routes[slug] || seo.routes.home);

  container.innerHTML = `
${renderNav(`#/${slug}`)}

<div class="aurora-bg product-world--${product.theme}">
  <div class="aurora-grain" aria-hidden="true"></div>

  ${buildProductHero(product)}
  ${buildHighlights(product)}
  ${buildBestFor(product)}
  ${renderIngredients(product.ingredientFocus)}
  ${renderNutrition()}
  ${renderPricing(slug, product.whatsappMessage)}
  ${buildHowToOrder(product)}
  ${buildStorageSafety(product)}
  ${buildProductFAQ()}
  ${renderCtaBanner(product.whatsappMessage, product.theme)}
  ${renderFooter()}
</div>`;

  bindNav();
  bindFAQ();
  bindScrollReveal();
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────
function bindScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.glass-card, .aurora-panel, .bestfor-item');
  cards.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.45s ease ${(i % 8) * 0.07}s, transform 0.45s ease ${(i % 8) * 0.07}s`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  cards.forEach(card => observer.observe(card));
}
