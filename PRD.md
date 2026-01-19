# JColeman Consulting Website Redesign - Product Requirements Document

## Phase 1: Architecture & PRD

---

## 1. Project Overview

### 1.1 Objective
Transform JColeman Consulting's existing WordPress-based website into a modern, premium Next.js application that reflects the company's expertise in startup financial services. The new design will follow the sophisticated, premium aesthetic of the Jurri template while maintaining all existing content and functionality.

### 1.2 Company Background
**JColeman Consulting** provides comprehensive accounting, bookkeeping, tax, and fractional CFO services tailored specifically for startups. Founded by Joanna Coleman, who has helped raise over $100 million for startups, the firm is controller-led and based in Roseville, California.

**Core Values:** Integrity, Trusted Partnership, Quality, Empathy, Collaboration

**Tagline:** "Building Strong Startups"

### 1.3 Technical Stack
- **Framework:** Next.js 15 (App Router)
- **React Version:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **UI Components:** Shadcn UI + custom builds
- **Animations:** Framer Motion
- **Content:** MDX for blog articles

---

## 2. Full Sitemap

### 2.1 Primary Navigation

```
/                           # Homepage
/about                      # About Us (Company, Values, Team)
/services                   # Services Overview
  /services/bookkeeping     # Bookkeeping & Accounting
  /services/tax             # Tax Services
  /services/cfo             # Fractional CFO
  /services/hr              # People Operations / HR
/testimonials               # Client Testimonials
/articles                   # Blog/Articles Index
  /articles/[slug]          # Individual Article Pages
/contact                    # Contact / Request Info
```

### 2.2 Secondary Pages

```
/work-with-us               # Partner/Work With Us
/work-here                  # Careers
/privacy                    # Privacy Policy
/terms                      # Terms of Use
```

### 2.3 Utility Pages (Internal/Forms)

```
/assessment                 # Free Books Assessment
/due-diligence              # Due Diligence Info
/documents                  # Client Documents Portal
```

### 2.4 Content Inventory from Old Site

| Page | Status | Priority | Notes |
|------|--------|----------|-------|
| Homepage | Migrate | P0 | Hero, Services, Value Props |
| About Us | Migrate | P0 | 10+ team members, values |
| Bookkeeping & Accounting | Migrate | P0 | 6 sub-services |
| Tax Service | Migrate | P0 | R&D credits featured |
| Fractional CFO | Migrate | P0 | 9 service areas |
| People Operations | Migrate | P1 | Full content available |
| Testimonials | Migrate | P0 | 13+ testimonials |
| Articles (44+) | Migrate | P1 | Blog content |
| Marketing | Coming Soon | P2 | Placeholder only |
| IT Services | Coming Soon | P2 | Placeholder only |
| Privacy/Terms | Migrate | P1 | Legal pages |

---

## 3. Visual Analysis - Design Target (Jurri Template)

### 3.1 Color System

**Primary Palette:**
| Name | Hex | Usage |
|------|-----|-------|
| Dark Navy | `#0d1c29` | Primary backgrounds, header, footer |
| Charcoal | `#132030` | Secondary backgrounds |
| Gold/Tan | `#c5a788` | Accents, CTAs, highlights |
| Cream | `#ead3bc` | Light accents, hover states |

**Secondary Palette:**
| Name | Hex | Usage |
|------|-----|-------|
| Off-white | `#f9f9f9` | Content area backgrounds |
| Light Gray | `#e8eded` | Borders, dividers |
| White | `#ffffff` | Primary text on dark |
| White 70% | `#ffffffb3` | Secondary text on dark |

### 3.2 Typography System

**Font Stack:**
1. **Headlines:** Frank Ruhl Libre (serif) - 300/400 weights
2. **Navigation/UI:** Montserrat (sans) - 500/700 weights
3. **Body:** Inter (sans) - 400/600/700 weights

**Type Scale (Desktop):**
- H1: 64px / 1.1 line-height
- H2: 48px / 1.2 line-height
- H3: 32px / 1.3 line-height
- H4: 24px / 1.4 line-height
- Body: 16px / 1.6 line-height
- Small: 14px / 1.5 line-height

### 3.3 Spacing & Layout

**Container:**
- Max-width: 1200px (desktop)
- Padding: 32px horizontal
- Mobile padding: 16px

**Section Spacing:**
- Between sections: 120px (desktop), 80px (mobile)
- Internal padding: 80px vertical (desktop), 48px (mobile)

**Breakpoints:**
- Desktop: 1280px+
- Tablet: 810px - 1279px
- Mobile: < 810px

### 3.4 Component Patterns

**Buttons:**
- Primary: Gold background, dark text, rounded-full
- Secondary: Transparent, gold border, gold text
- Size: 16px padding horizontal, 12px vertical

