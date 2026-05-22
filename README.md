# Sehatyaab Fresh Batch

> **Rural roots. Modern nourishment. Made fresh after order.**

Premium Pakistani small-batch, made-to-order nourishment brand.  
Three lifestyle product lines. 12 whole-food ingredients. Zero shelf inventory.

---

## Products

| Theme | Product | Audience |
|---|---|---|
| 🌿 **Fuel** | Daily Protein Bites | Gym users, active professionals |
| 🏡 **Nurture** | Daily Crunch | Mothers, kids, families |
| ✨ **Glow** | Daily Nourish | Beauty-conscious, wellness women |

---

## Tech Stack

- **Build tool**: Vite 5
- **Language**: Vanilla JS (ES modules), plain CSS
- **Deployment**: Netlify (auto-deploy from main branch)
- **Routing**: Hash-based (`#/`, `#/protein`, `#/crunch`, `#/nourish`)

---

## Local Development

```bash
npm install
npm run dev
```

Open: `http://localhost:5173`

---

## Build

```bash
npm run build
```

Output: `dist/` directory (Netlify publish directory)

---

## Netlify Deployment

The repo includes `netlify.toml` configured for auto-deploy:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

**To connect Netlify:**
1. Push this repo to GitHub (`aashaukatc/Sehatyab`, branch: `main`)
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect GitHub → select `Sehatyab` repo
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy

Every push to `main` will auto-deploy.

---

## Project Structure

```
Sehatyab/
├── index.html           ← App entry (full SEO + JSON-LD)
├── netlify.toml         ← Netlify build config
├── package.json         ← Vite build scripts
├── data/
│   ├── brand-data.json  ← Brand + product data (Canva/print use)
│   ├── brand-data.csv   ← Canva Bulk Create source
│   └── brand-tokens.json← Design tokens
├── docs/
│   └── 09-canva-print-automation.md
├── src/
│   ├── app.js           ← Main entry + hash router
│   ├── site-data.js     ← Single source of truth for all data
│   ├── render-common.js ← Shared HTML builders (nav, FAQ, etc.)
│   ├── render-home.js   ← Homepage render
│   ├── render-product.js← Product page render
│   ├── styles.css       ← CSS entry (imports all modules)
│   └── styles/
│       ├── base.css
│       ├── aurora-glass.css
│       ├── nav.css
│       ├── hero.css
│       ├── cards.css
│       ├── product-worlds.css
│       ├── seo-content.css
│       ├── premium-copy.css
│       ├── print-assets.css
│       └── responsive.css
└── README.md
```

---

## Owner TODOs

- [ ] Replace `923000000000` with actual WhatsApp number in `src/site-data.js`
- [ ] Add Instagram handle in `src/site-data.js`
- [ ] Add Facebook handle in `src/site-data.js`
- [ ] Update canonical URL in `index.html` after final domain is confirmed
- [ ] Replace indicative nutrition values with lab-tested values
- [ ] Confirm shelf life / best-before window
- [ ] Confirm delivery areas beyond Rawalpindi/Islamabad
- [ ] Add product photography when available (gallery field in `src/site-data.js`)
- [ ] Confirm 13th ingredient if owner wants to add one (currently 12 confirmed)
- [ ] Confirm final PKR prices
- [ ] Set up custom domain in Netlify (currently uses sehatyaab.netlify.app placeholder)

---

## Data Model

All content lives in `src/site-data.js`. Named objects only. No positional arrays.

```js
import { brand, products, ingredients, faqs, getWhatsAppUrl } from './site-data.js';
```

## Dependency Graph

```
app.js
  → render-home.js    → render-common.js → site-data.js
  → render-product.js → render-common.js → site-data.js
```

No circular dependencies. Data does not import renderers.
