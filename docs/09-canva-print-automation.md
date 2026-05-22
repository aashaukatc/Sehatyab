# 09 — Canva Print Automation

## Canva Bulk Create Workflow

### CSV File
Use `data/brand-data.csv` as the Canva Bulk Create source.

### Field Mapping
| CSV Column | Canva Element |
|---|---|
| `product_name` | Main product name text |
| `tagline` | Hero tagline |
| `short_description` | Description copy |
| `theme_color` | Background colour |
| `accent_color` | Accent / headline colour |
| `price_250g` / `price_500g` / `price_1kg` | Pricing panels |
| `qr_url` | QR code destination URL |
| `whatsapp_message` | WhatsApp button pre-fill |
| `brochure_panel` | Brochure copy block |
| `visiting_card_line` | Visiting card sub-line |

---

## QR Code Workflow

### URLs to generate QR codes for:
- Home:    `https://sehatyaab.netlify.app/`
- Protein: `https://sehatyaab.netlify.app/#/protein`
- Crunch:  `https://sehatyaab.netlify.app/#/crunch`
- Nourish: `https://sehatyaab.netlify.app/#/nourish`
- WhatsApp: `https://wa.me/923000000000`

> **TODO:** Replace placeholder domain with final Netlify URL or custom domain.

### Recommended QR generators:
- [QRCode Monkey](https://www.qrcode-monkey.com/) — supports custom colours and logo
- [Canva QR Code generator](https://www.canva.com/qr-codes/) — integrates directly into Canva

---

## Visiting Card Copy

### Front
```
Sehatyaab Fresh Batch
Fresh Organic Bites · Made to Order

[WhatsApp Number]
[Instagram Handle]
[Website URL]
```

### Back (product-specific variant)
```
[Theme Name] — [Product Name]
[Tagline]

Rural roots. Modern nourishment. Made fresh after order.
```

---

## Brochure Copy (Tri-fold)

### Panel 1 — Cover
```
Sehatyaab Fresh Batch
Rural roots. Modern nourishment.
Made fresh after order.
```

### Panel 2 — Brand Story
```
We believe the food you eat every day should be honest,
whole, and made with care.

12 whole-food ingredients you can name.
No preservatives. No shelf inventory. Made for you.
```

### Panel 3 — Products
```
FUEL — Daily Protein Bites
For the gym user who demands real food.

NURTURE — Daily Crunch
For the family who deserves wholesome snacks.

GLOW — Daily Nourish
For the woman who treats nourishment as a ritual.
```

### Panel 4 — How to Order
```
1. Message us on WhatsApp
2. Confirm your order + delivery address
3. We prepare your fresh batch
4. Delivered in 3–5 days
```

### Panel 5 — Ingredients & Pricing
```
12 Whole-Food Ingredients:
Cheese · Butter · Cashews · Walnuts · Pistachios · Almonds
Dried Coconut · Fox Nuts · Sunflower Seeds · Chia Seeds
Flax Seeds · Pumpkin Seeds

Sizes:
250g — Rs. 850
500g — Rs. 1,550
1kg  — Rs. 2,900
```

### Panel 6 — Contact & QR
```
[QR Code — WhatsApp Order]
[WhatsApp Number]
[Website URL]
Rawalpindi & Islamabad, Pakistan
```

---

## Packaging Label Copy

### Front Label
```
[Theme Name — Product Name]
Sehatyaab Fresh Batch
[Weight]

[Tagline]
```

### Back Label
```
INGREDIENTS: [comma-separated list]
No preservatives. No artificial additives.
Made to order — freshness guaranteed.

STORAGE: Store in a cool, dry place in an airtight container.
Refrigerate after opening.
Best before: [TODO: Confirm shelf life with owner]

CONTAINS: Tree nuts, dairy.

Produced by Sehatyaab Fresh Batch
Rawalpindi, Pakistan
```

---

## TODOs
- [ ] Confirm final WhatsApp number
- [ ] Confirm final domain / Netlify URL
- [ ] Confirm shelf life from owner
- [ ] Add Instagram and Facebook handles
- [ ] Generate final QR codes after domain is set
- [ ] Confirm packaging material type
- [ ] Confirm delivery areas beyond Rawalpindi/Islamabad
- [ ] Get lab-tested nutrition values to replace indicative values

---

## Premium Polish Pass — Export Notes

### Recommended Export Sizes (Canva)

| Asset | Size | Format |
|---|---|---|
| Visiting card front | 3.5" × 2" (900×514px @300dpi) | PDF Print / PNG |
| Visiting card back  | 3.5" × 2" (900×514px @300dpi) | PDF Print / PNG |
| Product label / sticker | 70mm × 50mm | PDF Print |
| Brochure panel (tri-fold) | A4 folded (99mm per panel) | PDF Print |
| QR order card | 85mm × 55mm | PDF Print / PNG |
| Instagram post | 1080 × 1080px | PNG / JPG |
| WhatsApp status | 1080 × 1920px | PNG |

### Print Finish Recommendations
- **Visiting cards**: Matte lamination (premium feel), rounded corners optional
- **Product labels**: Kraft paper base or cream matte stock — matches brand warmth
- **QR cards**: Gloss UV spot on QR code against matte card background
- **Brochure**: 130gsm matte coated, tri-fold

### QR Minimum Size
- Print: minimum 20mm × 20mm with 4mm quiet zone
- Digital: minimum 150px × 150px

### Asset Classes in CSS
Use `.visiting-card--front/.visiting-card--back`, `.label-card--fuel/--nurture/--glow`,
`.brochure-panel`, `.qr-card`, `.asset-preview-grid` — all defined in `print-assets.css`.
