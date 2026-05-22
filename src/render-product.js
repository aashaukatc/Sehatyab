/**
 * render-product.js — Sehatyaab Fresh Batch — Premium Polish Pass
 * Product pages: Fuel / Nurture / Glow
 */

import { products, seo, getWhatsAppUrl } from './site-data.js';
import {
  renderNav, renderIngredients, renderNutrition,
  renderPricing, renderFAQ, renderCtaBanner,
  renderDisclaimer, renderFooter, bindFAQ, bindNav, updateSEO,
} from './render-common.js';

// ── PRODUCT HERO ─────────────────────────────────────────────────
function buildProductHero(p) {
  const heroBg = `${p.theme}-hero-bg`;
  const isFuel = p.theme === 'fuel';

  return `
<section class="product-hero ${heroBg}" aria-labelledby="prod-hero-heading">
  <div class="product-hero__inner">
    <div class="depth-2">
      <a href="#/" class="back-nav" aria-label="Back to all products">← All Products</a>
      <div class="product-hero__badge">${p.themeName} — ${p.name}</div>
      <h1 class="product-hero__title" id="prod-hero-heading">${p.h1}</h1>
      <p class="product-hero__tagline">${p.tagline}</p>
      <p class="product-hero__desc">${p.description}</p>
      <div style="display:flex;gap:var(--sp-md);flex-wrap:wrap;">
        <a href="${getWhatsAppUrl(p.whatsappMessage)}"
           target="_blank" rel="noopener noreferrer"
           class="glass-cta glass-cta--${p.theme}"
           aria-label="${p.ctaLabel}">
          💬 ${p.ctaLabel}
        </a>
        <a href="#how-it-works" class="glass-cta glass-cta--secondary"
           style="${isFuel ? 'color:var(--fuel-text);border-color:var(--fuel-border);' : ''}">
          How it works →
        </a>
      </div>
    </div>

    <div class="aurora-panel premium-glass shine-edge depth-2" style="padding:var(--sp-xl);">
      <span class="section-label" style="margin-bottom:var(--sp-md);">
        ${isFuel ? 'Performance Profile' : p.theme === 'nurture' ? 'Family Promise' : 'Wellness Profile'}
      </span>
      <p style="font-family:var(--font-display);font-size:1.12rem;font-style:italic;
                color:var(--brand-charcoal);line-height:1.62;margin-bottom:var(--sp-lg);">
        "${p.intro}"
      </p>
      <div style="padding-top:var(--sp-md);border-top:1px solid var(--brand-border);">
        <span class="section-label" style="margin-bottom:var(--sp-sm);">Made for</span>
        <p style="font-size:0.88rem;color:var(--brand-muted);">${p.audience}</p>
      </div>
    </div>
  </div>
</section>`;
}

// ── HIGHLIGHTS ────────────────────────────────────────────────────
function buildHighlights(p) {
  const cards = p.highlights.map(h => `
    <div class="glass-card highlight-card">
      <div class="highlight-card__icon" aria-hidden="true">${h.icon}</div>
      <div class="highlight-card__label">${h.label}</div>
      <p class="highlight-card__desc">${h.desc}</p>
    </div>`).join('');

  return `
<section class="product-section section" aria-labelledby="hl-heading">
  <div class="product-section__inner">
    <span class="section-label">Why ${p.name}?</span>
    <h2 class="section-heading" id="hl-heading">
      <em class="display-serif">What makes it</em> different
    </h2>
    <div class="highlights-grid">${cards}</div>
  </div>
</section>`;
}

