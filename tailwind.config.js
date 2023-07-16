const assets = require('./assets.json')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: `${assets.breakpoints.sm}px`,
      // => @media (min-width: 640px) { ... }
      md: `${assets.breakpoints.md}px`,
      // => @media (min-width: 768px) { ... }
      lg: `${assets.breakpoints.lg}px`,
      // => @media (min-width: 1024px) { ... }
      xl: `${assets.breakpoints.xl}px`,
      // => @media (min-width: 1280px) { ... }
      '2xl': `${assets.breakpoints['2xl']}px`,
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: assets.fontFamily,
    extend: {
      colors: assets.colors,
      padding: {
        32.5: '8.125rem',
        7.5: '1.875rem',
        22.5: '5.625rem',
      },
      height: {
        12.25: '3.125rem',
        fit: 'fit-content',
      },
      fontSize: {
        '9xl': ['10.3rem', '8.7rem'],
      },
      width: {
        32.5: '8.125rem',
      },
      minWidth: {
        screen: '100vw',
      },
      borderWidth: {
        1: '1px',
      },
    },
  },
  plugins: [],
}
