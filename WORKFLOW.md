# Riddoff Technologies — Website Workflow & Content Map

## 🔄 File Flow Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           layout.tsx                                     │
│   ┌─────────────────────────────────────────────────────────────────┐   │
│   │  <Header />                                                      │   │
│   │  ┌─────────────────────────────────────────────────────────────┐│   │
│   │  │  Riddoff (logo)          Products | Platforms | Industries ││   │
│   │  │                          Company | Connect                  ││   │
│   │  └─────────────────────────────────────────────────────────────┘│   │
│   │                                                                  │   │
│   │  <main> {children} </main>  ← Page content loads here           │   │
│   │                                                                  │   │
│   │  <Footer />                                                      │   │
│   │  ┌─────────────────────────────────────────────────────────────┐│   │
│   │  │  Products | Platforms | Company | Industries                ││   │
│   │  │  © Riddoff Technologies                                     ││   │
│   │  └─────────────────────────────────────────────────────────────┘│   │
│   └─────────────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📍 Site Navigation Map

```
                                    ┌──────────────┐
                                    │   HOME (/)   │
                                    └──────┬───────┘
                                           │
           ┌───────────────┬───────────────┼───────────────┬───────────────┐
           │               │               │               │               │
           ▼               ▼               ▼               ▼               ▼
    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐    ┌──────────┐
    │ Products │    │Platforms │    │Industries│    │ Company  │    │ Connect  │
    └────┬─────┘    └────┬─────┘    └────┬─────┘    └────┬─────┘    └──────────┘
         │               │               │               │
    ┌────┴────┐     ┌────┴────┐     ┌────┴────┐     ┌────┴─────────────┐
    │         │     │         │     │         │     │                  │
    ▼         ▼     ▼         ▼     ▼         ▼     ▼                  ▼
┌────────┐ ┌────┐ ┌────────┐ ┌────┐ ┌────────┐ ┌────┐ ┌─────┐ ┌──────────┐ ┌───────┐
│ERP     │ │... │ │Automat.│ │... │ │Logist. │ │... │ │About│ │Philosophy│ │ RABOS │
│FleetX  │      │AI Syst. │      │Fintech │      │     │ │Leadership│ └───────┘
│GRYNDUP │      │Analyt. │      │Fitness │      └─────┘ └──────────┘
│Enterp. │      │Infra.  │      │Hospit. │                     ↑
└────────┘      └────────┘      └────────┘          (deep link from Philosophy)
```

### RABOS Placement Strategy

> **RABOS is discoverable, not visible.**
> Investors find it. Customers don't see it promoted.

**Primary access:** `/company/rabos` — linked from Philosophy page (inline contextual reference)
**Secondary access:** Footer (subtle, same weight as other links)
**NOT placed:** Top navigation, homepage, Products/Platforms menus

---

## 📄 PAGE-BY-PAGE CONTENT BREAKDOWN

---

### 🏠 HOME PAGE (`/`)
**File:** `src/app/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│                                                                 │
│                    Riddoff Technologies                         │  ← H1 (display size)
│                                                                 │
│     Building operational software and intelligent systems       │  ← Subline (title size)
│              for modern businesses.                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                        ─────────                                │  ← Divider
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Products →              Platforms →                            │
│  Operational platforms   The systems that power                 │
│  designed to handle      automation, intelligence,              │
│  real-world complexity.  and scale.                             │
│                                                                 │
│  Industries →            Company →                              │
│  Where our software      Why Riddoff exists and                 │
│  runs businesses, not    how we think about                     │
│  just interfaces.        building technology.                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                        ─────────                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│              We don't build for demos.                          │  ← Philosophy (large text)
│              We build for operations.                           │
│                                                                 │
│     Our work lives behind businesses — not in marketing decks.  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                        ─────────                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Designed for scale. Built for complexity.                     │  ← Scale signal (center)
│   Deployed across industries.                                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 📦 PRODUCTS INDEX (`/products`)
**File:** `src/app/products/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Products                                                       │  ← H1 (headline)
│  Operational platforms designed to handle real-world complexity.│  ← Subline
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  01  Riddoff ERP →                                              │
│      Enterprise resource planning built for operational clarity.│
│      A modular ERP system designed for businesses that need...  │
│                                                                 │
│  02  FleetX →                                                   │
│      Fleet management for modern logistics.                     │
│      Real-time tracking, route optimization, driver management..│
│                                                                 │
│  03  GRYNDUP →                                                  │
│      Fitness technology that powers gyms and trainers.          │
│      Membership management, scheduling, payments...             │
│                                                                 │
│  04  Enterprise Systems →                                       │
│      Custom platforms for complex operations.                   │
│      Purpose-built software for organizations with unique...    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 📦 PRODUCT DETAIL (`/products/[product]`)
**File:** `src/app/products/[product]/page.tsx`

