# Feature Specification: Navbar and Process Section

**Feature Branch**: `001-navbar-process`  
**Created**: 2026-04-19  
**Status**: Draft  
**Input**: User description: "Necesito 2 cambios:
1. Mover los elementos del Navbar al medio, eliminar el elemento de Contacto de la lista y sustituir por un nuevo apartado ""Proceso"". Además vas agregar un elemento al lado izquierdo que diga Hablemos, este elemento debe de resaltar de los elementos de la lista, este elemento sustituye el Contacto
2. Para el nuevo apartado de Proceso, vamos agregar los siguiente: 
- Un texto principal que diga ""Claridad en cada etapa."" Arriba de ese texto un pequeño texto que diga ""Nuestro proceso"". Ambos deben de encontrarse en el medio de la sección  y mantenerse ahí mientras el scroll baja y sube, porque los elementos del proceso van a ir subiendo y bajando según el scroll.
- El proceso debe de contener los siguientes pasos:
{
    n: ""01"",
    title: ""Descubrimiento"",
    desc: ""Analizamos tu negocio, retos actuales y objetivos. Definimos KPIs claros y un roadmap accionable."",
  },
  {
    n: ""02"",
    title: ""Diseño & Arquitectura"",
    desc: ""Prototipamos la experiencia y diseñamos la arquitectura técnica pensando en escalabilidad y mantenibilidad."",
  },
  {
    n: ""03"",
    title: ""Desarrollo iterativo"",
    desc: ""Construimos por sprints, mostrando avances semanales. Tú validas, nosotros iteramos."",
  },
  {
    n: ""04"",
    title: ""Lanzamiento & Evolución"",
    desc: ""Desplegamos con monitoreo activo y acompañamos el crecimiento con mejoras continuas."",
  },

Estos pasos deben verse como un efecto de ascensor dentro de la sección."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Header/Navbar Navigation Updates (Priority: P1)

As a visitor to the landing page, I want to see the navigation links clearly centered and a prominent "Hablemos" call-to-action on the left, so that I can easily find my way around the site and know exactly how to contact the team.

**Why this priority**: Navigation is critical for user journey and the primary Call To Action ("Hablemos") needs to be immediately visible to drive conversions.

**Independent Test**: Can be fully tested by verifying the visual layout of the Header/Navbar on desktop and mobile, ensuring "Contacto" is removed, "Proceso" is added, links are centered, and "Hablemos" is distinctly styled on the left.

**Acceptance Scenarios**:

1. **Given** I am viewing the landing page, **When** I look at the Navbar, **Then** I see the main navigation links ("Proceso" instead of "Contacto") centered in the header.
2. **Given** I am viewing the landing page, **When** I look at the left side of the Navbar, **Then** I see a highlighted "Hablemos" element that stands out from the rest of the navigation links.

---

### User Story 2 - Interactive Process Section (Priority: P2)

As a visitor scrolling through the landing page, I want to read about the company's process in an engaging, interactive way where the section title remains fixed and the process steps scroll smoothly like an elevator, so that I can easily digest the information step-by-step.

**Why this priority**: Engaging content presentation keeps users on the page longer and clearly communicates the value proposition and methodology.

**Independent Test**: Can be fully tested by scrolling down to the new "Proceso" section and verifying the sticky behavior of the titles and the scrolling "elevator" animation of the 4 steps.

**Acceptance Scenarios**:

1. **Given** I scroll down to the "Proceso" section, **When** the section enters the viewport, **Then** I see the small text "Nuestro proceso" and the main text "Claridad en cada etapa." centered on the screen.
2. **Given** I am in the "Proceso" section, **When** I continue to scroll down, **Then** the centered titles remain fixed in place while the 4 steps (01 to 04) scroll up and down (elevator effect) alongside or behind the text.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST update the Navbar layout to center the navigation links.
- **FR-002**: System MUST remove the "Contacto" link from the Navbar.
- **FR-003**: System MUST add a "Proceso" link to the Navbar navigation list.
- **FR-004**: System MUST add a prominent "Hablemos" element to the left side of the Navbar.
- **FR-005**: System MUST style the "Hablemos" element to stand out visually from standard navigation links.
- **FR-006**: System MUST introduce a new "Proceso" section on the landing page.
- **FR-007**: System MUST display "Nuestro proceso" (small text) and "Claridad en cada etapa." (main text) centered within the "Proceso" section.
- **FR-008**: System MUST make the centered text in the "Proceso" section sticky, maintaining its position while the user scrolls through the section.
- **FR-009**: System MUST display four distinct process steps (01 to 04) with their respective titles and descriptions.
- **FR-010**: System MUST implement an "elevator effect" (parallax or scrolling translation) for the process steps relative to the sticky centered text during scroll.
- **FR-011**: System MUST smoothly scroll the user down to the contact section on the page when the "Hablemos" element is clicked.

### Edge Cases

- What happens on mobile devices where centering links and having elements on the extreme left might overlap or break the layout?
- How does the "elevator effect" behave on touch devices or screens with small heights where sticky text and scrolling content might overlap excessively?

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: Users can successfully identify and click the "Hablemos" CTA.
- **SC-002**: The "Proceso" section renders smoothly at 60fps during scroll on modern devices.
- **SC-003**: The Navbar and "Proceso" section display correctly across standard desktop, tablet, and mobile viewport sizes without horizontal scrolling or text overflow.

## Assumptions

- The project uses Astro, so changes will be made to Astro components (`Header.astro`, `Layout.astro`, etc.) and CSS/Tailwind/GSAP depending on the styling/animation stack.
- The "elevator effect" refers to a common scroll-driven animation pattern (like GSAP ScrollTrigger or CSS sticky positioning with intersection observers) where content scrolls past a fixed element.
- The layout adjustments for mobile devices will follow standard responsive web design practices (e.g., hamburger menu for links if space is tight).

