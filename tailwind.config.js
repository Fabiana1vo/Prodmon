/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
      'aqua-500':'#48D6D2',
      'gray-invisible': '#d9d9d955'
      },
    },
  },
  plugins: [],
}
