const { mauveDark, violetDark } = require('@radix-ui/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      neutral1: mauveDark.mauve1,
      neutral2: mauveDark.mauve2,
      neutral3: mauveDark.mauve3,
      neutral4: mauveDark.mauve4,
      neutral5: mauveDark.mauve5,
      neutral6: mauveDark.mauve6,
      neutral7: mauveDark.mauve7,
      neutral8: mauveDark.mauve8,
      neutral9: mauveDark.mauve9,
      neutral10: mauveDark.mauve10,
      neutral11: mauveDark.mauve11,
      neutral12: mauveDark.mauve12,

      violet1: violetDark.violet1,
      violet2: violetDark.violet2,
      violet3: violetDark.violet3,
      violet4: violetDark.violet4,
      violet5: violetDark.violet5,
      violet6: violetDark.violet6,
      violet7: violetDark.violet7,
      violet8: violetDark.violet8,
      violet9: violetDark.violet9,
      violet10: violetDark.violet10,
      violet11: violetDark.violet11,
      violet12: violetDark.violet12,
    },
    extend: {},
  },
  plugins: [],
}
