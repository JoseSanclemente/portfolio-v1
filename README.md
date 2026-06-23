# Jose Sanclemente — Portfolio

Personal portfolio website built with Next.js. Showcases work experience, projects, and background as a Frontend Developer.

[![Live Site](https://img.shields.io/badge/Live-panqueso.dev-black?logo=vercel)](https://www.panqueso.dev)
![Next.js](https://img.shields.io/badge/Next.js-16-black?logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38bdf8?logo=tailwindcss)
![next-intl](https://img.shields.io/badge/i18n-next--intl-purple)

## Features

- **Experience timeline** — work history with projects and tech stacks
- **About page** — personal narrative with fade-in animations
- **Bilingual** — English & Spanish via next-intl (auto-detected)
- **Custom cursor** & gradient animations
- **Vercel Speed Insights** integrated
- Responsive, mobile-first design

## Tech Stack

| Layer      | Tech                     |
|------------|--------------------------|
| Framework  | Next.js 16 (App Router)  |
| Language   | TypeScript 5             |
| Styling    | Tailwind CSS 3           |
| i18n       | next-intl 4              |
| Analytics  | @vercel/speed-insights   |

## Getting Started

```bash
npm install
npm run dev
# → http://localhost:3000
```

| Script        | Description              |
|---------------|--------------------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production   |
| `npm start`   | Start production server  |
| `npm run lint` | Run ESLint              |

## Project Structure

```
src/
├── app/                  # Next.js App Router pages
│   ├── experience/       # Work experience timeline
│   └── about/            # Personal about page
├── components/           # Reusable UI components
│   └── layout/           # Header, footer, tabs, social links
├── db/                   # Hardcoded experience data
├── locales/              # en.json / es.json translations
├── types/                # TypeScript type definitions
└── utils/                # Date, string, animation helpers
```

## Deployment

Deployed on [Vercel](https://vercel.com) — zero-config for Next.js.
