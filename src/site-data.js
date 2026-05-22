/**
 * site-data.js — Sehatyaab Fresh Batch
 * Central data adapter for all frontend modules.
 * Renderers import from here. This file does NOT import renderers.
 */

// ─────────────────────────────────────────────
// BRAND
// ─────────────────────────────────────────────
export const brand = {
  name: 'Sehatyaab Fresh Batch',
  taglineMaster: 'Rural roots. Modern nourishment. Made fresh after order.',
  taglineShort: 'Fresh organic bites, made to order.',
  promise: 'Prepared fresh after confirmed order. Delivered in 3–5 days.',
  story: `Sehatyaab Fresh Batch was born from a simple conviction: the food you eat every day should be honest, whole, and made with care. Rooted in Pakistani rural food traditions — where ingredients are known by name, not by code — we bring small-batch nourishment into modern health-conscious homes.

Every batch is made only after your order. No shelf inventory. No preservatives. No compromise.

We believe nourishment should be personal. That's why we offer three lifestyle-aligned products, each crafted for a different kind of person, but all sharing the same foundation: 12 whole-food ingredients, sourced with intention, prepared fresh for you.`,
  // TODO: Replace with actual WhatsApp number when confirmed by owner
  whatsappNumber: '923000000000',
  // TODO: Update with final deployed Netlify domain
  siteUrl: 'https://sehatyaab.netlify.app',
  // TODO: Add Instagram handle when confirmed
  instagram: null,
  // TODO: Add Facebook handle when confirmed
  facebook: null,
  email: null,
  location: 'Rawalpindi & Islamabad, Pakistan',
  deliveryAreas: ['Rawalpindi', 'Islamabad'],
  deliveryTime: '3–5 days after confirmed order',
  ingredientCount: 12,
};

// ─────────────────────────────────────────────
// SOCIAL
// ─────────────────────────────────────────────
export const social = {
  whatsapp: `https://wa.me/${brand.whatsappNumber}`,
  // TODO: Fill in when confirmed
  instagram: brand.instagram ? `https://instagram.com/${brand.instagram}` : null,
  facebook: brand.facebook ? `https://facebook.com/${brand.facebook}` : null,
};

// ─────────────────────────────────────────────
// INGREDIENTS (12 confirmed whole-food ingredients)
// ─────────────────────────────────────────────
export const ingredients = [
  { id: 'cheese',          name: 'Cheese',          emoji: '🧀', note: 'Real dairy, no processed variants' },
  { id: 'butter',          name: 'Butter',          emoji: '🧈', note: 'Pure cultured butter' },
  { id: 'cashews',         name: 'Cashews',         emoji: '🥜', note: 'Whole, dry-roasted' },
  { id: 'walnuts',         name: 'Walnuts',         emoji: '🌰', note: 'Rich in omega-3' },
  { id: 'pistachios',      name: 'Pistachios',      emoji: '🟢', note: 'Unsalted, shelled' },
  { id: 'almonds',         name: 'Almonds',         emoji: '🤍', note: 'Whole, raw' },
  { id: 'dried-coconut',   name: 'Dried Coconut',   emoji: '🥥', note: 'Unsweetened, desiccated' },
  { id: 'fox-nuts',        name: 'Fox Nuts',        emoji: '⚪', note: 'Makhana, light and crunchy' },
  { id: 'sunflower-seeds', name: 'Sunflower Seeds', emoji: '🌻', note: 'Raw, hulled' },
  { id: 'chia-seeds',      name: 'Chia Seeds',      emoji: '⚫', note: 'Whole black chia' },
  { id: 'flax-seeds',      name: 'Flax Seeds',      emoji: '🟤', note: 'Ground or whole' },
  { id: 'pumpkin-seeds',   name: 'Pumpkin Seeds',   emoji: '🎃', note: 'Raw, hulled pepitas' },
];

// ─────────────────────────────────────────────
// NUTRITION SNAPSHOT (per 100g, indicative only)
// TODO: Replace with lab-tested values when available
// ─────────────────────────────────────────────
export const nutrition = {
  disclaimer: 'Indicative values only. Lab-tested values pending. Not a substitute for medical or dietary advice.',
  perServing: '30g',
  perServingLabel: '30g serving (approx)',
  macros: [
    { label: 'Calories',      value: '~160 kcal', icon: '🔥', note: 'Per 30g serving' },
    { label: 'Protein',       value: '~5–7g',     icon: '💪', note: 'Varies by product' },
    { label: 'Healthy Fats',  value: '~10–12g',   icon: '🫒', note: 'Mostly mono & poly unsaturated' },
    { label: 'Carbohydrates', value: '~8–10g',    icon: '🌾', note: 'Mostly from whole food sources' },
    { label: 'Fibre',         value: '~2–3g',     icon: '🌿', note: 'Natural dietary fibre' },
    { label: 'Sugar',         value: '~2–3g',     icon: '🍯', note: 'Natural sugars, no added refined sugar' },
  ],
};

