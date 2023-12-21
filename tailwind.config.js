/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ['Source Sans Pro', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: "#1f2b3e",
        secondary: "#374357",
      }
    },
  },
  plugins: [],
};

