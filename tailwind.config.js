/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Arial', 'sans-serif'], 
        serif: ['Merriweather', 'serif'], 
      },
      colors: {
        chestnut: '#973F29'
      }
    },
  },
  plugins: [],
}