// ── BEST FOR ─────────────────────────────────────────────────────
function buildBestFor(p) {
  const items = p.bestFor.map(b => `
    <div class="bestfor-item"><span>${b}</span></div>`).join('');

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
      <div class="aurora-panel premium-glass" style="padding:var(--sp-xl);">
        <span class="section-label" style="margin-bottom:var(--sp-md);">The Promise</span>
        <blockquote class="pull-quote" style="border-left-color:var(--brand-green);">
          <p class="pull-quote__text">"${p.intro}"</p>
          <footer class="pull-quote__attr">— ${p.name}, ${p.themeName} · Sehatyaab Fresh Batch</footer>
        </blockquote>
      </div>
    </div>
  </div>
</section>`;
}

// ── HOW TO ORDER ──────────────────────────────────────────────────
function buildHowToOrder(p) {
  return `
<section class="product-section section--tight" aria-labelledby="hto-heading">
  <div class="product-section__inner">
    <div class="aurora-panel premium-glass shine-edge" style="padding:var(--sp-2xl);text-align:center;">
      <span class="section-label">Ordering ${p.name}</span>
      <h2 id="hto-heading" style="font-family:var(--font-display);
          font-size:clamp(1.4rem,3vw,2.2rem);margin-bottom:var(--sp-lg);">
        One message. Fresh in 3–5 days.
      </h2>
      <p style="font-family:var(--font-body);color:var(--brand-muted);max-width:480px;
                margin:0 auto var(--sp-xl);font-size:0.94rem;line-height:1.78;">
        Tap the button. A pre-filled WhatsApp message opens.
        We confirm your order, size, and delivery within hours.
        Your fresh batch is then prepared — only after your confirmed order.
      </p>
      <a href="${getWhatsAppUrl(p.whatsappMessage)}"
         target="_blank" rel="noopener noreferrer"
         class="glass-cta glass-cta--whatsapp"
         style="font-size:1rem;padding:1rem 2.2rem;"
         aria-label="${p.ctaLabel}">
        💬 ${p.ctaLabel}
      </a>
    </div>
  </div>
</section>`;
}

// ── STORAGE & SAFETY ──────────────────────────────────────────────
function buildStorageSafety() {
  return `
<section class="product-section section--tight" aria-label="Storage and safety">
  <div class="product-section__inner">
    <div class="storage-box">
      <div class="storage-box__title">🧊 Storage</div>
      <p>
        Store in a cool, dry place in an airtight container. Refrigeration recommended after opening
        for extended freshness. Consume within the window printed on your packaging.
        <!-- TODO: Add confirmed shelf life from owner -->
      </p>
    </div>
    ${renderDisclaimer().replace('<div class="container" style="padding-top:var(--sp-xl);">','<div style="padding-top:var(--sp-lg);">')}
  </div>
</section>`;
}

// ── MAIN RENDER ───────────────────────────────────────────────────
export function renderProduct(slug, container) {
  const p = products[slug];

  if (!p) {
    container.innerHTML = `
<div style="padding:10rem 2rem;text-align:center;">
  <h1 style="font-family:var(--font-display);font-size:3rem;color:var(--brand-charcoal);">
    Product not found
  </h1>
  <p style="color:var(--brand-muted);margin:1rem 0 2rem;">
    This product doesn't exist. Head back to explore our range.
  </p>
  <a href="#/" class="glass-cta glass-cta--primary">← Back to Home</a>
</div>`;
    return;
  }

  updateSEO(seo.routes[slug] || seo.routes.home);

  container.innerHTML = `
${renderNav(`#/${slug}`)}

<div class="aurora-bg product-world--${p.theme}">
  <div class="aurora-grain soft-noise" aria-hidden="true"></div>

  ${buildProductHero(p)}
  ${buildHighlights(p)}
  ${buildBestFor(p)}
  ${renderIngredients(p.ingredientFocus)}
  ${renderNutrition()}
  ${renderPricing(slug, p.whatsappMessage)}
  ${buildHowToOrder(p)}
  ${buildStorageSafety()}
  ${renderFAQ([0,2,3,4,5,7])}
  ${renderCtaBanner(p.whatsappMessage)}
  ${renderFooter()}
</div>`;

  bindNav();
  bindFAQ();
  requestAnimationFrame(bindScrollReveal);
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────
function bindScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const targets = document.querySelectorAll(
    '.glass-card, .aurora-panel, .bestfor-item, .highlight-card'
  );

  targets.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(18px)';
    el.style.transition = `opacity 0.48s ease ${(i % 8) * 0.065}s, transform 0.48s ease ${(i % 8) * 0.065}s`;
  });

  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity   = '1';
        e.target.style.transform = 'translateY(0)';
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.07 });

  targets.forEach(el => obs.observe(el));
}
