/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#FFFFFF',
        'secondary': '#000000',
        'gray': '#9DB2BF',
        'background': '#DDE6ED',
      }
    },
  },
  plugins: [],
}