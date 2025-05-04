/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      screens: {
        'max-xxl': { 'max': '1080px' },
        'max-xl': { 'max': '991px' },
        'max-lg': { 'max': '774px' },
        'max-md': { 'max': '472px' },
        'max-sm': { 'max': '370px' },
        'max-xsm': { 'max': '300px' },
      },
    },
  },
  plugins: [],
}

