/**
 * render-common.js — Sehatyaab Fresh Batch — Premium Polish Pass
 * Shared HTML builders. Does NOT import renderers.
 */

import {
  brand, social, products, productNav,
  ingredients, nutrition, prices,
  faqs, howItWorks, whyMadeToOrder,
  disclaimer, getWhatsAppUrl,
} from './site-data.js';

// ── NAV ─────────────────────────────────────────────────────────
export function renderNav(activeHash = '#/') {
  const links = productNav.map(p => {
    const cls = `nav-pill ${p.theme.toLowerCase()}-pill${activeHash === p.hash ? ' active' : ''}`;
    return `<a href="${p.hash}" class="${cls}" aria-current="${activeHash === p.hash ? 'page' : 'false'}">
      ${p.theme} — ${p.name}</a>`;
  }).join('');

  return `
<nav class="glass-nav" role="navigation" aria-label="Main navigation">
  <div class="site-nav">
    <a href="#/" class="nav-logo" aria-label="${brand.name} home">
      <span class="nav-logo__name">${brand.name}</span>
      <span class="nav-logo__sub">Fresh Batch · Made to Order</span>
    </a>
    <div class="nav-links" id="nav-links">
      <a href="#/" class="${activeHash === '#/' ? 'active' : ''}">Home</a>
      ${links}
    </div>
    <button class="nav-cta" id="nav-wa-btn" aria-label="Order on WhatsApp">
      💬 Order Now
    </button>
    <button class="nav-toggle" id="nav-toggle"
      aria-label="Toggle menu" aria-expanded="false" aria-controls="nav-mobile">
      <span></span><span></span><span></span>
    </button>
  </div>
  <div class="nav-mobile-menu" id="nav-mobile" role="menu">
    <a href="#/" role="menuitem">🏠 Home</a>
    ${productNav.map(p => `<a href="${p.hash}" role="menuitem">${p.theme} — ${p.name}</a>`).join('')}
    <a href="${social.whatsapp}" target="_blank" rel="noopener noreferrer" role="menuitem">
      💬 Order on WhatsApp
    </a>
  </div>
</nav>`;
}

// ── HOW IT WORKS ─────────────────────────────────────────────────
export function renderHowItWorks() {
  const steps = howItWorks.map(s => `
    <div class="glass-card step-card shine-edge">
      <span class="step-card__number">${String(s.step).padStart(2,'0')}</span>
      <span class="step-card__icon" aria-hidden="true">${s.icon}</span>
      <h3 class="step-card__title">${s.title}</h3>
      <p class="step-card__desc">${s.desc}</p>
    </div>`).join('');

  return `
<section class="section" id="how-it-works" aria-labelledby="hiw-heading">
  <div class="container">
    <div class="text-center">
      <span class="section-label">The Process</span>
      <h2 class="section-heading" id="hiw-heading">
        How <em class="display-serif">fresh to order</em> works
      </h2>
      <p class="section-subtext">
        Made after order, not pulled from a shelf.
        The 3–5 day window is the freshness guarantee — not a delay.
      </p>
    </div>
    <div class="steps-grid">${steps}</div>
  </div>
</section>`;
}

// ── INGREDIENTS ──────────────────────────────────────────────────
export function renderIngredients(focusIds = null) {
  const list  = focusIds ? ingredients.filter(i => focusIds.includes(i.id)) : ingredients;
  const count = focusIds ? list.length : brand.ingredientCount;
  const label = focusIds ? 'Key ingredients in this product' : `${brand.ingredientCount} whole-food ingredients`;

  const tiles = list.map(i => `
    <div class="glass-card ingredient-tile">
      <span class="ingredient-tile__emoji" aria-hidden="true">${i.emoji}</span>
      <div class="ingredient-tile__name">${i.name}</div>
      <div class="ingredient-tile__note">${i.note}</div>
    </div>`).join('');

  return `
<section class="section ingredients-section" id="ingredients" aria-labelledby="ing-heading">
  <div class="container">
    <div class="text-center">
      <span class="ingredient-count-badge">
        <span class="ingredient-count-badge__num">${count}</span>
        <span class="ingredient-count-badge__text">${label}</span>
      </span>
      <h2 class="section-heading" id="ing-heading">
        <em class="display-serif">Every ingredient</em> has a name
      </h2>
      <p class="section-subtext">
        No anonymous additives. No undisclosed fillers.
        Small-batch nourishment with whole-food ingredients — nothing you cannot name.
      </p>
    </div>
    <div class="ingredient-grid">${tiles}</div>
  </div>
</section>`;
}

