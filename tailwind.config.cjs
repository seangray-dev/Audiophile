/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },

      fontSize: {
        mobileMenu: [
          '15px',
          {
            lineHeight: '20.49px',
            letterSpacing: '1.07px',
            fontWeight: '700',
          },
        ],
        mobileShop: [
          '13px',
          {
            lineHeight: '17.76px',
            letterSpacing: '1px',
            fontWeight: '700',
          },
        ],
      },

      colors: {
        brightOrange: '#D87D4A',
        jetBlack: '#101010',
        paleSilver: '#F1F1F1',
        snow: '#FAFAFA',
        peach: '#FBAF85',
        pureWhite: '#FFFFFF',
        pureBlack: '#000000',
        gray: '#808080',
      },
    },
  },
  plugins: [],
};