**Dynamic routes:** `riddoff-erp`, `fleetx`, `gryndup`, `enterprise-systems`

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Products                                                     │  ← Back link
│                                                                 │
│  {Product Name}                                                 │  ← H1 (headline)
│  {Product Tagline}                                              │  ← Subline
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  {Full Description paragraph}                                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Capabilities              Built For                            │
│  • Feature 1               • Audience 1                         │
│  • Feature 2               • Audience 2                         │
│  • Feature 3               • Audience 3                         │
│  ...                       ...                                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Modules (if ERP)                                               │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐                   │
│  │ Inventory  │ │ Financial  │ │Procurement │                   │
│  └────────────┘ └────────────┘ └────────────┘                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│        Ready to discuss {Product}? Start a conversation →       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ⚙️ PLATFORMS INDEX (`/platforms`)
**File:** `src/app/platforms/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Platforms                                                      │  ← H1
│  The systems that power automation, intelligence, and scale.    │  ← Subline
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  01  Automation →                                               │
│      Workflow orchestration and process automation.             │
│                                                                 │
│  02  AI Systems →                                               │
│      Intelligent decision engines and AI integration.           │
│                                                                 │
│  03  Analytics →                                                │
│      Data infrastructure and business intelligence.             │
│                                                                 │
│  04  Infrastructure →                                           │
│      Scalable cloud and application infrastructure.             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ⚙️ PLATFORM DETAIL (`/platforms/[platform]`)
**File:** `src/app/platforms/[platform]/page.tsx`

**Dynamic routes:** `automation`, `ai-systems`, `analytics`, `infrastructure`

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Platforms                                                    │
│                                                                 │
│  {Platform Name}                                                │  ← H1
│  {Platform Tagline}                                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  {Full Description}                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Capabilities        Technologies        Use Cases              │
│  • Item 1            • Tech 1            • Case 1               │
│  • Item 2            • Tech 2            • Case 2               │
│  ...                 ...                 ...                    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│        Interested in {platform}? Start a conversation →         │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🏭 INDUSTRIES INDEX (`/industries`)
**File:** `src/app/industries/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Industries                                                     │  ← H1
│  Where our software runs businesses, not just interfaces.       │  ← Subline
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────┐    ┌─────────────────────┐             │
│  │ Logistics →         │    │ Fintech →           │             │
│  │ Fleet, delivery,    │    │ Payments, trans-    │             │
│  │ supply chain ops.   │    │ actions, financial  │             │
│  └─────────────────────┘    └─────────────────────┘             │
│                                                                 │
│  ┌─────────────────────┐    ┌─────────────────────┐             │
│  │ Fitness →           │    │ Hospitality →       │             │
│  │ Gyms, studios,      │    │ Hotels, restaurants,│             │
│  │ wellness businesses │    │ service operations  │             │
│  └─────────────────────┘    └─────────────────────┘             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🏭 INDUSTRY DETAIL (`/industries/[industry]`)
**File:** `src/app/industries/[industry]/page.tsx`

