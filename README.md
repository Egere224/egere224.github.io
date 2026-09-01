# Egere Ofejiro — Portfolio Website

Personal portfolio built with Next.js to showcase my work as a full-stack developer, including live projects, services offered, professional experience, and contact information.

**Live site:** [egereofejiro.github.io](https://egereofejiro.github.io) <!-- update if deployed elsewhere -->

## Overview

This portfolio presents my background as a frontend and full-stack developer based in Lagos, Nigeria, along with the services I offer (web development, WordPress development, and CAC business registration assistance).

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Inter (body), Space Grotesk (headings)
- **Icons:** lucide-react
- **Deployment:** Vercel / Netlify <!-- update to match actual deploy target -->

## Design System

- **Background:** `#FDFBF0` (cream)
- **Surface:** `#F3EFDC` (deeper cream, cards/panels)
- **Foreground:** `#1F2417` (near-black, olive undertone)
- **Muted text:** `#5C6650`
- **Accent:** `#556B2F` (dark olive)
- **Accent hover:** `#6B8236`

Colors are defined as CSS variables in `app/globals.css` and referenced throughout via `var(--background)`, `var(--accent)`, etc., so the palette can be updated in one place.

## Pages

| Route         | Description                                                          |
| ------------- | -------------------------------------------------------------------- |
| `/`           | Home — hero introduction, stats, featured projects, call to action   |
| `/about`      | About — background, education, strengths, technology toolkit         |
| `/projects`   | Projects — full list of projects with live/status badges and links   |
| `/services`   | Services — web development offerings and CAC registration assistance |
| `/experience` | Experience — professional work history and internships               |
| `/contact`    | Contact — WhatsApp, email, and GitHub contact options                |

## Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── globals.css         # Design tokens and base styles
│   ├── page.tsx             # Home page
│   ├── about/page.tsx
│   ├── projects/page.tsx
│   ├── services/page.tsx
│   ├── experience/page.tsx
│   └── contact/page.tsx
├── components/
│   ├── Navbar.tsx           # Floating pill navigation
│   └── Footer.tsx
└── public/
    ├── portfolioPhoto.jpeg
    └── ...project screenshots
```

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)

### Installation

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for production

```bash
npm run build
npm start
```

## Featured Projects

- **[H.emi Fragrance — Scent Consultation Platform](https://h-emi-scent-profile-questionnaire.vercel.app/)** — Client-facing scent consultation questionnaire with protected admin dashboard. Next.js, TypeScript, PostgreSQL, Tailwind CSS.
- **URL Shortener & Analytics Platform** — Full-stack link shortener with auth, session management, and click analytics. React, TypeScript, Express, PostgreSQL, Zod.
- **Vault — Personal Finance Tracker** — Bank-account-styled expense tracker with authentication and automatic balance tracking via database triggers. React, TypeScript, Node.js, Express, PostgreSQL.
- **BizManager — Multi-Tenant Business SaaS** — SaaS platform for inventory, customers, sales, and subscription management. React, TypeScript, Node.js, PostgreSQL, Express.

See the [Projects page](/projects) for the complete list.

## Contact

- **Email:** egereofejiro10@gmail.com
- **WhatsApp:** [+234 907 932 4580](https://wa.me/2349079324580)
- **GitHub:** [github.com/egere224](https://github.com/egere224)

## License

This project is for personal portfolio use.
