/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        varela: ["Varela Round", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        jost: ["Jost", "sans-serif"],
        mulish: ["Mulish", "sans-serif"],
        sans: ['Inter'],
      },

    },
    screens: {
        'small': '364px',
        'navwrap': '455px',
        ...defaultTheme.screens,
    },
  },
  plugins: [],
}