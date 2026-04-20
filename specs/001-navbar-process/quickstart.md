# Phase 1: Quickstart

## Getting Started with feature `001-navbar-process`

**Dependencies needed**:
- GSAP and GSAP ScrollTrigger must be installed via `pnpm add gsap`.

**To test the feature locally**:
1. Run `pnpm dev`.
2. Inspect the top Navbar. The links should be centered, "Contacto" missing, "Proceso" present, and a uniquely styled "Hablemos" button floating left.
3. Scroll down on the page; "Hablemos" should scroll cleanly to the contact/footer section.
4. Scroll to the new "Proceso" section. Verify the "Nuestro proceso" and "Claridad en cada etapa." text becomes sticky and centered.
5. As you scroll within the section boundary, the 4 numbered steps ("Descubrimiento", etc.) should scroll past the sticky text in an "elevator effect" via GSAP ScrollTrigger.