// ── NUTRITION ────────────────────────────────────────────────────
export function renderNutrition() {
  const tiles = nutrition.macros.map(m => `
    <div class="glass-card nutrition-tile">
      <span class="nutrition-tile__icon" aria-hidden="true">${m.icon}</span>
      <div class="nutrition-tile__value">${m.value}</div>
      <div class="nutrition-tile__label">${m.label}</div>
    </div>`).join('');

  return `
<section class="section section--tight" id="nutrition" aria-labelledby="nut-heading">
  <div class="container">
    <div class="text-center">
      <span class="section-label">Nutrition Snapshot</span>
      <h2 class="section-heading" id="nut-heading">Per ${nutrition.perServingLabel}</h2>
      <p class="section-subtext">${nutrition.disclaimer}</p>
    </div>
    <div class="nutrition-grid">${tiles}</div>
  </div>
</section>`;
}

// ── PRICING ───────────────────────────────────────────────────────
export function renderPricing(productSlug = null, whatsappMsg = null) {
  const waMsg = whatsappMsg || `Hi Sehatyaab! I'd like to order. Please share your current availability.`;

  const cards = prices.sizes.map((s, i) => {
    const featured = i === 2 ? 'price-card--featured glass-price' : 'glass-price';
    const badge = i === 2 ? '<span class="price-badge">Best Value</span>' : '';
    return `
    <div class="glass-card price-card ${featured}">
      ${badge}
      <div class="price-card__weight">${s.weight}</div>
      <div class="price-card__label">${s.label}</div>
      <div class="price-card__price">${s.price}</div>
      <p class="price-card__note">${s.bestFor}</p>
      <a href="${getWhatsAppUrl(`${waMsg} — ${s.weight} batch please.`)}"
         target="_blank" rel="noopener noreferrer"
         class="glass-cta glass-cta--primary"
         style="width:100%;justify-content:center;margin-top:var(--sp-lg);"
         aria-label="Order ${s.weight} on WhatsApp">
        Order ${s.weight}
      </a>
    </div>`;
  }).join('');

  return `
<section class="section section--tight" id="pricing" aria-labelledby="price-heading">
  <div class="container container--narrow">
    <div class="text-center">
      <span class="section-label">Batch Sizes & Pricing</span>
      <h2 class="section-heading" id="price-heading">
        Choose your <em class="display-serif">fresh batch</em>
      </h2>
      <p class="section-subtext">${prices.disclaimer}</p>
    </div>
    <div class="pricing-grid">${cards}</div>
  </div>
</section>`;
}

// ── FAQ ───────────────────────────────────────────────────────────
export function renderFAQ(subset = null) {
  const list  = subset ? faqs.filter((_,i) => subset.includes(i)) : faqs;

  const items = list.map((f, i) => `
    <div class="glass-faq faq-item" data-faq="${i}">
      <button class="faq-question" aria-expanded="false" aria-controls="faq-ans-${i}">
        <span class="faq-question__text">${f.q}</span>
        <span class="faq-question__icon" aria-hidden="true">+</span>
      </button>
      <div class="faq-answer" id="faq-ans-${i}" role="region" hidden>
        <p>${f.a}</p>
      </div>
    </div>`).join('');

  return `
<section class="section" id="faq" aria-labelledby="faq-heading">
  <div class="container container--narrow">
    <div class="text-center">
      <span class="section-label">Common Questions</span>
      <h2 class="section-heading" id="faq-heading">
        <em class="display-serif">Answers</em> before you ask
      </h2>
    </div>
    <div class="faq-list">${items}</div>
  </div>
</section>`;
}