**Dynamic routes:** `logistics`, `fintech`, `fitness`, `hospitality`

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Industries                                                   │
│                                                                 │
│  {Industry Name}                                                │  ← H1
│  {Industry Tagline}                                             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  {Full Description}                                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Challenges                 How We Solve Them                   │
│  • Challenge 1              • Solution 1                        │
│  • Challenge 2              • Solution 2                        │
│  ...                        ...                                 │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│  Relevant Products & Platforms                                  │
│  ┌────────┐ ┌────────────┐ ┌───────────┐                        │
│  │FleetX  │ │ Automation │ │ Analytics │                        │
│  └────────┘ └────────────┘ └───────────┘                        │
├─────────────────────────────────────────────────────────────────┤
│        Building in {industry}? Start a conversation →           │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🏢 COMPANY INDEX (`/company`)
**File:** `src/app/company/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Company                                                        │  ← H1
│  Why Riddoff exists and how we think about building technology. │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  About Riddoff →                                                │
│  Who we are and what we do.                                     │
│                                                                 │
│  Philosophy →                                                   │
│  How we think about building software.                          │
│                                                                 │
│  Leadership →                                                   │
│  The team behind Riddoff.                                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  "We build systems that run businesses."                        │  ← Quote
│                                                                 │
│  Not interfaces for presentations. Not demos for pitches.       │
│  Real software that teams rely on every day.                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🏢 ABOUT (`/company/about`)
**File:** `src/app/company/about/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Company                                                      │
│                                                                 │
│  About Riddoff                                                  │  ← H1
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Riddoff Technologies builds operational software for           │
│  businesses that have outgrown simple tools but don't want      │
│  the complexity of enterprise systems.                          │
│                                                                 │
│  We started because we saw too many companies struggling...     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  What We Do                                                     │  ← H2
│                                                                 │
│  Build Products       Design Platforms                          │
│  ...                  ...                                       │
│                                                                 │
│  Solve Hard Problems  Think Long-Term                           │
│  ...                  ...                                       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Founded by Engineers                                           │  ← H2
│  Riddoff was founded by engineers who spent years building...   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                    Start a conversation →                       │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🏢 PHILOSOPHY (`/company/philosophy`)
**File:** `src/app/company/philosophy/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Company                                                      │
│                                                                 │
│  How We Build                                                   │  ← H1
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Riddoff exists to solve operational problems                   │
│  with software that lasts.                                      │  ← Lead statement
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Principles                                                     │  ← H2
│                                                                 │
│  01  Operations over aesthetics                                 │
│      We optimize for how software works, not how it screenshots.│
│                                                                 │
│  02  Systems thinking                                           │
│      Every feature exists within a larger system...             │
│                                                                 │
│  03  Simplicity at scale                                        │
│      Complex problems don't require complex solutions...        │
│                                                                 │
│  04  Maintainability is a feature                               │
│      We write code that future developers will understand...    │
│                                                                 │
│  05  Measure what matters                                       │
│      We instrument systems to understand their behavior...      │
│                                                                 │
│  06  Long-term partnerships                                     │
│      We build for the long term...                              │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  "We don't ship features. We ship systems that                  │
│   make businesses work better."                                 │  ← Closing quote
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🏢 LEADERSHIP (`/company/leadership`)
**File:** `src/app/company/leadership/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Company                                                      │
│                                                                 │
│  Leadership                                                     │  ← H1
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Founded by engineers. Built for operators.                     │  ← Lead
│                                                                 │
│  Riddoff is led by technologists who have spent their           │
│  careers building systems for complex businesses...             │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  How We Lead                                                    │  ← H2
│                                                                 │
│  Technical depth     Operational focus    Long-term thinking    │
│  ...                 ...                  ...                   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                    Start a conversation →                       │
└─────────────────────────────────────────────────────────────────┘
```

---

### 🔒 RABOS (`/company/rabos`)
**File:** `src/app/company/rabos/page.tsx`

> **Investor-facing deep page.** Discoverable, not visible.
> Linked from: Philosophy (inline), Footer (subtle)

```
┌─────────────────────────────────────────────────────────────────┐
│  ← Company                                                      │
│                                                                 │
│  RABOS                                                          │  ← H1
│  Reasoning & Automation Backbone for Operational Systems        │  ← Subline
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  What RABOS Is                                                  │  ← H2
│  RABOS is Riddoff's internal reasoning and automation backbone. │
│  It governs how workflows are orchestrated, how decisions       │
│  are made, and how operational software adapts over time...     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Why RABOS Exists                                               │  ← H2
│  Most operational software struggles at scale because:          │
│  • business rules are hardcoded                                 │
│  • automation becomes brittle                                   │
│  • intelligence is added late, not designed in                  │
│  • systems behave inconsistently across products                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  What RABOS Does                                                │  ← H2
│  Orchestrate workflows • Apply decision logic • React in        │
│  real time • Coordinate automation • Improve through feedback   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  How RABOS Fits Into Riddoff                                    │  ← H2
│  RABOS operates as a company-level backbone...                  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐    │
│  │          Industries & Operational Context               │    │
│  ├─────────────────────────────────────────────────────────┤    │
│  │  Products (ERP, FleetX, GRYNDUP, Enterprise Systems)    │    │
│  ├─────────────────────────────────────────────────────────┤    │
│  │  Platforms (Automation, AI Systems, Analytics, Infra)   │    │
│  ├─────────────────────────────────────────────────────────┤    │
│  │  ████ RABOS — Reasoning & Automation Backbone ████      │    │  ← Highlighted
│  ├─────────────────────────────────────────────────────────┤    │
│  │          Core Infrastructure & Services                 │    │
│  └─────────────────────────────────────────────────────────┘    │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  What RABOS Is Not                                              │  ← H2
│  • Not a customer-facing automation tool                        │
│  • Not a workflow builder UI                                    │
│  • Not a chatbot or single AI model                             │
│  • Not a standalone SaaS product                                │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Strategic Importance                                           │  ← H2
│  Consistency • Scalability • Adaptability • Defensibility       │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  RABOS in Practice                                              │  ← H2
│  Operational orchestration • Intelligent workflows              │
│  Data-informed decisions • Cross-system coordination            │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Long-Term Vision                                               │  ← H2
│  Launch faster • Maintain clarity • Integrate intelligence      │
│  Evolve platforms without fragmenting logic                     │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  "We don't ship features in isolation.                          │
│   We design systems that reason, automate, and improve          │
│   as they operate."                                             │  ← Closing quote
│                                                                 │
│  RABOS exists to make that possible.                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### 📡 CONNECT (`/connect`)
**File:** `src/app/connect/page.tsx`

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Start a conversation                                           │  ← H1
│  Tell us what you're building. We'll tell you how we can help.  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Name                          Email                            │
│  ┌─────────────────────┐       ┌─────────────────────┐          │
│  │                     │       │                     │          │
│  └─────────────────────┘       └─────────────────────┘          │
│                                                                 │
│  Company                                                        │
│  ┌───────────────────────────────────────────────────┐          │
│  │                                                   │          │
│  └───────────────────────────────────────────────────┘          │
│                                                                 │
│  What are you building?                                         │
│  ┌───────────────────────────────────────────────────┐          │
│  │                                                   │          │
│  │                                                   │          │
│  │                                                   │          │
│  └───────────────────────────────────────────────────┘          │
│                                                                 │
│  Industry                                                       │
│  ┌───────────────────────────────────────────────────┐          │
│  │ Select an industry                              ▼ │          │
│  └───────────────────────────────────────────────────┘          │
│                                                                 │
│  Scale                         Timeline                         │
│  ┌─────────────────────┐       ┌─────────────────────┐          │
│  │ Select company size │       │ Select timeline    ▼│          │
│  └─────────────────────┘       └─────────────────────┘          │
│                                                                 │
│  ┌──────────────┐                                               │
│  │ Send message │                                               │
│  └──────────────┘                                               │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│       Prefer email? Reach us at hello@riddoff.com               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🧩 COMPONENT USAGE MAP

