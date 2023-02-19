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

      primary1: violetDark.violet1,
      primary2: violetDark.violet2,
      primary3: violetDark.violet3,
      primary4: violetDark.violet4,
      primary5: violetDark.violet5,
      primary6: violetDark.violet6,
      primary7: violetDark.violet7,
      primary8: violetDark.violet8,
      primary9: violetDark.violet9,
      primary10: violetDark.violet10,
      primary11: violetDark.violet11,
      primary12: violetDark.violet12,
    },
    extend: {
      width: {
        stretch: 'stretch',
      },
    },
  },
  plugins: [],
}
