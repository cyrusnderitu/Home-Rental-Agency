/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter', 'sans-serif'],
        dms: ['DM Sans', 'sans-serif'],
        pops: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
