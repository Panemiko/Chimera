const { blackA, whiteA, mauveDark } = require("@radix-ui/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    colors: {
      ...blackA,
      ...whiteA,
      ...mauveDark,
    },
  },
  plugins: [],
};
