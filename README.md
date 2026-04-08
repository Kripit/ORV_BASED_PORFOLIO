# ORV Based Portfolio

A personal portfolio project built for fun, inspired by Omniscient Reader's Viewpoint (ORV).

It combines a cinematic anime-style visual direction with a practical developer portfolio structure.

## What this project includes

- ORV-inspired UI theme and typography
- Anime-style live wallpaper atmosphere
- Floating Dokkaebii chatbot
- Particle background effects
- Multi-page layout: Home, About, Projects, Resume
- Responsive design across desktop and mobile

## Stack

- React
- Vite
- Tailwind CSS
- React Router
- Framer Motion

## Run locally

```bash
npm install
npm run dev
```

Production build:

```bash
npm run build
```

## Environment variable

Create a `.env` file in the project root:

```dotenv
VITE_ANTHROPIC_API_KEY=your_key_here
```

## Main content file

Update profile data here:

- `src/data/portfolio.js`

This controls name, bio, skills, projects, experience, education, and links.

## Deployment

Deploy the `dist` output to any static host (Vercel, Netlify, etc.).

If you want chatbot support in production, set `VITE_ANTHROPIC_API_KEY` in your hosting environment variables.
