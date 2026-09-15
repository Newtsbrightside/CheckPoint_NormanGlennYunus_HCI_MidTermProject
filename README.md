# CheckPoint — Premium Kid Toys & Designer Collectibles Store

**Human-Computer Interaction (HCI) Mid-Term Project**  
**Team Members:** Norman, Glenn, Yunus  
**Brand:** CheckPoint (*"I Love CP!"*)

---

## 🌟 Overview

**CheckPoint** is a modern, high-end e-commerce web application for a premier kid toys brand and authorized designer art toy collectibles boutique. Inspired by modern retail standards (Pop Mart, 807 Garage), the storefront provides a delightful, child-safe, and interactive shopping experience.

---

## 🚀 Key Features

### 1. Sticky Navigation & Header
- **Branding**: Typographic logo with custom subline styling.
- **Search**: Instant live search filtering products across names, tags, and categories.
- **Quick Links**: Category switching for Blind Boxes, Robots, Building Sets, and Classics.
- **Action Triggers**: Dynamic shopping bag with item count badge, wishlist drawer, and collector authentication modal.

### 2. High-Impact Hero & Collaborations
- **Hero Banner**: Studio toy photography backdrop with countdown timer and child-safe certification badges.
- **Exclusive Creator Drops**: Dedicated cards for **CheckPoint × Robot H1 Series** and **CheckPoint × AstroBunny: Star Hopper** with one-click category filtering.

### 3. Interactive Product Detail Page (PDP) Modal
- **Multi-Photo Gallery**: High-resolution studio photography with matching multi-angle thumbnail previews.
- **Variant Selectors**: Select colorways and editions (e.g., Single Mystery Box vs. Collector Display Case).
- **Guarantees**: Child Safety & ASTM/EN71 testing compliance accordion, authenticity guarantee, and product specifications.
- **Social Sharing**: One-click sharing to WhatsApp, Telegram, and clipboard.

### 4. Slide-Out Shopping Bag & Free Shipping Meter
- **Live Progress Bar**: Visual meter calculating distance to free express delivery ($80 threshold).
- **Quantity Controls**: Add, decrement, and remove items with instant subtotal and tax calculation.
- **Promo Engine**: Supports discount codes (`CHECKPOINT10`, `ILOVECHECKPOINT`).

### 5. Interactive Checkout & Sound Engine
- **Web Audio API**: Real-time auditory chime upon successful checkout completion.
- **Confetti Canvas**: Physics-based confetti celebration on order confirmation.
- **Local Persistence**: Cart, wishlist, and user session automatically saved via `localStorage`.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic structure with accessible ARIA tags and modal dialogues.
- **CSS3 (Vanilla)**: Glassmorphism header, responsive CSS Grid and Flexbox, custom color tokens, and smooth micro-animations.
- **JavaScript (Vanilla ES6+)**: State management, Web Audio API sound synthesis, event delegation, and DOM manipulation (zero external frameworks or runtime dependencies).
- **Typography**: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) via Google Fonts.

---

## 📂 Project Structure

```
KidToys/
├── images/
│   ├── hero_toys_banner.jpg
│   ├── collab_robot_h1.jpg
│   ├── collab_astrobunny.jpg
│   ├── astro_bunny_front.jpg
│   ├── astro_bunny_closeup.jpg
│   ├── robot_front.jpg
│   ├── robot_closeup.jpg
│   ├── robot_box.jpg
│   ├── mario_trio_full.jpg
│   ├── mario_closeup.jpg
│   ├── peach_luigi_closeup.jpg
│   ├── drone_front.jpg
│   ├── drone_angle.jpg
│   ├── drone_box.jpg
│   ├── lego_brick_castle.jpg
│   ├── lego_brick_details.jpg
│   ├── lego_brick_flatlay.jpg
│   ├── wooden_blocks_train.jpg
│   ├── wooden_blocks_closeup.jpg
│   ├── wooden_blocks_arranged.jpg
│   ├── plush_bear_front.jpg
│   ├── plush_bear_closeup.jpg
│   ├── plush_bear_seated.jpg
│   ├── robot_figure_front.jpg
│   ├── robot_figure_closeup.jpg
│   └── robot_figure_action.jpg
├── index.html
├── styles.css
├── scripts.js
└── README.md
```

---

## 💻 How to Run Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/Newtsbrightside/CheckPoint_NormanGlennYunus_HCI_MidTermProject.git
   ```
2. Open `index.html` directly in any modern web browser (Google Chrome, Firefox, Edge, Safari):
   ```bash
   google-chrome index.html
   ```
   *No server, build step, or npm install required.*
