/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-matter': '#0a0e27',
        'navy-deep': '#1a1f3a',
        'cyan-glow': '#00d4ff',
        'gold-accent': '#ffd700',
        'blood-red': '#dc143c',
      },
      fontFamily: {
        'mono': ['Courier New', 'monospace'],
        'serif': ['Georgia', 'serif'],
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 1.5s ease-in-out infinite',
        'glitch': 'glitch 0.3s ease-in-out',
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 10px #00d4ff, 0 0 20px #00d4ff' },
          '50%': { textShadow: '0 0 5px #00d4ff' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 10px #00d4ff' },
          '50%': { boxShadow: '0 0 20px #00d4ff' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
          '100%': { transform: 'translate(0)' },
        },
      },
    },
  },
  plugins: [],
}
