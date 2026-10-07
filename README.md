# Anas.dev — Engineering Portfolio

A production-minded React + TypeScript portfolio for **Muhammad Anas Jawed**, combining full-stack development and software quality engineering experience.

## What is included

- Responsive, mobile-first UI
- Dark / light theme with persistence
- Scroll progress + active-section navigation
- Mobile navigation drawer
- Keyboard command palette (`Ctrl/Cmd + K`)
- Project filtering and case-study modal views
- QA / quality-engineering showcase
- Animated statistics and section reveals
- Accessible form labels, validation, character count and honeypot field
- Supabase-backed contact form with email fallback
- SEO metadata, canonical URL, Open Graph metadata and JSON-LD profile data
- `robots.txt`, sitemap and favicon
- Reduced-motion accessibility support
- GitHub / LinkedIn contact CTAs
- Vite build configured with relative assets for GitHub Pages and Vercel compatibility

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Supabase contact form

1. Create a Supabase project.
2. Run `supabase.sql` in the Supabase SQL Editor.
3. Copy `.env.example` to `.env`.
4. Add your Supabase project URL and publishable/anon key.
5. Restart the dev server.

If Supabase variables are missing, the contact form falls back to the visitor's mail app.

### Security note

The browser-side Supabase key is a publishable/anon key and is intended for client use. Keep service-role keys and other private credentials out of the frontend. Never commit `.env`.

## Deploy

### Vercel

- Import the GitHub repository.
- Build command: `npm run build`
- Output directory: `dist`
- Add `VITE_SUPABASE_URL` and `VITE_SUPABASE_PUBLISHABLE_KEY` as environment variables if using the contact backend.

### GitHub Pages

The project already includes the `gh-pages` package and deployment script:

```bash
npm run deploy
```

The Vite build uses relative assets so the project can live under `/portfolio/`.

## Dynamic upgrade (v3)

- Boot / loading screen (`Build Passed`) once per session
- Hero test-runner card with live passing tests
- Animated skill bars with Development / Quality Engineering tabs (edit levels in `src/data.ts` → `SKILL_BARS`)
- Tech tags on experience, project counts on filters
- Fixed: project modal closed when clicking inside it
