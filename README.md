# Riddoff Technologies Website

A minimalist technology company website built with Next.js 14+ App Router.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Font:** Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
```

### Production

```bash
npm start
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Homepage
│   ├── products/           # Products section
│   ├── platforms/          # Platforms section
│   ├── industries/         # Industries section
│   ├── company/            # Company section
│   └── connect/            # Contact page
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Site footer
│   ├── DirectionGrid.tsx   # Directional gateway grid
│   ├── Section.tsx         # Animated section wrapper
│   ├── TextBlock.tsx       # Text content block
│   ├── Divider.tsx         # Visual divider
│   └── PageTransition.tsx  # Page transition wrapper
└── globals.css             # Global styles
```

## Design System

### Colors

- Primary: `#0B0B0B` (almost black)
- Secondary: `#6B7280` (muted gray)
- Accent: `#2563EB` (blue, minimal use)
- Background: `#FFFFFF`

### Typography

- Font: Inter
- Weights: 400 (body), 500 (nav), 600 (headlines)

### Motion

- Subtle fade + translate animations
- 150-250ms duration
- No parallax or looping animations

## License

Private - Riddoff Technologies
