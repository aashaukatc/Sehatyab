/**
 * render-home.js — Sehatyaab Fresh Batch
 * Premium Polish Pass — full homepage with emotional buying triggers.
 */

import {
  brand, social, products, productNav,
  whyMadeToOrder, seo, getWhatsAppUrl,
} from './site-data.js';

import {
  renderNav, renderHowItWorks, renderIngredients,
  renderNutrition, renderPricing, renderFAQ,
  renderCtaBanner, renderDisclaimer, renderFooter,
  bindFAQ, bindNav, updateSEO,
} from './render-common.js';

// ── HERO ─────────────────────────────────────────────────────────
function buildHero() {
  const icons = { protein:'💪', crunch:'🏡', nourish:'✨' };
  const items = productNav.map(p => `
    <a href="${p.hash}" class="hero__product-item ${p.theme.toLowerCase()}-item"
       aria-label="Explore ${p.name}">
      <span class="hero__product-icon" aria-hidden="true">${icons[p.slug]||'🌿'}</span>
      <div class="hero__product-info">
        <div class="hero__product-theme">${p.theme}</div>
        <div class="hero__product-name">${p.name}</div>
      </div>
      <span class="hero__product-arrow" aria-hidden="true">→</span>
    </a>`).join('');

  return `
<section class="hero" aria-labelledby="hero-heading">
  <div class="hero__inner">
    <div class="hero__content depth-2">
      <div class="hero__eyebrow">🌿 Small-batch · Made to order · Pakistan</div>

      <h1 class="hero__title" id="hero-heading">
        <em>Rural roots.</em><br>
        Modern nourishment.<br>
        Made fresh after order.
      </h1>

      <p class="hero__tagline lead">
        Three lifestyle-crafted nourishment lines.
        Twelve whole-food ingredients you can name.
        Zero shelf inventory — ever.
      </p>

      <div class="hero__promise">Prepared after your order. Delivered in 3–5 days.</div>

      <div class="hero__ctas">
        <a href="${social.whatsapp}" target="_blank" rel="noopener noreferrer"
           class="glass-cta glass-cta--whatsapp" aria-label="Order on WhatsApp">
          💬 Order on WhatsApp
        </a>
        <a href="#products" class="glass-cta glass-cta--secondary">
          Explore Products
        </a>
      </div>
    </div>

    <div class="hero__visual depth-2">
      <div class="aurora-panel hero__panel premium-glass shine-edge">
        <div class="hero__panel-header">Three nourishment moods</div>
        <div class="hero__product-grid">${items}</div>
      </div>

      <div class="aurora-panel hero__ribbon glass-matte" role="list"
           aria-label="Brand promises">
        <div class="hero__ribbon-item" role="listitem">
          <span class="icon" aria-hidden="true">🌿</span> No Preservatives
        </div>
        <div class="hero__ribbon-item" role="listitem">
          <span class="icon" aria-hidden="true">📦</span> Made to Order
        </div>
        <div class="hero__ribbon-item" role="listitem">
          <span class="icon" aria-hidden="true">🚚</span> 3–5 Day Delivery
        </div>
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
    <div class="aurora-panel premium-glass brand-story">
      <p class="brand-story__pre">Our Story</p>
      <h2 class="brand-story__title" id="story-heading">
        Honest food, <em>made with intention</em>
      </h2>
      <p class="brand-story__text">${brand.story}</p>
    </div>
  </div>
</section>`;
}

// ── FRESH BATCH DIFFERENCE (new premium recall section) ───────────
function buildFreshBatchDifference() {
  return `
<section class="difference-section section" id="difference" aria-labelledby="diff-heading">
  <div class="container container--narrow">
    <div class="difference-panel aurora-panel premium-glass shine-edge">
      <span class="difference-panel__pre">The Fresh Batch Difference</span>
      <h2 class="difference-panel__title" id="diff-heading">
        Factory snacks are made first.<br>
        <em>Sehatyaab is ordered first.</em>
      </h2>
      <p class="difference-panel__text">
        Most packaged food is manufactured in bulk, warehoused, and sold whenever someone picks it up.
        That means the snack you open today could be weeks — or months — old before it reaches your hands.<br><br>
        Sehatyaab works differently. Your order triggers preparation.
        The 3–5 day wait is not a delay. It is the promise of freshness built into the operating model itself.
      </p>
      <div class="difference-panel__chips">
        <span class="glass-chip" style="color:var(--brand-green);">🌿 Made after order</span>
        <span class="glass-chip" style="color:var(--brand-earth);">📦 No shelf inventory</span>
        <span class="glass-chip" style="color:var(--brand-green);">🚚 3–5 day fresh delivery</span>
        <span class="glass-chip" style="color:var(--brand-earth);">🔢 12 whole-food ingredients</span>
      </div>
    </div>
  </div>
</section>`;
}

