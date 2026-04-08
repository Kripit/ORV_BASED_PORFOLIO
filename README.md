# Krishna Mishra Portfolio

Professional portfolio website built with React and Vite, with an ORV-inspired visual direction.

## Overview

This project presents profile, experience, projects, and resume content in a single-page application with routed sections.

Core sections:
- Home
- About
- Projects
- Resume

Additional UI elements:
- Floating chatbot panel (Anthropic API integration)
- Global "Secretive Plotter is watching" status badge
- ORV-inspired animated background and typography treatments

## Tech Stack

- React 18
- Vite 5
- Tailwind CSS 3
- React Router 6
- Framer Motion
- Axios

## Project Structure

```text
orv-portfolio/
  index.html
  package.json
  vite.config.js
  tailwind.config.js
  src/
    App.jsx
    main.jsx
    index.css
    components/
      Navigation.jsx
      ParticleBackground.jsx
      DokkaebiiChatbot.jsx
    pages/
      Landing.jsx
      About.jsx
      Projects.jsx
      Resume.jsx
    data/
      portfolio.js
    utils/
      konami.js
  public/
    assets/
```

## Local Development

Prerequisite:
- Node.js LTS

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the project root:

```dotenv
VITE_ANTHROPIC_API_KEY=your_anthropic_api_key
```

Notes:
- `.env` is ignored via `.gitignore`
- Restart the dev server after changing environment variables

## Content Updates

Most profile and project content is managed in:

- `src/data/portfolio.js`

This includes name, bio, skills, projects, experience, education, and links.

## Deployment

Deploy to any static hosting provider that supports Vite output (for example Vercel or Netlify).

Production output directory:

- `dist/`

If chatbot functionality is required in production, configure `VITE_ANTHROPIC_API_KEY` in the hosting platform environment settings.

## License

This repository currently has no license specified.

---

## 🔄 Next Steps

1. ✅ Run `npm install` → `npm run dev`
2. ✅ Get Claude API key from console.anthropic.com
3. ✅ Create `.env` file with key
4. ✅ Test chatbot by clicking 🐉 button
5. ✅ Edit `src/data/portfolio.js` to customize
6. ✅ Deploy to Vercel
7. ✅ Share with 🌍

---

## 💡 Pro Tips

- **Live reload**: Changes to code auto-refresh (hot module replacement)
- **Component reuse**: Create more components in `src/components/` folder
- **Dark mode**: Already built in! Color scheme is your dark mode
- **SEO**: Edit `<title>` in `index.html`, add meta tags
- **Analytics**: Add Google Analytics to `index.html` (optional)

---

## 🎯 Your Data is Ready!

Your resume PDF was parsed and loaded into `src/data/portfolio.js`:
- ✅ Name, tagline, bio
- ✅ All skills organized by category
- ✅ Experience (Ace Payment Solutions, T-Hub)
- ✅ Education (KL University)
- ✅ 6+ Projects with stars & descriptions
- ✅ Achievements & hackathons
- ✅ All contact links

**Everything auto-updates** - just edit the portal data file!

---

## 🎨 Your Reference Images

You have these designs saved:
- ✅ ORV wallpapers (used for inspiration)
- ✅ WhatsApp images (that skewed tab design - implemented!)
- ✅ Character images (suggested using 🧙 emoji for now)

To add custom images:
1. Place images in a new `src/assets/` folder
2. Import: `import myImg from '../assets/image.jpg'`
3. Use: `<img src={myImg} alt="desc" />`

---

## 🎭 Character Details

Your Portfolio Character:
- **Name**: Krishna Mishra
- **Class**: Frontend Sorcerer
- **Sponsoring Constellations**: 6 watching
- **Experience**: 2+ years AI/ML
- **Special Ability**: Built Gemma3 LLM from scratch

---

## 📞 Support

Error? Issue? Have questions?
- Check error message in browser console (F12 → Console tab)
- Make sure all dependencies installed: `npm install`
- Restart dev server: Stop with Ctrl+C, run `npm run dev` again

---

## 🚀 Launch Checklist

- [ ] Node.js installed
- [ ] `npm install` completed
- [ ] `.env` file created with API key
- [ ] `npm run dev` works locally
- [ ] All pages visible & beautiful
- [ ] Chatbot responds to messages
- [ ] Konami code works (↑↑↓↓←→←→BA)
- [ ] Ready to deploy to Vercel
- [ ] Shared with friends/recruiters

---

## 💪 You're All Set!

Your epic ORV portfolio is complete. It's a work of art, a showpiece, and a fully functional portfolio all in one.

**Now go show the world what a Frontend Sorcerer can do!**

---

**Last Updated**: April 2026
**Status**: Production Ready
**Constellations Watching**: ∞
