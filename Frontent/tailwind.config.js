/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    scrollbar: ['rounded', 'dark'],
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