| Component | Used In | Purpose |
|-----------|---------|---------|
| `Header` | `layout.tsx` | Global navigation, persistent |
| `Footer` | `layout.tsx` | Site-wide footer links |
| `DirectionGrid` | `page.tsx` (home) | 4-column gateway navigation |
| `Section` | All pages | Animated section wrapper with padding |
| `TextBlock` | Home, Company pages | Animated text content |
| `Divider` | All pages | Visual section separator |
| `PageTransition` | Available for use | Page entry/exit animations |

---

## 📝 EXACT HEADINGS REFERENCE

### H1 Headings (Main Page Titles)
| Page | H1 Text |
|------|---------|
| Home | `Riddoff Technologies` |
| Products | `Products` |
| Product Detail | `{Product Name}` (e.g., "Riddoff ERP") |
| Platforms | `Platforms` |
| Platform Detail | `{Platform Name}` (e.g., "Automation") |
| Industries | `Industries` |
| Industry Detail | `{Industry Name}` (e.g., "Logistics") |
| Company | `Company` |
| About | `About Riddoff` |
| Philosophy | `How We Build` |
| Leadership | `Leadership` || RABOS | `RABOS` || Connect | `Start a conversation` |

### Sublines (Below H1)
| Page | Subline |
|------|---------|
| Home | `Building operational software and intelligent systems for modern businesses.` |
| Products | `Operational platforms designed to handle real-world complexity.` |
| Platforms | `The systems that power automation, intelligence, and scale.` |
| Industries | `Where our software runs businesses, not just interfaces.` |
| Company | `Why Riddoff exists and how we think about building technology.` || RABOS | `Reasoning & Automation Backbone for Operational Systems` || Connect | `Tell us what you're building. We'll tell you how we can help.` |

