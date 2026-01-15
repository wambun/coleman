# Project Objective: Full Multi-Page Website Redesign

Revitalize our existing company website by adopting the design philosophies and UI/UX cues from our new design direction. This is a **full website migration**, not just a landing page.

## Technical Context
- **Frontend Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS 3.4.
- **UI Components**: Shadcn UI + Framer Motion (already initialized in `/components/landing` and `/components/shared`).
- **Data Driven**: The build must be driven by the specifications found in the `client` folder.

## Sources & Reference
1. **Current State (`client/old`)**: Contains the existing website's structure, content, and logic.
2. **Design Target (`client/new`)**: Contains the new design philosophy and UI patterns.

### Data Collection Automation
Use the Firecrawl automation script to populate these directories:
```bash
# Fetch old site data
node scripts/firecrawl-fetch.mjs --url "https://old-site.com" --target "old"

# Fetch new design reference data
node scripts/firecrawl-fetch.mjs --url "https://new-design-ref.com" --target "new"
```
*Note: Requires `FIRECRAWL_API_KEY` in your environment or `.env` file.*

## Workflow Requirements
1. **Phase 1: Architecture & PRD**: Before writing code, generate a PRD that includes:
    - A full **Sitemap** derived from `client/old`.
    - Content mapping: How Markdown/JSON/HTML data from `old` will be rendered using the `new` design components.
    - Proposed technical implementation (e.g., dynamic routes for blog/services).
2. **Phase 2: Execution**:
    - Implement the global layout (navigation, footer) based on `client/new`.
    - Build out all internal pages as defined by the sitemap.
    - Ensure smooth transitions and premium animations (Framer Motion) consistent with the new design.

**Goal**: Transform the legacy multi-page site into a modern, premium experience that strictly follows the design cues in `client/new`.
old - 
new - 