**Cards:**
- Background: Slightly lighter than section
- Border-radius: 8px
- Shadow: Subtle elevation
- Hover: Scale 1.02, shadow increase

**Navigation:**
- Fixed header, 80px height
- Logo left, menu center, CTA right
- Hamburger on mobile with slide-out menu

---

## 4. Content Mapping Strategy

### 4.1 Homepage Mapping

| Old Section | New Component | Design Treatment |
|-------------|---------------|------------------|
| Hero with "Startup Solutions" | `HeroSection` | Dark navy bg, Frank Ruhl Libre headline, gold CTA |
| 3 Service Cards | `ServicesGrid` | Icon cards with gold accents |
| Value Props (Finance Team, Technology, Strategy, Execution) | `ValueProposition` | 4-column grid with icons |
| Latest Articles | `FeaturedArticles` | 3-card horizontal layout |
| Testimonials | `TestimonialCarousel` | Quote cards with company logos |

### 4.2 Service Pages Mapping

**Bookkeeping & Accounting → `/services/bookkeeping`**
- Hero: Page title + description
- Sub-services: Tabbed interface or accordion
  - Bookkeeping (AP, AR, Bank, Cards, Expenses)
  - Reporting & Planning (Financial Reports, FP&A)
  - Tax Prep (1099s, W2s, compliance)
  - Audit Prep
  - Payroll
  - Due Diligence
- Partner Logos: Bill, Brex, Expensify, Ramp, etc.
- Related Articles Section

**Tax Service → `/services/tax`**
- Hero: Page title + description
- Features: Simplified Taxes, Experts, Year-round Support
- R&D Tax Credit Section (featured callout)
- Related Articles

**Fractional CFO → `/services/cfo`**
- Hero: Page title + value prop
- Benefits Grid (9 items): Cash Flow, Reporting, Profit Optimization, Fundraising, Processes, Risk Management, Go-to-Market, Competitor Analysis, Exit Strategy
- CFO Benefits Section
- CTA Banner

**People Operations → `/services/hr`**
- Hero: Page title
- Services: Acquiring Talent, Employee Types, Payroll & Benefits
- Benefits: Onboarding, Retention, Goals
- Related Articles

### 4.3 About Page Mapping

**Structure:**
1. Hero with company mission
2. Core Values Section (5 values with descriptions)
3. Leadership Team Grid (8+ members)
   - Photo, Name, Title, LinkedIn
   - Expandable bios
4. Company Statistics (optional)

### 4.4 Testimonials Mapping

**Data Structure:**
```typescript
interface Testimonial {
  quote: string;
  author: string;
  title: string;
  company: string;
  companyLogo?: string;
  companyUrl?: string;
}
```

**Display:** Masonry grid or carousel with 3 visible testimonials

### 4.5 Blog/Articles Mapping

**Index Page:**
- Featured article (large)
- Article grid (3 columns)
- Category filters
- Pagination

**Article Page:**
- Hero with title, date, category
- MDX content body
- Author info
- Related articles
- Share buttons

---

## 5. Technical Implementation Plan

### 5.1 Project Structure

```
app/
├── (marketing)/              # Marketing pages group
│   ├── layout.tsx           # Shared marketing layout
│   ├── page.tsx             # Homepage
│   ├── about/
│   │   └── page.tsx
│   ├── services/
│   │   ├── page.tsx         # Services overview
│   │   ├── bookkeeping/
│   │   ├── tax/
│   │   ├── cfo/
│   │   └── hr/
│   ├── testimonials/
│   │   └── page.tsx
│   ├── contact/
│   │   └── page.tsx
│   └── articles/
│       ├── page.tsx         # Articles index
│       └── [slug]/
│           └── page.tsx     # Individual article
├── api/
│   └── newsletter/
│       └── route.ts
└── layout.tsx               # Root layout

components/
├── landing/                 # Landing page components
│   ├── hero-section.tsx
│   ├── services-grid.tsx
│   ├── value-proposition.tsx
│   ├── testimonial-carousel.tsx
│   ├── featured-articles.tsx
│   ├── cta-banner.tsx
│   └── partner-logos.tsx
├── shared/                  # Shared components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── navigation.tsx
│   ├── mobile-menu.tsx
│   └── section-wrapper.tsx
└── ui/                      # Shadcn UI components

data/
├── config/
│   ├── metadata.js          # Site metadata
│   ├── headerNavLinks.ts    # Navigation links
│   ├── footerLinks.ts       # Footer links
│   └── site.settings.js     # Site configuration
├── services/                # Service page data
│   ├── bookkeeping.ts
│   ├── tax.ts
│   ├── cfo.ts
│   └── hr.ts
├── team/                    # Team member data
│   └── members.ts
└── testimonials/            # Testimonial data
    └── testimonials.ts

content/
└── articles/               # MDX blog content
    ├── article-1.mdx
    └── ...
```

