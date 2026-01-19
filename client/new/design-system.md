# Jurri - Lawyer & Consulting Template Design System

## Overview
Premium legal and consulting website template built with Framer. Features a dark, sophisticated aesthetic with gold/tan accents suitable for professional services firms.

## Color Palette

### Primary Colors
- **Dark Navy**: `#0d1c29` - Main background color
- **Charcoal**: `#132030`, `#1b273a` - Secondary backgrounds
- **Gold/Tan Accent**: `#c5a788` - CTAs, highlights, accent elements
- **Cream**: `#ead3bc` - Light accents

### Secondary Colors
- **Off-white**: `#f9f9f9` - Content backgrounds
- **Light Gray**: `#e8eded` - Borders, dividers
- **White**: `#ffffff` - Primary text on dark backgrounds
- **White 70%**: `#ffffffb3` - Secondary text on dark backgrounds

## Typography

### Font Families
1. **Frank Ruhl Libre** (Serif)
   - Weights: 300 (Light), 400 (Regular)
   - Usage: Headlines, hero text, section titles
   - Character: Elegant, sophisticated, premium

2. **Montserrat** (Sans-serif)
   - Weights: 500 (Medium), 700 (Bold), with italics
   - Usage: Navigation, buttons, labels
   - Character: Modern, professional, geometric

3. **Inter** (Sans-serif)
   - Weights: 400 (Regular), 600 (Semi-bold), 700 (Bold)
   - Usage: Body text, UI elements
   - Character: Clean, readable, versatile

4. **Satoshi** (Display Sans)
   - Weights: 400, 700, with italics
   - Usage: Alternative display text
   - Character: Contemporary, distinctive

### Typography Hierarchy
- Headlines: Frank Ruhl Libre Light/Regular
- Subheadlines: Inter Semi-bold or Montserrat Medium
- Body: Inter Regular
- Buttons/CTAs: Montserrat Bold
- Line-height: Base 1.2em
- Letter-spacing: Context-dependent (0 default)

## Layout Structure

### Breakpoints
- **Desktop**: 1280px+ (1200px max-width container)
- **Tablet**: 810px - 1279px
- **Mobile**: max 809px (390px reference width)

### Spacing System
- Container padding: 24px vertical, 32px horizontal (desktop)
- Mobile padding: 12px vertical, 16px horizontal
- Section gaps: 8-32px based on context
- Navigation gap: 32px desktop, 20px tablet

### Navigation
- Fixed header with dark background
- Desktop: Full horizontal nav with logo left, menu center, CTA right
- Mobile: Hamburger menu with slide-out vertical navigation
- Z-index layering for dropdowns

## Component Patterns

### Hero Section
- Full-width dark navy background
- Large serif typography (Frank Ruhl Libre)
- Gold/tan accent color for CTAs
- White text for contrast
- Semi-transparent overlay for depth: `#0d1c2999`

### Cards
- Flex-based layouts with gap spacing
- Rounded corners (CSS custom properties)
- Shadow systems for depth
- Hover states with font-weight transitions

### Buttons/CTAs
- Gold/tan background (`#c5a788`)
- Dark text for contrast
- Montserrat Bold typography
- Rounded corners
- Hover transitions

### Footer
- Dark navy background matching header
- Multi-column layout on desktop
- Stacked layout on mobile
- 24px vertical padding (12px mobile)

## Animation & Interaction

### Transitions
- Font-weight changes on hover
- Color transitions between states
- Smooth positioning animations
- Z-index layering for overlays

### Accessibility
- Font smoothing: `-webkit-font-smoothing: antialiased`
- Proper color contrast ratios
- Text decoration skip-ink support
- Focus states for interactive elements

## Design Principles

1. **Premium Sophistication**: Dark backgrounds with gold accents convey luxury and professionalism
2. **Clear Hierarchy**: Serif headlines with sans-serif body creates visual distinction
3. **Generous Whitespace**: Spacious layouts enhance readability and premium feel
4. **Consistent Rhythm**: Unified spacing and typography scales across all components
5. **Mobile-First**: Responsive design that adapts elegantly across devices
