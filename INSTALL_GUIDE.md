# 🚀 COMPLETE INSTALL & RUN GUIDE

## ⚠️ CRITICAL: Install Node.js First

### Windows Installation (Your System)

**Step 1:** Download Node.js
- Visit https://nodejs.org/
- Click the **LTS (Long Term Support)** version (18.x or 20.x)
- Click the **Windows Installer (.msi)**

**Step 2:** Run the Installer
- Double-click the downloaded `.msi` file
- Click "Next" → "I Accept" → "Next"
- Choose installation folder (default is fine)
- Click "Next" → "Install"
- Wait for completion
- Click "Finish"

**Step 3:** Verify Installation
- **Close all Command Prompts**
- Open a **NEW** Command Prompt
- Type: `node --version` (should show: v18.x.x or v20.x.x)
- Type: `npm --version` (should show: version number)

If both show version numbers → ✅ **Ready to proceed!**

---

## 📦 INSTALL THE PROJECT

### Option A: Automatic Setup (Easiest)

In Command Prompt:
```bash
cd "c:\Users\mogge\OneDrive\Desktop\orv resume\orv-portfolio"
setup.bat
```

This runs the setup automatically!

---

### Option B: Manual Setup (Full Control)

**Step 1:** Navigate to project
```bash
cd "c:\Users\mogge\OneDrive\Desktop\orv resume\orv-portfolio"
```

**Step 2:** Install dependencies
```bash
npm install
```

This will:
- Download React, Vite, Tailwind CSS, etc.
- Create `node_modules` folder (~500MB)
- Take 2-5 minutes

**Step 3:** Start dev server
```bash
npm run dev
```

**Step 4:** Open in browser
- Website opens at: http://localhost:5173

---

## 🎯 WHAT HAPPENS NEXT

When you run `npm run dev`:

```
  VITE v5.0.8  ready in 432 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help

  > Waiting for file changes to reload...
```

Then your browser automatically opens with:
- 🎭 **Landing Page** - ORV scenario loading screen
- 🧙 **About Page** - Character card
- 📋 **Projects Page** - Your projects as scenarios
- 📄 **Resume Page** - Experience timeline
- 🐉 **Chatbot** - Dokkaebii floating button

---

## ✅ COMPLETE CHECKLIST

- [ ] Downloaded Node.js from nodejs.org
- [ ] Installed Node.js (followed installer prompts)
- [ ] **Closed and reopened Command Prompt**
- [ ] Verified: `node --version` shows number
- [ ] Verified: `npm --version` shows number
- [ ] Navigated to: `c:\Users\mogge\OneDrive\Desktop\orv resume\orv-portfolio`
- [ ] Ran: `npm install` (waited for completion)
- [ ] Ran: `npm run dev`
- [ ] Browser opened to http://localhost:5173
- [ ] ✨ **Website is LIVE!**

---

## 🔧 OPTIONAL: Enable Chatbot

To make Dokkaebii chatbot work:

1. Get free Claude API key from: https://console.anthropic.com/
2. In the project folder, create file named `.env` with:
   ```
   VITE_ANTHROPIC_API_KEY=sk-ant-your-real-key-here
   ```
3. Restart dev server (Ctrl+C, then `npm run dev`)
4. Click 🐉 button to chat!

---

## 🆘 TROUBLESHOOTING

### Problem: "npm: command not found"
**Solution:**
- You didn't install Node.js OR
- You didn't close and reopen Command Prompt
1. Install Node.js from nodejs.org
2. **CLOSE ALL Command Prompts**
3. Open a **NEW** Command Prompt
4. Type: `npm --version`

### Problem: "Port 5173 already in use"
**Solution:**
```bash
npm run dev -- --port 5174
```

### Problem: Styles look broken
**Solution:**
```bash
# Stop the dev server (Ctrl+C)
npm install
npm run dev
```

### Problem: pages not loading
**Solution:**
1. Check browser console (press F12)
2. Look for red error messages
3. Try: `npm run dev` again

---

## 📱 AFTER IT'S RUNNING

- **Edit code** → Saves automatically, browser refreshes
- **All pages work** → Landing, About, Projects, Resume
- **Navigation buttons** → Click to jump between pages
- **Chatbot button** → Click 🐉 to talk to Dokkaebii
- **Responsive** → Works on mobile/tablet/desktop
- **Easter egg** → Press ↑↑↓↓←→←→BA for surprise!

---

## 🌐 CUSTOMIZE YOUR PORTFOLIO

Edit `src/data/portfolio.js` to change:
- Your name, bio, skills
- Projects, experience, education
- Links, constellations
- Everything updates live!

---

## 🚀 WHEN READY TO DEPLOY

```bash
npm i -g vercel
vercel
# Follow prompts to deploy to https://vercel.com (FREE!)
```

---

**THE MOST IMPORTANT STEP:**
# 👉 INSTALL NODE.JS FROM NODEJS.ORG 👈

Everything else depends on it!

---

**Current Project Location:**
`c:\Users\mogge\OneDrive\Desktop\orv resume\orv-portfolio\`

**Status:** ✅ All code ready, just needs Node.js + npm install

**Next Action:** Download Node.js, run `npm install`, then `npm run dev`

You've got this! 🐉✨
