/**
 * render-home.js — Sehatyaab Fresh Batch
 * Builds and mounts the homepage HTML.
 * Imports from render-common and site-data only.
 */

import {
  brand,
  social,
  products,
  productNav,
  ingredients,
  whyMadeToOrder,
  seo,
  getWhatsAppUrl,
} from './site-data.js';

import {
  renderNav,
  renderHowItWorks,
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

// ── HERO ─────────────────────────────────────────────────────────
function buildHero() {
  const productItems = productNav.map(p => {
    const icons = { protein: '💪', crunch: '🏡', nourish: '✨' };
    const icon = icons[p.slug] || '🌿';
    return `
    <a href="${p.hash}" class="hero__product-item ${p.theme.toLowerCase()}-item" aria-label="Explore ${p.name}">
      <span class="hero__product-icon" aria-hidden="true">${icon}</span>
      <div class="hero__product-info">
        <div class="hero__product-theme">${p.theme}</div>
        <div class="hero__product-name">${p.name}</div>
      </div>
      <span class="hero__product-arrow" aria-hidden="true">→</span>
    </a>`;
  }).join('');

  return `
<section class="hero" aria-labelledby="hero-heading">
  <div class="hero__inner">
    <div class="hero__content">
      <div class="hero__eyebrow">
        🌿 Small-Batch · Made to Order · Pakistan
      </div>
      <h1 class="hero__title" id="hero-heading">
        ${brand.taglineMaster.replace('Rural roots.', '<em>Rural roots.</em>')}
      </h1>
      <p class="hero__tagline lead">
        Three lifestyle-crafted nourishment lines. ${brand.ingredientCount} whole-food ingredients. Zero shelf inventory. Made fresh after your order.
      </p>
      <div class="hero__promise">
        ${brand.promise}
      </div>
      <div class="hero__ctas">
        <a href="${social.whatsapp}"
           target="_blank"
           rel="noopener noreferrer"
           class="glass-cta glass-cta--whatsapp"
           aria-label="Order on WhatsApp">
          💬 Order on WhatsApp
        </a>
        <a href="#ingredients"
           class="glass-cta glass-cta--secondary"
           aria-label="See ingredients">
          🌱 See Ingredients
        </a>
      </div>
    </div>

    <div class="hero__visual">
      <div class="aurora-panel hero__panel">
        <div class="hero__panel-header">Our Products</div>
        <div class="hero__product-grid">
          ${productItems}
        </div>
      </div>

      <div class="aurora-panel hero__ribbon" role="list" aria-label="Brand promises">
        <div class="hero__ribbon-item" role="listitem"><span class="icon" aria-hidden="true">🌿</span> No Preservatives</div>
        <div class="hero__ribbon-item" role="listitem"><span class="icon" aria-hidden="true">📦</span> Made to Order</div>
        <div class="hero__ribbon-item" role="listitem"><span class="icon" aria-hidden="true">🚚</span> 3–5 Day Delivery</div>
      </div>
    </div>
  </div>
</section>`;
}

// ── BRAND STORY ───────────────────────────────────────────────────
function buildBrandStory() {
  return `
<section class="section" id="about" aria-labelledby="story-heading">
  <div class="container">
    <div class="aurora-panel brand-story">
      <p class="brand-story__pre">Our Story</p>
      <h2 class="brand-story__title" id="story-heading">
        Honest food, <em>made with intention</em>
      </h2>
      <p class="brand-story__text">${brand.story}</p>
    </div>
  </div>
</section>`;
}

// ── THEME SELECTOR ────────────────────────────────────────────────
function buildThemeSelector() {
  const productList = [products.protein, products.crunch, products.nourish];
  const themeEmojis = { fuel: '💪', nurture: '🏡', glow: '✨' };

  const cards = productList.map(p => {
    const emoji    = themeEmojis[p.theme];
    const cardClass = `theme-card ${p.theme}-card`;
    return `
    <a href="#/${p.slug}" class="${cardClass}" aria-label="Explore ${p.name}">
      <div class="theme-card__top">
        <span class="theme-card__emoji" aria-hidden="true">${emoji}</span>
        <div class="theme-card__label">${p.themeName}</div>
        <h3 class="theme-card__name">${p.name}</h3>
        <p class="theme-card__tagline">${p.tagline}</p>
      </div>
      <div class="theme-card__bottom">
        <p class="theme-card__audience">${p.audience}</p>
        <span class="theme-card__cta">Explore ${p.themeName} →</span>
      </div>
    </a>`;
  }).join('');

  return `
<section class="section" id="products" aria-labelledby="products-heading">
  <div class="container">
    <div class="text-center">
      <span class="section-label">Three Lifestyles. One Brand.</span>
      <h2 class="section-heading" id="products-heading">
        Find <em class="display-serif">your</em> nourishment
      </h2>
      <p class="section-subtext">
        Each product is crafted for a different kind of person — but all share the same foundation of honest, whole-food ingredients.
      </p>
    </div>
    <div class="theme-selector">${cards}</div>
  </div>
</section>`;
}

// ── WHY MADE TO ORDER ─────────────────────────────────────────────
function buildWhyMadeToOrder() {
  const items = whyMadeToOrder.map(w => `
    <div class="glass-card why-item">
      <span class="why-item__icon" aria-hidden="true">${w.icon}</span>
      <h3 class="why-item__title">${w.title}</h3>
      <p class="why-item__desc">${w.desc}</p>
    </div>`).join('');

  return `
<section class="section" id="why-made-to-order" aria-labelledby="why-heading">
  <div class="container">
    <div class="text-center">
      <span class="section-label">Why Made to Order?</span>
      <h2 class="section-heading" id="why-heading">
        <em class="display-serif">Freshness</em> is not a promise — it's the process
      </h2>
      <p class="section-subtext">
        Made-to-order healthy food means you receive nourishment at its peak. No warehouse. No stale inventory. Just your batch, made for you.
      </p>
    </div>
    <div class="why-grid">${items}</div>
  </div>
</section>`;
}

// ── STAT ROW ──────────────────────────────────────────────────────
function buildStatRow() {
  return `
<div class="container">
  <div class="aurora-panel" style="padding: var(--sp-xl);">
    <div class="stat-row" role="list" aria-label="Brand statistics">
      <div class="stat-item" role="listitem">
        <span class="stat-item__value">12</span>
        <span class="stat-item__label">Whole-Food Ingredients</span>
      </div>
      <div class="stat-item" role="listitem">
        <span class="stat-item__value">3</span>
        <span class="stat-item__label">Lifestyle Product Lines</span>
      </div>
      <div class="stat-item" role="listitem">
        <span class="stat-item__value">0</span>
        <span class="stat-item__label">Preservatives Added</span>
      </div>
      <div class="stat-item" role="listitem">
        <span class="stat-item__value">3–5</span>
        <span class="stat-item__label">Days to Your Door</span>
      </div>
    </div>
  </div>
</div>`;
}

// ── MAIN RENDER ───────────────────────────────────────────────────
export function renderHome(container) {
  updateSEO(seo.routes.home);

  container.innerHTML = `
${renderNav('#/')}

<div class="aurora-bg">
  <div class="aurora-grain" aria-hidden="true"></div>

  ${buildHero()}
  ${buildBrandStory()}
  ${buildThemeSelector()}
  ${buildStatRow()}
  ${renderHowItWorks()}
  ${buildWhyMadeToOrder()}
  ${renderIngredients()}
  ${renderNutrition()}
  ${renderPricing(null, `Hi Sehatyaab! I'd like to place an order. What's available?`)}
  ${renderFAQ()}
  ${renderCtaBanner()}
  ${renderDisclaimer()}
  ${renderFooter()}
</div>`;

  bindNav();
  bindFAQ();
  bindScrollReveal();
}

// ── SCROLL REVEAL ─────────────────────────────────────────────────
function bindScrollReveal() {
  if (!('IntersectionObserver' in window)) return;

  const cards = document.querySelectorAll('.glass-card, .theme-card, .aurora-panel');
  cards.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = `opacity 0.5s ease ${(i % 6) * 0.08}s, transform 0.5s ease ${(i % 6) * 0.08}s`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  cards.forEach(card => observer.observe(card));
}
