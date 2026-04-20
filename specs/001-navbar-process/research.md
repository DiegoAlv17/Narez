# Phase 0: Research

## Animation Strategy for "Elevator Effect"

**Decision**: Use `GSAP` with `ScrollTrigger` plugin via an Astro native `<script>` tag.
**Rationale**: `GSAP ScrollTrigger` provides reliable scroll-scrubbed animations across browsers without the overhead of creating a thick interactive client-side framework wrapper (React/Vue/etc). The constitution requires Zero-JS by default, so we use Astro's native `<script>` handling to load minimal vanilla JS, attaching GSAP specific to the new `Process.astro` component.
**Alternatives considered**: 
- *CSS `sticky` + IntersectionObserver*: Lacks the exact scrubbing parallax control required for a smooth elevator effect (usually tied to the scroll position).
- *Framer Motion in React*: Would require turning the component into a React island, violating the Zero-JS by Default preference for lean Astro pages.
