# Phase 1: Data Model

## Navbar Links
- `NavItem`: Interface
  - `label`: string (e.g. "Proceso", removed "Contacto")
  - `href`: string (e.g. "#proceso")

## Process Section
- `ProcessStep`: Interface
  - `n`: string (e.g. "01")
  - `title`: string
  - `desc`: string

Both configured in `src/data/landing.ts`.
