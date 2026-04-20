---
description: "Task list for feature implementation"
---

# Tasks: Navbar and Process Section

**Input**: Design documents from `/specs/001-navbar-process/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [x] T001 Install `gsap` and `@types/gsap` dependencies via `pnpm add gsap`
- [x] T002 Update `src/data/landing.ts` with `NavItem` and `ProcessStep` interfaces
- [x] T003 Update data arrays in `src/data/landing.ts` (update nav items, add the 4 process steps)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core infrastructure that MUST be complete before ANY user story can be implemented

**⚠️ CRITICAL**: No user story work can begin until this phase is complete

- [x] T004 [P] Ensure CSS/styling framework inside Astro is configured to support the required layouts for sticky positioning and flex/grid centering. (Implicitly verified)

**Checkpoint**: Foundation ready - user story implementation can now begin in parallel

---

## Phase 3: User Story 1 - Header/Navbar Navigation Updates (Priority: P1) 🎯 MVP

**Goal**: As a visitor, I want to see the navigation links clearly centered and a prominent "Hablemos" call-to-action on the left, knowing how to contact the team.

**Independent Test**: Verify visual layout on desktop/mobile: links are centered, "Contacto" is removed, "Proceso" is added, and "Hablemos" is styled distinctly and scrolls to the contact section.

### Implementation for User Story 1

- [x] T005 [US1] Update `src/components/Header.astro` wrapper layout to properly support a left-aligned CTA and centered nav links.
- [x] T006 [US1] Modify `src/components/Header.astro` to add the distinct "Hablemos" anchor linking to the contact section (`#contact` or similar) on the left side of the navbar.
- [x] T007 [US1] Update styling in `src/components/Header.astro` to center the main navigation links dynamically fetched from `src/data/landing.ts`.

**Checkpoint**: At this point, User Story 1 should be fully functional and testable independently

---

## Phase 4: User Story 2 - Interactive Process Section (Priority: P2)

**Goal**: As a visitor, I want to read about the company's process in an interactive way where the section title remains fixed and the process steps scroll smoothly like an elevator.

**Independent Test**: Scroll down to the "Proceso" section. Verify sticky behavior of the titles ("Nuestro proceso", "Claridad en cada etapa.") and the scrolling "elevator" animation of the 4 steps.

### Implementation for User Story 2

- [x] T008 [US2] Create basic `src/components/Process.astro` component with HTML structure mapping over `ProcessStep` data from `src/data/landing.ts`.
- [x] T009 [US2] Add CSS styling in `src/components/Process.astro` to establish the layout (sticky centered title container and the step cards container).
- [x] T010 [US2] Implement GSAP ScrollTrigger animation inside a native `<script>` tag in `src/components/Process.astro` to create the "elevator effect" (scrubbing translation/opacity) for the process steps relative to scroll position.
- [x] T011 [US2] Integrate `<Process />` component into the main layout in `src/pages/index.astro`.

**Checkpoint**: At this point, User Stories 1 AND 2 should both work independently

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Improvements that affect multiple user stories

- [x] T012 [P] Verify responsive behavior of the Header/Navbar on mobile devices.
- [x] T013 [P] Verify responsive behavior and animation smoothness of the Process section on mobile/touch devices.
- [x] T014 Run quickstart.md validation to ensure all steps work as expected.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies - can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion - BLOCKS all user stories
- **User Stories (Phase 3+)**: All depend on Foundational phase completion
- **Polish (Final Phase)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Can start after Foundational (Phase 2).
- **User Story 2 (P2)**: Can start after Foundational (Phase 2). Independently testable.

### Parallel Opportunities

- Setup tasks and Foundational tasks can run in parallel.
- Once Foundational phase completes, User Story 1 and User Story 2 can start in parallel.