### 5.2 Component Architecture

**Landing Page Components (Priority Order):**

1. **Header/Navigation**
   - Fixed position, dark background
   - Logo + nav links + CTA
   - Mobile hamburger menu
   - Scroll-triggered animations

2. **HeroSection**
   - Props: title, subtitle, cta, image
   - Full-width dark background
   - Framer Motion entrance animations

3. **ServicesGrid**
   - Props: services[]
   - 3-4 column responsive grid
   - Icon + title + description + link

4. **ValueProposition**
   - Props: items[]
   - 4-column grid
   - Icon + title + description

5. **TestimonialCarousel**
   - Props: testimonials[]
   - Embla carousel or custom
   - Auto-play with pause on hover

6. **FeaturedArticles**
   - Props: articles[]
   - 3-card horizontal layout
   - Thumbnail + meta + excerpt

7. **CTABanner**
   - Props: title, description, buttonText, buttonLink
   - Full-width gold/dark section

8. **Footer**
   - Multi-column layout
   - Company info, links, contact
   - Social icons

### 5.3 Dynamic Routes

**Blog Articles:**
```typescript
// app/articles/[slug]/page.tsx
export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}
```

### 5.4 Data Files to Create

1. **`data/config/metadata.js`** - Update with JColeman info
2. **`data/config/headerNavLinks.ts`** - Navigation structure
3. **`data/config/footerLinks.ts`** - Footer link columns
4. **`data/services/`** - Service page content
5. **`data/team/members.ts`** - Leadership team data
6. **`data/testimonials/testimonials.ts`** - Client testimonials

---

## 6. Phase 2 Execution Order

### Sprint 1: Foundation & Global Layout
1. Update site metadata and configuration
2. Implement color system in Tailwind config
3. Build Header component with navigation
4. Build Footer component
5. Create base layout with Framer Motion page transitions

### Sprint 2: Homepage
1. HeroSection component
2. ServicesGrid component
3. ValueProposition component
4. TestimonialCarousel component
5. FeaturedArticles component
6. Homepage integration

### Sprint 3: Service Pages
1. Service page template
2. Bookkeeping & Accounting page
3. Tax Service page
4. Fractional CFO page
5. People Operations page

### Sprint 4: About & Testimonials
1. About page with team grid
2. Full testimonials page
3. Core values section

### Sprint 5: Blog & Content
1. Article index page
2. Article detail page
3. MDX integration
4. Category filtering

### Sprint 6: Contact & Polish
1. Contact page with form
2. Legal pages (Privacy, Terms)
3. Animations refinement
4. Mobile optimization
5. Performance optimization

---

## 7. Success Metrics

- **Lighthouse Scores:** 90+ across all categories
- **Core Web Vitals:** Pass all metrics
- **Mobile Responsive:** Perfect rendering 390px - 1920px
- **Accessibility:** WCAG 2.1 AA compliance
- **Build:** Zero TypeScript/ESLint errors

---

## 8. Migration Notes

### Content to Extract from Old Site
- All team member photos and bios
- Client testimonial text and logos
- Partner/platform logos (Bill, Brex, etc.)
- Blog article content (44+ articles)
- Service descriptions and feature lists

### Assets to Recreate
- Hero images (source new or regenerate)
- Service icons (use Lucide icons)
- Decorative elements (following Jurri patterns)

### SEO Considerations
- Maintain URL structure where possible
- Implement redirects for changed URLs
- Transfer meta descriptions
- Preserve structured data

---

## Appendix A: Team Members Data

| Name | Title | LinkedIn |
|------|-------|----------|
| Joanna Coleman | Founder & CEO | Yes |
| Brad Hunt | Controller | Yes |
| Jennifer Finley MBA | Controller | Yes |
| Kimberly Kleeberg | Controller | Yes |
| Dana McMillon MBA | Controller & Onboarding Specialist | Yes |
| Joe Schaller | Controller | No |
| Sarah McLaughlin | Controller | No |
| Heather Mitchell CPA | Controller | Yes |

## Appendix B: Client Logos

- Blendid
- Jona
- Intelex
- Stytch
- Talent International
- OCO
- Ziteo
- Gordian Bio
- Pocus
- Fountain Advisors
- StrongestLayer
- LevelAI
- VulnCheck

## Appendix C: Partner/Platform Logos

- Bill
- Brex
- Expensify
- Ramp
- Stripe
- Gusto
- QuickBooks
- Carta