---

## 🎨 TYPOGRAPHY SCALE

| Class | Size | Usage |
|-------|------|-------|
| `text-display` | 4rem | Home hero H1 only |
| `text-headline` | 2.5rem | Page H1 titles |
| `text-title` | 1.5rem | Section headings, sublines |
| `text-body` | 1rem | Body text, descriptions |
| `text-small` | 0.875rem | Navigation, labels, back links |

---

## 📊 DIAGRAM SYSTEM

### Architecture Overview

```
src/
├── components/
│   └── diagram/
│       ├── types.ts          # DiagramType enum, interfaces
│       ├── Block.tsx         # Core primitive - labeled box
│       ├── Arrow.tsx         # SVG directional arrows
│       ├── Flow.tsx          # Horizontal/vertical step flow
│       ├── LayerStack.tsx    # Vertical architecture layers
│       ├── DecisionLoop.tsx  # Inputs → Engine → Outputs
│       ├── SystemBlocks.tsx  # Core + modules grid
│       ├── Mapping.tsx       # Workflow with integration points
│       ├── DiagramRenderer.tsx # Dynamic renderer by config type
│       └── index.ts          # Exports
│
└── content/
    └── diagrams/
        ├── products.ts       # Configs for ERP, FleetX, GRYNDUP, Enterprise
        ├── platforms.ts      # Configs for Automation, AI, Analytics, Infra
        ├── industries.ts     # Configs for Logistics, Fintech, Fitness, Hospitality
        └── company.ts        # Config for RABOS architecture diagram
```

### Diagram Types

| Type | Description | Layout |
|------|-------------|--------|
| `flow` | Step-by-step progression | `[Step 1] → [Step 2] → [Step 3]` |
| `layer_stack` | Vertical architecture | Stacked rows top-to-bottom |
| `decision_loop` | AI/decision flow | `Inputs → Engine → Outputs` |
| `system_blocks` | Modular system | Core block + grid of modules |
| `mapping` | Industry workflow | Sequential steps with integration labels |