// ── CTA BANNER ────────────────────────────────────────────────────
export function renderCtaBanner(msg = null) {
  const waUrl = getWhatsAppUrl(msg);
  return `
<section class="section aurora-panel premium-glass shine-edge" id="order"
         aria-labelledby="cta-heading" style="margin:0 var(--sp-xl);border-radius:var(--r-2xl);">
  <div class="cta-banner">
    <span class="section-label">Ready to Order?</span>
    <h2 class="cta-banner__title" id="cta-heading">
      <em class="display-serif">Fresh</em> starts with one message
    </h2>
    <p class="cta-banner__sub">
      A cleaner daily bite for modern Pakistani homes.
      ${brand.promise}
    </p>
    <div class="cta-banner__actions">
      <a href="${waUrl}" target="_blank" rel="noopener noreferrer"
         class="glass-cta glass-cta--whatsapp" aria-label="Order on WhatsApp">
        💬 Order on WhatsApp
      </a>
      <a href="#/" class="glass-cta glass-cta--secondary">← All Products</a>
    </div>
  </div>
</section>`;
}

// ── DISCLAIMER ────────────────────────────────────────────────────
export function renderDisclaimer() {
  return `
<div class="container" style="padding-top:var(--sp-xl);">
  <div class="disclaimer-box">
    <div class="disclaimer-box__title">⚠️ Important Notice</div>
    <p>${disclaimer.text}</p>
  </div>
</div>`;
}

// ── FOOTER ────────────────────────────────────────────────────────
export function renderFooter() {
  const year = new Date().getFullYear();
  return `
<footer class="site-footer" role="contentinfo">
  <div class="footer-inner">
    <div>
      <div class="footer-brand__name">${brand.name}</div>
      <div class="footer-brand__tagline">${brand.taglineMaster}</div>
      <div class="footer-brand__promise">${brand.promise}</div>
    </div>
    <div>
      <div class="footer-nav__title">Products</div>
      <nav class="footer-nav__links" aria-label="Product links">
        ${productNav.map(p => `<a href="${p.hash}">${p.name}</a>`).join('')}
      </nav>
    </div>
    <div>
      <div class="footer-nav__title">Info</div>
      <div class="footer-nav__links">
        <a href="#ingredients">Ingredients</a>
        <a href="#how-it-works">How It Works</a>
        <a href="#pricing">Pricing</a>
        <a href="#faq">FAQ</a>
        <a href="${social.whatsapp}" target="_blank" rel="noopener noreferrer">
          💬 Order on WhatsApp
        </a>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <span class="footer-bottom__copy">
      © ${year} ${brand.name}. ${brand.location}.
    </span>
    <p class="footer-bottom__disclaimer">
      Wholesome foods, not medicines or supplements.
      Nutrition values are indicative. Contains tree nuts and dairy.
    </p>
  </div>
</footer>

<a href="${social.whatsapp}" class="wa-float"
   target="_blank" rel="noopener noreferrer"
   aria-label="Chat on WhatsApp to place an order">
  💬
  <span class="wa-float__tooltip">Order on WhatsApp</span>
</a>`;
}

// ── BINDINGS ──────────────────────────────────────────────────────
export function bindFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item   = btn.closest('.faq-item');
      const answer = btn.nextElementSibling;
      const isOpen = item.classList.contains('is-open');

      document.querySelectorAll('.faq-item.is-open').forEach(el => {
        el.classList.remove('is-open');
        el.querySelector('.faq-question').setAttribute('aria-expanded','false');
        const a = el.querySelector('.faq-answer');
        if (a) a.hidden = true;
      });

      if (!isOpen) {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded','true');
        if (answer) answer.hidden = false;
      }
    });
  });
}

export function bindNav() {
  const toggle  = document.getElementById('nav-toggle');
  const menu    = document.getElementById('nav-mobile');
  const waBtn   = document.getElementById('nav-wa-btn');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const open = menu.classList.toggle('is-open');
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        menu.classList.remove('is-open');
        toggle.classList.remove('is-open');
        toggle.setAttribute('aria-expanded','false');
      });
    });
  }

  if (waBtn) {
    waBtn.addEventListener('click', () => {
      window.open(getWhatsAppUrl(), '_blank', 'noopener,noreferrer');
    });
  }
}

export function updateSEO({ title, description }) {
  if (title)       document.title = title;
  if (description) {
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description);
  }
}