// ── THEME SELECTOR ────────────────────────────────────────────────
function buildThemeSelector() {
  const themeEmojis = { fuel:'💪', nurture:'🏡', glow:'✨' };
  const productList = [products.protein, products.crunch, products.nourish];

  const cards = productList.map(p => `
    <a href="#/${p.slug}" class="theme-card ${p.theme}-card"
       aria-label="Explore ${p.name} — ${p.themeName}">
      <div class="theme-card__top">
        <span class="theme-card__emoji" aria-hidden="true">${themeEmojis[p.theme]}</span>
        <div class="theme-card__label">${p.themeName}</div>
        <h3 class="theme-card__name">${p.name}</h3>
        <p class="theme-card__tagline">${p.tagline}</p>
      </div>
      <div class="theme-card__bottom">
        <p class="theme-card__audience">${p.audience}</p>
        <span class="theme-card__cta">Explore ${p.themeName} →</span>
      </div>
    </a>`).join('');

  return `
<section class="section" id="products" aria-labelledby="products-heading">
  <div class="container">
    <div class="text-center">
      <span class="section-label">Three Lifestyles. One Brand.</span>
      <h2 class="section-heading" id="products-heading">
        Find <em class="display-serif">your</em> nourishment
      </h2>
      <p class="section-subtext">
        Each product is crafted for a different kind of person —
        but all share the same foundation of honest, small-batch, whole-food ingredients.
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
        <em class="display-serif">Freshness</em> is the operating model
      </h2>
      <p class="section-subtext">
        Made-to-order means you receive nourishment at its peak.
        No warehouse. No stale inventory. Just your batch, made for you.
      </p>
    </div>
    <div class="why-grid">${items}</div>
  </div>
</section>`;
}

// ── STAT ROW ──────────────────────────────────────────────────────
function buildStatRow() {
  const stats = [
    { value:'12',   label:'Whole-Food Ingredients' },
    { value:'3',    label:'Lifestyle Product Lines' },
    { value:'0',    label:'Preservatives Added' },
    { value:'3–5',  label:'Days to Your Door' },
  ];

  const items = stats.map(s => `
    <div class="stat-item" role="listitem">
      <span class="stat-item__value">${s.value}</span>
      <span class="stat-item__label">${s.label}</span>
    </div>`).join('');

  return `
<div class="container" style="padding-bottom:var(--sp-2xl);">
  <div class="aurora-panel glass-gloss shine-edge" style="padding:var(--sp-xl) var(--sp-2xl);">
    <div class="stat-row" role="list" aria-label="Brand statistics">${items}</div>
  </div>
</div>`;
}

// ── MAIN RENDER ───────────────────────────────────────────────────
export function renderHome(container) {
  updateSEO(seo.routes.home);

  container.innerHTML = `
${renderNav('#/')}

<div class="aurora-bg">
  <div class="aurora-grain soft-noise" aria-hidden="true"></div>

  ${buildHero()}
  ${buildBrandStory()}
  ${buildFreshBatchDifference()}
  ${buildThemeSelector()}
  ${buildStatRow()}
  ${renderHowItWorks()}
  ${buildWhyMadeToOrder()}
  ${renderIngredients()}
  ${renderNutrition()}
  ${renderPricing(null,`Hi Sehatyaab! I'd like to place an order. What's available?`)}
  ${renderFAQ()}
  ${renderCtaBanner()}
  ${renderDisclaimer()}
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
    '.glass-card, .theme-card, .aurora-panel, .why-item, .ingredient-tile, .step-card'
  );

  targets.forEach((el, i) => {
    el.style.opacity   = '0';
    el.style.transform = 'translateY(22px)';
    el.style.transition = `opacity 0.52s ease ${(i % 7) * 0.07}s, transform 0.52s ease ${(i % 7) * 0.07}s`;
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity   = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });

  targets.forEach(el => observer.observe(el));
}
