<!-- Generated: 2026-03-15 | Files scanned: 14 | Token estimate: ~600 -->
# Frontend Architecture

## Component Tree
```
RootLayout (app/layout.tsx)
├── Navbar (app/components/Navbar.tsx, ~120 lines)
│   └── State: scrollPercent, trackWidth, mobileOpen
├── Page Content
│   ├── Home (app/page.tsx, client component)
│   │   ├── HeroSection (app/components/Hero.tsx, ~55 lines)
│   │   │   └── Framer Motion fade/slide animations
│   │   ├── MissionSection (app/components/Mission.tsx)
│   │   ├── AchievementsSection (app/components/Achievements.tsx, ~140 lines)
│   │   │   └── State: selectedEvent (tab gallery)
│   │   └── NewsSection (app/components/News.tsx, ~80 lines)
│   ├── News Listing (app/news/page.tsx)
│   ├── News Detail (app/news/*/page.tsx)
│   │   └── State: selectedImageIndex (image gallery)
│   ├── Team (app/team/page.tsx)
│   └── Impressum (app/impressum/page.tsx)
└── Footer (app/components/Footer.tsx, ~70 lines)
    └── Formspree contact form

## Styling
- Tailwind CSS 4 with custom theme
- Color: sky-950 → sky-200 gradients + stone-100
- Custom font: BlackoutSunrise (public/fonts/)
- Custom animations: float, rotate-slow (tailwind.config.ts)
- Responsive: mobile-first with md: breakpoints

## Static Data (no DB)
- NewsItems: { title, image, description, link }
- EventData: { title, image[], locationTime, description, achievements[] }
- Teams: { name, location, description }

## Key Files
app/layout.tsx        — Root layout, metadata, SEO (de_DE)
app/fonts.ts          — Font imports (Geist Sans/Mono + BlackoutSunrise)
app/globals.css       — Global styles, @font-face
tailwind.config.ts    — Theme extensions, custom animations
```