// ─────────────────────────────────────────────
// PRICES
// TODO: Confirm final PKR prices with owner
// ─────────────────────────────────────────────
export const prices = {
  disclaimer: 'Prices are indicative. Confirm final pricing via WhatsApp.',
  sizes: [
    { weight: '250g', label: 'Starter Batch',    price: 'Rs. 850',  bestFor: 'Try before you commit' },
    { weight: '500g', label: 'Regular Batch',    price: 'Rs. 1,550', bestFor: 'Weekly household supply' },
    { weight: '1kg',  label: 'Family Batch',     price: 'Rs. 2,900', bestFor: 'Best value, bulk freshness' },
  ],
};

// ─────────────────────────────────────────────
// PRODUCTS
// ─────────────────────────────────────────────
export const products = {
  protein: {
    slug: 'protein',
    id: 'daily-protein-bites',
    theme: 'fuel',
    themeName: 'Fuel',
    name: 'Daily Protein Bites',
    audience: 'Gym users, active professionals, protein-conscious buyers',
    mood: 'Bold, disciplined, macro-aware',
    tagline: 'Every bite counts. Make them count.',
    description: 'High-density, whole-food protein bites crafted for people who train, move, and demand more from their daily nutrition. No fillers. No protein powders. Just real food, compressed into purpose-built bites.',
    seoTitle: 'Daily Protein Bites | High-Protein Made-to-Order Snack — Sehatyaab',
    seoDescription: 'Protein-rich small-batch bites made with cashews, almonds, pistachios, and seeds. Made to order, delivered fresh. Healthy protein bites Pakistan.',
    h1: 'Daily Protein Bites — Fuel Edition',
    intro: 'Real-food protein. No powders. No fillers. Just 12 whole-food ingredients working for your body.',
    bestFor: [
      'Post-workout recovery',
      'Pre-gym energy boost',
      'Mid-day protein top-up',
      'Desk-side macro management',
      'Anyone cutting processed snacks',
    ],
    highlights: [
      { icon: '💪', label: 'Protein-forward', desc: 'Higher nut-to-seed ratio for sustained satiety' },
      { icon: '⚡', label: 'Clean energy',     desc: 'No refined sugar, no preservatives, no artificial anything' },
      { icon: '📦', label: 'Made to order',    desc: 'Fresh batch prepared only after your confirmed order' },
      { icon: '🧪', label: 'Whole-food only',  desc: '12 ingredients you can name. Nothing you cannot.' },
    ],
    ingredientFocus: ['cashews', 'almonds', 'pistachios', 'pumpkin-seeds', 'sunflower-seeds', 'walnuts'],
    className: 'theme-fuel',
    ctaLabel: 'Order Daily Protein Bites',
    whatsappMessage: 'Hi Sehatyaab! I want to order Daily Protein Bites (Fuel). Please share size options and pricing.',
  },

  crunch: {
    slug: 'crunch',
    id: 'daily-crunch',
    theme: 'nurture',
    themeName: 'Nurture',
    name: 'Daily Crunch',
    audience: 'Mothers, kids, families, school tiffin buyers',
    mood: 'Warm, safe, homemade-style, parent-trusted',
    tagline: 'Made for the ones you love most.',
    description: 'A warm, wholesome crunch your whole family will reach for. Crafted with the same care as something made at home — because it practically is. Clean ingredients, honest flavour, gentle crunch.',
    seoTitle: 'Daily Crunch | Healthy Snacks for Kids & Families — Sehatyaab',
    seoDescription: 'Wholesome family crunch bites made with whole-food ingredients. Healthy snacks for kids Pakistan, school tiffin snacks, made to order.',
    h1: 'Daily Crunch — Nurture Edition',
    intro: 'Because your family deserves snacks made with the same care you\'d bring to your own kitchen.',
    bestFor: [
      'School tiffin boxes',
      'After-school snacking',
      'Family TV-time munching',
      'Healthy gifting',
      'Replacing processed biscuits and chips',
    ],
    highlights: [
      { icon: '👨‍👩‍👧', label: 'Family-safe',     desc: 'No refined sugar, artificial colour, or preservatives' },
      { icon: '🏠', label: 'Homemade feel',   desc: 'Made in small batches, not a factory' },
      { icon: '🧒', label: 'Kid-approved',    desc: 'Gentle crunch, mild flavour, naturally appealing' },
      { icon: '📦', label: 'Made to order',   desc: 'Fresh batch prepared only after your confirmed order' },
    ],
    ingredientFocus: ['fox-nuts', 'dried-coconut', 'almonds', 'cashews', 'chia-seeds'],
    className: 'theme-nurture',
    ctaLabel: 'Order Daily Crunch',
    whatsappMessage: 'Hi Sehatyaab! I want to order Daily Crunch (Nurture) for my family. Please share size options and pricing.',
  },

  nourish: {
    slug: 'nourish',
    id: 'daily-nourish',
    theme: 'glow',
    themeName: 'Glow',
    name: 'Daily Nourish',
    audience: 'Beauty-conscious, wellness-focused women',
    mood: 'Elegant, light, ritual-based, portion-aware',
    tagline: 'Nourish from within. Glow without effort.',
    description: 'A refined daily ritual in every bite. Thoughtfully portioned nourishment bites designed around ingredients known for their skin, hair, and overall vitality benefits. Beautiful on the outside starts with what goes in.',
    seoTitle: 'Daily Nourish | Wellness Snacks for Women — Sehatyaab',
    seoDescription: 'Elegant wellness bites with flax, chia, almonds and dried coconut. Made to order small-batch nourishment for women. Glow from within.',
    h1: 'Daily Nourish — Glow Edition',
    intro: 'A bite-sized daily ritual. Ingredients chosen for whole-body vitality, crafted for the woman who takes her wellness seriously.',
    bestFor: [
      'Morning ritual snacking',
      'Post-workout beauty recovery',
      'Portion-controlled afternoon treat',
      'Gifting to mothers, sisters, friends',
      'Anyone curating their wellness routine',
    ],
    highlights: [
      { icon: '✨', label: 'Glow ingredients', desc: 'Flax, chia, almonds — ingredients long valued in nutrition' },
      { icon: '🌸', label: 'Portion-aware',    desc: 'Designed for mindful daily consumption' },
      { icon: '💎', label: 'Ritual-worthy',    desc: 'Elevated experience from ingredient to bite' },
      { icon: '📦', label: 'Made to order',    desc: 'Fresh batch prepared only after your confirmed order' },
    ],
    ingredientFocus: ['flax-seeds', 'chia-seeds', 'almonds', 'dried-coconut', 'walnuts', 'pistachios'],
    className: 'theme-glow',
    ctaLabel: 'Order Daily Nourish',
    whatsappMessage: 'Hi Sehatyaab! I want to order Daily Nourish (Glow). Please share size options and pricing.',
  },
};

