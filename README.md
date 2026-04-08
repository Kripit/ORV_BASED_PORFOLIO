# ORV Based Portfolio

This is my personal portfolio project, built with an ORV-inspired visual style.

I wanted it to feel cinematic and fun, but still usable as a real portfolio. The final version keeps that balance: strong theme, clean layout, and practical structure.

## What I built

- ORV-inspired design language with dark neon visuals
- Anime-style live wallpaper atmosphere and particle effects
- Floating Dokkaebii chatbot
- Multi-page structure: Home, About, Projects, Resume
- Responsive UI for desktop and mobile

## Tech used

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion

## Problems I faced

- Hero section became too crowded and looked more like a gallery than a landing page
- Text hierarchy was inconsistent between sections
- Chatbot key handling needed clearer behavior between local and runtime usage
- Large media files caused repository push issues

## How I solved them

- Reworked the homepage to a cleaner composition with controlled media usage
- Standardized typography and spacing for readability
- Improved API key flow for the chatbot and environment-based setup
- Removed oversized video assets from git tracking to satisfy GitHub limits

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Environment setup

Create a `.env` file in the project root:

```dotenv
VITE_ANTHROPIC_API_KEY=your_key_here
```

## Where to edit content

Profile/project data lives in:

- `src/data/portfolio.js`

This file controls name, bio, skills, projects, experience, education, and links.

## Deploy

Deploy the `dist` folder to any static host (Vercel, Netlify, etc.).

If chatbot support is needed in production, set `VITE_ANTHROPIC_API_KEY` in your hosting environment variables.