### Diagram Assignments

**Products:**
- `riddoff-erp` → `system_blocks` (Core ERP + 6 modules)
- `fleetx` → `flow` (Track → Plan → Dispatch → Report)
- `gryndup` → `flow` (Members → Classes → Trainers → Payments)
- `enterprise-systems` → `layer_stack` (Data → Logic → Integration → Interface)

**Platforms:**
- `automation` → `flow` (Trigger → Rules → Execute → Log)
- `ai-systems` → `decision_loop` (Inputs → AI Engine → Outputs)
- `analytics` → `flow` (Ingest → Transform → Analyze → Visualize)
- `infrastructure` → `layer_stack` (Network → Compute → Storage → Monitoring)

**Industries:**
- `logistics` → `mapping` (Order → Assign → Move → Deliver)
- `fintech` → `mapping` (Request → Validate → Process → Settle)
- `fitness` → `mapping` (Join → Book → Train → Renew)
- `hospitality` → `mapping` (Reserve → Confirm → Serve → Review)

**Company:**
- `rabos` → `layer_stack` (Industries → Products → Platforms → RABOS → Infrastructure)

### Component Usage

```tsx
// In page component:
import { DiagramRenderer } from '@/components/diagram';
import { productDiagrams } from '@/content/diagrams/products';

// Get config by slug
const diagram = productDiagrams['riddoff-erp'];

// Render
<DiagramRenderer config={diagram} />
```

### Visual Patterns

```
FLOW:
┌─────────┐     ┌─────────┐     ┌─────────┐     ┌─────────┐
│ Step 1  │ ──→ │ Step 2  │ ──→ │ Step 3  │ ──→ │ Step 4  │
└─────────┘     └─────────┘     └─────────┘     └─────────┘

LAYER_STACK:
┌─────────────────────────────────────────────────────────┐
│                    Interface Layer                       │
├─────────────────────────────────────────────────────────┤
│                   Integration Layer                      │
├─────────────────────────────────────────────────────────┤
│                     Logic Layer                          │
├─────────────────────────────────────────────────────────┤
│                      Data Layer                          │
└─────────────────────────────────────────────────────────┘

DECISION_LOOP:
┌───────────┐     ┌─────────────────┐     ┌────────────┐
│  Input 1  │     │                 │     │  Output 1  │
├───────────┤     │                 │     ├────────────┤
│  Input 2  │ ──→ │   AI Engine     │ ──→ │  Output 2  │
├───────────┤     │                 │     ├────────────┤
│  Input 3  │     │                 │     │  Output 3  │
└───────────┘     └─────────────────┘     └────────────┘

SYSTEM_BLOCKS:
                    ┌─────────────────┐
                    │    Core ERP     │
                    └─────────────────┘
    ┌────────────┐  ┌────────────┐  ┌────────────┐
    │ Module 1   │  │ Module 2   │  │ Module 3   │
    └────────────┘  └────────────┘  └────────────┘
    ┌────────────┐  ┌────────────┐  ┌────────────┐
    │ Module 4   │  │ Module 5   │  │ Module 6   │
    └────────────┘  └────────────┘  └────────────┘

MAPPING:
┌───────────┐     ┌───────────┐     ┌───────────┐     ┌───────────┐
│  Step 1   │ ──→ │  Step 2   │ ──→ │  Step 3   │ ──→ │  Step 4   │
└───────────┘     └───────────┘     └───────────┘     └───────────┘
     ↓                 ↓                 ↓                 ↓
 [System A]        [System B]        [System C]        [System D]
```

### Design Principles

1. **No static images** — All diagrams are code-driven React components
2. **Responsive** — Stacks vertically on mobile, horizontal on desktop
3. **Themeable** — Uses Tailwind design tokens (accent, border, background)
4. **Animated** — Subtle fade-in via Framer Motion
5. **Accessible** — Semantic HTML, readable without styles