// ─────────────────────────────────────────────
// PRODUCT NAV (ordered array, safe to iterate)
// ─────────────────────────────────────────────
export const productNav = [
  { slug: 'protein', name: 'Daily Protein Bites', theme: 'Fuel',    hash: '#/protein', className: 'theme-fuel' },
  { slug: 'crunch',  name: 'Daily Crunch',         theme: 'Nurture', hash: '#/crunch',  className: 'theme-nurture' },
  { slug: 'nourish', name: 'Daily Nourish',        theme: 'Glow',    hash: '#/nourish', className: 'theme-glow' },
];

// ─────────────────────────────────────────────
// HOW IT WORKS
// ─────────────────────────────────────────────
export const howItWorks = [
  { step: 1, icon: '💬', title: 'Message Us',     desc: 'Tap any WhatsApp button on this site to send us a pre-filled order message.' },
  { step: 2, icon: '✅', title: 'Confirm Order',  desc: 'We confirm your order, size, and delivery address within a few hours.' },
  { step: 3, icon: '🍱', title: 'We Prepare',     desc: 'Your fresh batch is prepared after confirmation. No pre-made stock, ever.' },
  { step: 4, icon: '🚚', title: 'We Deliver',     desc: 'Delivered to your door within 3–5 days, fresh and sealed.' },
];

// ─────────────────────────────────────────────
// WHY MADE TO ORDER
// ─────────────────────────────────────────────
export const whyMadeToOrder = [
  { icon: '🌿', title: 'Maximum Freshness',    desc: 'No sitting on shelves for weeks. Your batch is made for you, on the day it\'s made.' },
  { icon: '🚫', title: 'Zero Preservatives',   desc: 'When food is made fresh, it doesn\'t need chemical shelf-life extensions.' },
  { icon: '🔢', title: '12 Real Ingredients',  desc: 'Every ingredient has a name, a source, and a purpose. Nothing anonymous.' },
  { icon: '📦', title: 'Small Batch Quality',  desc: 'Each batch is made with the care of someone cooking for family, not a factory line.' },
  { icon: '🤝', title: 'Direct Relationship',  desc: 'You order directly from us. We prepare directly for you. No middleman, no mystery.' },
];

