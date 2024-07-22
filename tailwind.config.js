/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "",
    },
    screens: {
      "xs": "320px",
      "sm": "640px",
      "md": "768px",
      "lg": "960px",
      "xl": "1200px",
      "2xl": "1457px",
      "3xl": "1680px"
    },
    fontFamily: {
      primary: ["Outfit", "sans-serif"],
    },
    extend: {
      colors: {
        primary: '#7839EE',
        secondry : "#1A1A1A",
      },
    },
  },
  plugins: [],
});