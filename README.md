# Wisper Lab — Official Corporate Showcase & Verification Property
**Domain:** [wisperlab.fahadislam.com](https://wisperlab.fahadislam.com)  
**Proprietor:** Md. Fahad Islam  
**Government Trade License Number:** `20268119454000219`  
**Issuing Authority:** No. 3 Pachandar Union Parishad, Tanore, Rajshahi, Bangladesh  
**Status:** Active Enterprise (Fiscal Year 2026–2027, Valid up to 30 June 2027)

---

## 1. Executive Summary & Verification Purpose
This codebase contains the production-ready single-page corporate website for **Wisper Lab**, engineered both as the company's official digital presence and as the primary legal verification property for the **Meta Business Portfolio (Meta Business Manager)**, financial partners, tax authorities, and enterprise clients.

Every corporate attribute, government registration detail, physical address, and communication line is rendered verbatim in semantic HTML5 with matching Schema.org (`Organization` and `LocalBusiness`) JSON-LD structured data.

---

## 2. Strict Design System & Anti-Slop Architecture
Crafted in accordance with Swiss architectural grid principles (inspired by Stripe Press, Linear Light, and Vercel Light):
- **Theme:** Strictly Light Mode only (`color-scheme: light;`).
- **Solid Color Palette (Zero Gradients):**
  - Primary Background: Pure Alabaster (`#FAF9F5`)
  - Card & Surface: Crisp White (`#FFFFFF`)
  - Secondary Muted Surface: Warm Stone (`#F2F0E8`)
  - Headings / Primary Text: Deep Ink Black (`#111111`)
  - Body Text: Charcoal Slate (`#4A4A46`)
  - Muted Metadata / Labels: Warm Gray (`#767670`)
  - Exposed Grid Borders: Crisp 1px Solid (`#E2E0D8`)
  - Primary Accent: Deep Forest Ink (`#0D3B2E`)
- **Typography:**
  - Headings: `Plus Jakarta Sans` (tight tracking `-0.03em`, structured scale).
  - Body Copy: `Inter` (comfortable reading line width `68ch`, line height `1.6`).
  - Technical / License Metadata: `JetBrains Mono` (uppercase tracking for coordinates, license numbers, and category IDs).
- **Anti-Slop Guarantees:**
  - Zero CSS gradients (`linear-gradient`, `radial-gradient`, text gradients forbidden).
  - Zero floating 3D blobs, blurred orbs, glassmorphism (`backdrop-blur`), or neon colors.
  - Zero emojis in headings, badges, or cards.
  - Pixel-perfect 1.5px stroke Lucide SVG icons in square-framed borders.
  - Zero fabricated vanity metrics or fake testimonials.
  - Zero `#` placeholder links or dead anchor jumps.

---

## 3. Official Business & Regulatory Record (Verbatim)

| Field | Official Value |
| :--- | :--- |
| **Legal Business Name** | **Wisper Lab** |
| **Proprietor / Signatory** | **Md. Fahad Islam** |
| **Nature of Business** | Individual / Sole Proprietorship (Online Business) |
| **Business Category** | Online Business, Software Development & Digital Commerce |
| **Trade License Number** | `20268119454000219` |
| **Issuing Authority** | No. 3 Pachandar Union Parishad, Upazila: Tanore, District: Rajshahi |
| **Fiscal Year & Validity** | 2026–2027 (Valid up to 30 June 2027) |
| **Registered Business Address** | Kachua Uttar Para, Ward No- 07, Post Office: Krishnapur, Upazila: Tanore, City/District: Rajshahi, State/Region: Rajshahi, Postal Code: 6220, Country: Bangladesh |
| **Geographic Coordinates** | 24.58° N, 88.58° E |
| **Official Business Phone** | `+8801516556465` (Clickable `tel:` with one-click copy) |
| **Official Business Email** | `contact@fahadislam.com` (Clickable `mailto:` with one-click copy) |
| **Official Website Domain** | `https://wisperlab.fahadislam.com` |

---

## 4. Single-Page Architecture & Sections

1. **Top Navigation Bar (Sticky)**
   - Minimalist typographic wordmark `WISPER LAB` with monospace badge `EST. 2026`.
   - Smooth navigation links: `Solutions`, `Products`, `Corporate Info`, `Contact`.
   - Direct call-to-action button: `Inquire — +880 1516-556465`.
   - Accessible responsive mobile drawer.

2. **Hero Section (Asymmetric Architectural Grid)**
   - Left: Monospace status badge (`REGISTERED DIGITAL ENTERPRISE • RAJSHAHI, BD`), core studio headline, descriptive mandate, and dual CTAs (`Explore Products & Services` and `View Official Company Registry`). Micro trust badges for government licensing and sole proprietorship status.
   - Right: Official **Company Fact Sheet** card in crisp white with monospace labels displaying Legal Name, Proprietor, Trade License ID (with copy trigger), Issuing Body, and Active Status.

3. **Core Divisions & Solutions (`#solutions`)**
   - 3-column bordered grid detailing Wisper Lab's operational divisions:
     - **Division 01: Mobile & Utility Software** (Kotlin, Jetpack Compose, local-first on-device ML).
     - **Division 02: Full-Stack Web & Geo Platforms** (TypeScript, Node.js, PostgreSQL/PostGIS, geofenced matching).
     - **Division 03: Digital Publishing & E-Commerce** (Domestic online book commerce, instant downloads, 64-district delivery).

4. **Flagship Products & Active Operations (`#products`)**
   - Editorial showcase of active studio initiatives:
     - **Wisper Type:** Android multilingual voice dictation and transcription utility with zero server audio retention.
     - **MistriBhai Platform:** Hyperlocal service-matching architecture connecting households with verified technicians.
     - **Wisper Digital Publications:** Educational and technical literature distribution across Bangladesh.

5. **Corporate Registry & Verification Ledger (`#corporate-info`)**
   - 2-column compliance table engineered specifically for Meta Business Manager and platform analysts.
   - Every single license field rendered verbatim in high-contrast solid typography.
   - **"Copy Machine-Readable JSON Dossier"** button for immediate regulatory review.

6. **Direct Contact & Inquiry Dispatch (`#contact`)**
   - Left: Direct contact cards for phone (`+8801516556465`), email (`contact@fahadislam.com`), and physical registered office with one-click copy buttons and operating hours (Sunday–Thursday, 09:00–18:00 BST).
   - Right: Interactive HTML contact form with real-time validation (name, business email, inquiry category, message) and an instant simulated dispatch receipt displaying reference ticket code (`WL-REF-2026-XXXX`) and timestamp.

7. **Compliance Footer & Interactive Legal Modals**
   - Full repetition of company credentials, address, and contacts.
   - Three interactive modal trigger buttons (zero dead links or `#` jumps):
     - **Privacy Policy:** Comprehensive disclosure of data handling, local-first mobile architecture, Meta Business Tools compliance, cookies, retention, and user rights.
     - **Terms of Service:** Commercial terms, intellectual property ownership (Md. Fahad Islam / Wisper Lab), acceptable use, and exclusive jurisdiction in Rajshahi, Bangladesh.
     - **Refund & Delivery Policy:** SLAs for digital deliveries (instant to 24h) and physical parcel courier transit (3–5 business days nationwide), return eligibility within 7 days, and consumer protection adherence under the Bangladesh Consumer Rights Protection Act, 2009.

---

## 5. Local Development & Deployment

### Quick Local Preview
```bash
# Install dependencies (Vite)
npm install

# Start local development server
npm run dev

# Build production bundle to /dist
npm run build

# Preview production build locally
npm run preview
```

### Static File Deployment (Zero Build Step Alternative)
Because the codebase is written in clean, modern HTML5, CSS, and vanilla JS, the root files (`index.html`, `styles.css`, `app.js`, `favicon.svg`, `robots.txt`, `sitemap.xml`) can also be deployed directly to:
- **Cloudflare Pages** (Build output: `/` or `dist`)
- **Vercel / Netlify** (Static preset)
- **GitHub Pages**
- **Nginx / Apache / CPanel Web Server**

---

## 6. Verification Checklist for Meta Reviewers
- [x] Legal Entity Name matches Trade License (`Wisper Lab`).
- [x] Proprietor Name matches National ID and License (`Md. Fahad Islam`).
- [x] Trade License Number matches government database (`20268119454000219`).
- [x] Registered Address includes Ward No- 07, Post Office: Krishnapur, Upazila: Tanore, Rajshahi-6220.
- [x] Official Phone is clickable and matches business records (`+8801516556465`).
- [x] Official Email matches custom domain authority (`contact@fahadislam.com`).
- [x] Privacy Policy, Terms of Service, and Refund & Delivery Policy are functional and non-placeholder.
- [x] Schema.org `Organization` and `LocalBusiness` JSON-LD are pre-rendered in `<head>`.