// ─────────────────────────────────────────────
// FAQs
// ─────────────────────────────────────────────
export const faqs = [
  {
    q: 'How fresh are Sehatyaab products?',
    a: 'Every batch is prepared fresh after your order is confirmed. We do not maintain pre-made inventory. Delivery takes 3–5 days from order confirmation.',
  },
  {
    q: 'What are the 12 ingredients?',
    a: 'Cheese, butter, cashews, walnuts, pistachios, almonds, dried coconut, fox nuts, sunflower seeds, chia seeds, flax seeds, and pumpkin seeds. 12 whole-food ingredients — nothing anonymous, nothing artificial.',
  },
  {
    q: 'Are there any preservatives or artificial additives?',
    a: 'No. Because we make to order, we don\'t need preservatives. What you receive is freshly made with nothing added to extend shelf life.',
  },
  {
    q: 'How do I place an order?',
    a: 'Tap any "Order on WhatsApp" button on this site. It will open WhatsApp with a pre-filled message. We\'ll confirm your order, size, and delivery details shortly.',
  },
  {
    q: 'What sizes are available?',
    a: 'We offer 250g, 500g, and 1kg batch sizes. Ask us on WhatsApp for current pricing.',
  },
  {
    q: 'Which areas do you deliver to?',
    a: 'We currently deliver within Rawalpindi and Islamabad. Please message us on WhatsApp to confirm your specific delivery area.',
  },
  {
    q: 'How should I store the product after receiving it?',
    a: 'Store in a cool, dry place in an airtight container. Refrigeration extends freshness. Consume within the recommended window provided on packaging.',
    // TODO: Add confirmed shelf life from owner
  },
  {
    q: 'Are Sehatyaab products suitable for children?',
    a: 'Daily Crunch (Nurture) is specifically designed for family use including children. However, our products contain whole nuts which may pose a choking risk for very young children. Always supervise young children when consuming whole-nut products.',
  },
  {
    q: 'Are these products lab-tested?',
    a: 'Nutrition values shown are indicative estimates. Lab-tested values are in process. We will update with certified values when available.',
  },
  {
    q: 'Can I customise my batch?',
    a: 'We may accommodate customisation requests for larger orders. Message us on WhatsApp to discuss your needs.',
  },
];

// ─────────────────────────────────────────────
// SEO METADATA
// ─────────────────────────────────────────────
export const seo = {
  defaultTitle: 'Sehatyaab Fresh Batch | Fresh Organic Bites Made to Order in Pakistan',
  defaultDescription: 'Small-batch healthy bites made after order with 12 whole-food ingredients. Explore Daily Protein Bites, Daily Crunch, and Daily Nourish.',
  routes: {
    home:    { title: 'Sehatyaab Fresh Batch | Rural Roots. Modern Nourishment.',              description: 'Made-to-order small-batch healthy bites. 12 whole-food ingredients. Delivered fresh to Rawalpindi & Islamabad.' },
    protein: { title: 'Daily Protein Bites | High-Protein Snack Pakistan — Sehatyaab',        description: 'Protein-rich made-to-order bites. Cashews, almonds, pistachios, seeds. No powders, no fillers. Healthy protein bites Pakistan.' },
    crunch:  { title: 'Daily Crunch | Healthy Snacks for Kids & Families — Sehatyaab',        description: 'Wholesome family crunch bites. Healthy snacks for kids Pakistan. Made fresh to order, no preservatives.' },
    nourish: { title: 'Daily Nourish | Wellness Snacks for Women Pakistan — Sehatyaab',       description: 'Elegant wellness bites with flax, chia, almonds. Glow from within. Small-batch nourishment for women Pakistan.' },
  },
};

// ─────────────────────────────────────────────
// SAFETY DISCLAIMER
// ─────────────────────────────────────────────
export const disclaimer = {
  text: 'Sehatyaab Fresh Batch products are wholesome foods made with natural ingredients. They are not medicines, supplements, or treatments for any medical condition. Nutrition information shown is indicative only. If you have allergies, dietary restrictions, or medical concerns, consult a qualified healthcare professional before consuming. Products contain tree nuts. Store as directed on packaging.',
};

// ─────────────────────────────────────────────
// UTILITY: Build WhatsApp URL
// ─────────────────────────────────────────────
export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message || `Hi Sehatyaab! I'd like to place an order. Please share your product options.`);
  return `https://wa.me/${brand.whatsappNumber}?text=${encoded}`;
}
