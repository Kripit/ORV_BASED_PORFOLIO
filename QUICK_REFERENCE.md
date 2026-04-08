# Quick Reference Guide

## Terminal Commands

```bash
# Install dependencies (run once)
npm install

# Start dev server (run to develop)
npm run dev

# Build for production
npm build

# Preview production build
npm preview
```

## File Editing

### Update Your Information
**File**: `src/data/portfolio.js`
- Change name, bio, skills
- Add/remove projects
- Update links

### Change Colors
**File**: `tailwind.config.js`
- Find `theme.extend.colors`
- Edit `cyan-glow`, `gold-accent`, `blood-red`

### Change Fonts
**File**: `src/index.css`
- Search for `@import url`
- Replace Google Fonts URLs

### Update Navigation Links
**File**: `src/components/Navigation.jsx`
- Edit the `links` array

## Common Customizations

### Add Environment Variable for Claude API
```bash
# 1. Create .env file (copy .env.example)
# 2. Add: VITE_ANTHROPIC_API_KEY=sk-ant-xxxxx
# 3. Save and restart dev server
```

### Add New Page
```bash
# 1. Create src/pages/NewPage.jsx
# 2. Add to App.jsx routes:
<Route path="/newpage" element={<NewPage />} />
# 3. Add to Navigation.jsx links array
```

### Use Images
```bash
# 1. Create src/assets/ folder
# 2. Place images there
# 3. In component: import myImg from '../assets/image.jpg'
# 4. Use: <img src={myImg} alt="description" />
```

## Browser DevTools

Press `F12` to open:
- **Console** - see error messages
- **Elements** - inspect HTML/CSS
- **Network** - check API calls

## Git Commands

```bash
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message"

# Push to GitHub
git push
```

## Deployment

### Deploy to Vercel (Fastest)
```bash
npm i -g vercel
vercel
# Follow prompts
```

### Deploy to GitHub Pages
```bash
# Update vite.config.js:
# base: '/repo-name/'

npm run build
# Push build/ folder to gh-pages branch
```

## Troubleshooting

| Issue | Solution |
|-------|----------|
| `npm: command not found` | Install Node.js from nodejs.org |
| Port 5173 in use | `npm run dev -- --port 5174` |
| Styles not showing | `npm install` → `npm run dev` |
| Chatbot not responding | Check `.env` file has API key |
| Build fails | Delete `node_modules` → `npm install` |

## File Structure Quick Reference

```
orv-portfolio/
├── src/
│   ├── components/    ← Reusable components
│   ├── pages/         ← Full pages
│   ├── data/          ← Your portfolio data
│   ├── utils/         ← Helper functions
│   ├── App.jsx        ← Main app
│   └── index.css      ← Global styles
├── public/            ← Static assets (images, videos)
├── .env               ← API key (create this)
├── package.json       ← Dependencies list
└── README.md          ← Full documentation
```

## Most Important Files to Edit

1. **src/data/portfolio.js** - Your info
2. **.env** - Claude API key
3. **src/index.css** - Global styles
4. **tailwind.config.js** - Color scheme

## Testing Locally

After `npm run dev`:
1. Open http://localhost:5173
2. Check all pages load
3. Test chatbot button (🐉)
4. Try Konami code (↑↑↓↓←→←→BA)
5. Check mobile responsive (F12 → mobile view)

---

**All set! You've got everything you need.** 🚀
