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
        primary: "#151b2c",
        secondary: "#1f2b3e",
        tertiary: "#4cceac",
      }
    },
  },
  plugins: [],
};

