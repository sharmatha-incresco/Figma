/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      height:{
        mobile:'863px',
        desktop:'1000px',
      }
    },
  },
  plugins: [],
}

