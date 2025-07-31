/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '400px',
      },
      colors: {
        'primary': '#2563eb', // Main blue
        'primary-dark': '#1d4ed8', // Darker blue
        'primary-light': '#3b82f6', // Lighter blue
        'secondary': '#059669', // Green
        'secondary-dark': '#047857', // Darker green
        'secondary-light': '#10b981', // Lighter green
        'accent': '#f59e0b', // Orange accent
        'accent-dark': '#d97706', // Darker orange
        'gray-custom': '#6b7280', // Custom gray
        'gray-light': '#f9fafb', // Light gray background
        'gray-dark': '#374151', // Dark gray text
        'white': '#ffffff',
        'black': '#111827',
        // Vigor colors for PricingPackages
        'vigor-red': '#dc2626',
        'vigor-blue': '#2563eb',
        'vigor-green': '#059669',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'custom-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
} 