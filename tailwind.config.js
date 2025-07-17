/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'vigor-blue': '#1e3a8a',
        'vigor-dark-blue': '#1e40af',
        'vigor-purple': '#7c3aed',
        'vigor-light-purple': '#a855f7',
        'vigor-green': '#10b981',
        'vigor-yellow': '#f59e0b',
        'vigor-orange': '#f97316',
        'vigor-red': '#ef4444',
        'vigor-light-green': '#d1fae5',
        'vigor-light-purple-bg': '#f3e8ff',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 