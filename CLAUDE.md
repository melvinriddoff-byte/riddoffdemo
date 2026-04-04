# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
npm run dev          # Start dev server at localhost:8080
npm run build        # Production build
npm run build:dev    # Dev build with source maps
npm run lint         # ESLint

# Testing
npm run test         # Run unit tests once (Vitest)
npm run test:watch   # Watch mode
# Run a single test file:
npx vitest run src/path/to/file.test.ts
```

## Architecture

**Rabos Riddoff Spark** is a React 18 + TypeScript corporate website/SaaS marketing app for "Riddoff" — an enterprise automation platform.

### Routing & Layout

All routes are defined in [src/App.tsx](src/App.tsx). Every page is wrapped by `<Layout>` ([src/components/Layout.tsx](src/components/Layout.tsx)), which provides the fixed navbar and footer. Page transitions use Framer Motion (fade + slide animations applied in Layout).

### Pages

Eight pages under [src/pages/](src/pages/): `Index`, `Products`, `RiddoffERP`, `Solutions`, `Infrastructure`, `Company`, `Contact`, `NotFound`. Routes follow `/products/riddoff-erp` nesting for product detail pages.

### Component Library

UI primitives live in [src/components/ui/](src/components/ui/) — these are **shadcn/ui** components (Radix UI based). Do not manually edit these files; use `npx shadcn@latest add <component>` to add new ones. Custom components (`Layout`, `DashboardSlider`, `NavLink`) are in [src/components/](src/components/).

### Styling

- Tailwind CSS with CSS variable-based theming (colors, sidebar tokens defined in [src/index.css](src/index.css))
- Custom fonts: `Syne` (display/headings), `Space Grotesk` (body)
- Dark mode via `class` strategy — use `next-themes` `ThemeProvider`
- Path alias `@/*` maps to `src/*`

### Testing

- **Unit/component**: Vitest + jsdom + Testing Library. Test files match `src/**/*.{test,spec}.{ts,tsx}`. Setup at [src/test/setup.ts](src/test/setup.ts).
- **E2E**: Playwright configured in [playwright.config.ts](playwright.config.ts) with a Lovable fixture in [playwright-fixture.ts](playwright-fixture.ts).

### Key Dependencies

| Purpose | Library |
|---|---|
| Routing | React Router v6 |
| Server state | TanStack Query v5 |
| Forms | React Hook Form + Zod |
| Animations | Framer Motion |
| Charts | Recharts |
| Icons | Lucide React |
| Notifications | Sonner |
