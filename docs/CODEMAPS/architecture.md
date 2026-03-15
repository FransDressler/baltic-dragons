<!-- Generated: 2026-03-15 | Files scanned: 18 | Token estimate: ~400 -->
# Architecture

## Overview
Single Next.js 16 app (App Router, SSR/SSG) — landing site for Baltic Dragons dragon boat team.
No backend API, no database. Static content with client-side interactivity.

## Data Flow
```
Browser → Next.js App Router → Static Pages (SSG)
                              → Client Components (useState)
Contact Form → Formspree API (external)
```

## Route Map
```
/                → app/page.tsx          (Home: Hero + Mission + Achievements + News)
/news            → app/news/page.tsx     (News listing)
/news/[slug]     → app/news/*/page.tsx   (Article detail, 2 articles)
/team            → app/team/page.tsx     (Club affiliations)
/impressum       → app/impressum/page.tsx(Legal/contact)
```

## Key Decisions
- No CMS — content hardcoded in components
- No API routes — form handled by Formspree
- No global state — local useState only
- Framer Motion for animations, Tailwind for styling
- German locale (de_DE), SEO metadata configured
