/**
 * @description Tailwinds base config with base design system
 */

const path = require('path');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    path.join(__dirname, './src/**/*.(js|jsx|ts|tsx)'),
    path.join(__dirname, './src/**/**/*.(js|jsx|ts|tsx)'),
    path.join(__dirname, './src/**/**/**/*.(js|jsx|ts|tsx)'),
  ],
  darkMode: 'class',
  theme: {
    colors: {
      ...colors,
      primary: {
        base: '#3E816D',
        darken: '#316757',
        lighten: '#649A8A',
      },
      primaryAlt: {
        base: '#288091',
        darken: '#206674',
        lighten: '#5299A7',
      },
      secondary: {
        base: '#263D54',
        darken: '#1E3043',
        lighten: '#516376',
      },
      secondaryAlt: {
        base: '#516376',
        darken: '#404F5E',
        lighten: '#738291',
      },
      success: {
        base: '#008537',
        darken: '#006A2C',
        lighten: '#329D5E',
      },
      warning: {
        base: '#706700',
        darken: '#595200',
        lighten: '#8C8532',
      },
      danger: {
        base: '#C0392B',
        darken: '#992D22',
        lighten: '#CC6055',
      },
      info: {
        base: '#207B8D',
        darken: '#196270',
        lighten: '#4C95A3',
      },
      gray: '#6c6c6c',
      'dark-gray': '#4b4b4b',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
        lg: '2rem',
        xl: '2rem',
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
    },
    extend: {
      fontSize: {
        'display-1': '6rem',
        'display-2': '5.5rem',
        'display-3': '4.5rem',
        'display-4': '3.5rem',
      },
      minHeight: {
        '50vh': '50vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
    },
  },
  safelist: [
    // Text Base
    'text-primary-base text-primaryAlt-base text-secondary-base text-secondaryAlt-base text-success-base text-info-base text-warning-base text-danger-base text-transparent text-gray text-dark-gray',
  ],
  plugins: [require('@tailwindcss/forms')],
};
