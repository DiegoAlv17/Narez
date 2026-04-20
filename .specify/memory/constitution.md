<!-- Sync Impact Report
Version: 1.0.0 (Initial setup)
Modified Principles: Standard Astro Landing Page principles applied
Added Sections: Core Principles, Performance & SEO, Content Management
Templates needing updates: None yet
--->
# Narez Landing Constitution

## Core Principles

### Components-First Architecture
All UI elements MUST be built as reusable, standalone Astro components located in `src/components/`. Components should be strictly scoped by responsibility. Framework integration (React/Vue/etc.) is allowed only if interactive islands are necessary.

### Zero-JS by Default
Leverage Astro's partial hydration to deliver a mostly static HTML page. Client-side JavaScript MUST be opted into strategically via `client:*` directives only for interactive elements.

### Type Safety
The project uses TypeScript. All component props and data entries (in `src/data/`) MUST be strictly typed to ensure reliable rendering and early error detection during development.

## Performance & SEO

Strict standards for assets and loading speed:
- All images MUST be optimized and sized correctly (using Astro's built-in `<Image>` or `<Picture>` components).
- Global styles in `src/styles/global.css` must remain lean.
- SEO metadata (title, description, open graph) MUST be dynamically supported via `Layout.astro` and standard configuration.

## Content Management

Content (like features, CTA texts, heroes) SHOULD be governed through central configurators (e.g. `src/data/landing.ts`) rather than hardcoded in templates, ensuring easy future migrations to a CMS if required.

## Governance

- The constitution supersedes all other documentation. 
- All PRs must maintain or improve Lighthouse scores without breaking existing UI.
- Amendments to these principles require version increment and changelog documentation.

**Version**: 1.0.0 | **Ratified**: 2026-04-19 | **Last Amended**: 2026-04-19
