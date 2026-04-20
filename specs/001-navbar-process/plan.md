# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

Update the Navbar to center navigation links, remove "Contacto", add "Proceso", and introduce a distinct "Hablemos" CTA that scrolls to the contact section. Add a new interactive "Proceso" section with sticky titles and a 4-step scrolling elevator effect for the content.

## Technical Context

**Language/Version**: TypeScript, Astro 
**Primary Dependencies**: GSAP + ScrollTrigger (for the elevator effect animation)
**Storage**: N/A  
**Testing**: Manual visual testing (as per spec)
**Target Platform**: Modern web browsers (desktop & mobile)
**Project Type**: web-site/landing-page  
**Performance Goals**: 60 fps during scroll in the process section
**Constraints**: Zero-JS by default (use minimal vanilla JS via Astro `<script>` for GSAP animations instead of heavy framework islands)
**Scale/Scope**: 1 page update, 1 new section, 4 process steps

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- **Components-First**: We will build `Process.astro` as a standalone component in `src/components/`.
- **Zero-JS by Default**: We will avoid React/Vue islands and instead use Astro's native `<script>` tag functionality to load GSAP only on the client where the process section exists.
- **Type Safety**: We will define TS interfaces for the process steps in `src/data/landing.ts`.
- **Performance & SEO**: GSAP ScrollTrigger will be used responsibly to maintain 60fps.
- **Content Management**: Content for the new section will be added to `src/data/landing.ts`.

## Project Structure

### Documentation (this feature)

```text
specs/001-navbar-process/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── components/
│   ├── Header.astro     # Update to remove Contacto, add Proceso, center links, and add Hablemos
│   └── Process.astro    # New component for the sticky scroll elevator section
└── data/
    └── landing.ts       # Update to include Process steps data
```

**Structure Decision**: Standard Astro components and data structure. No new directories needed.

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

*(No violations)*
