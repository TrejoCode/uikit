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
    // Text Base !important
    '!text-primary-base !text-primaryAlt-base !text-secondary-base !text-secondaryAlt-base !text-success-base !text-info-base !text-warning-base !text-danger-base !text-transparent !text-gray !text-dark-gray',
    // Border base
    'border-primary-base border-primaryAlt-base border-secondary-base border-secondaryAlt-base border-success-base border-info-base border-warning-base border-danger-base border-transparent border-gray border-dark-gray',
    // Border base lighten
    'border-primary-lighten border-primaryAlt-lighten border-secondary-lighten border-secondaryAlt-lighten border-success-lighten border-info-lighten border-warning-lighten border-danger-lighten border-transparent border-gray border-dark-gray',
    // Border base darken
    'border-primary-darken border-primaryAlt-darken border-secondary-darken border-secondaryAlt-darken border-success-darken border-info-darken border-warning-darken border-danger-darken border-transparent border-gray border-dark-gray',
    // Background base
    'bg-primary-base bg-primaryAlt-base bg-secondary-base bg-secondaryAlt-base bg-success-base bg-info-base bg-warning-base bg-danger-base bg-transparent',
    // Background base !important
    '!bg-primary-base !bg-primaryAlt-base !bg-secondary-base !bg-secondaryAlt-base !bg-success-base !bg-info-base !bg-warning-base !bg-danger-base !bg-transparent',
    // Background lighten
    'bg-primary-lighten bg-primaryAlt-lighten bg-secondary-lighten bg-secondaryAlt-lighten bg-success-lighten bg-info-lighten bg-warning-lighten bg-danger-lighten',
    // Background lighten !important
    '!bg-primary-lighten !bg-primaryAlt-lighten !bg-secondary-lighten !bg-secondaryAlt-lighten !bg-success-lighten !bg-info-lighten !bg-warning-lighten !bg-danger-lighten',
    // Background darken
    'bg-primary-darken bg-primaryAlt-darken bg-secondary-darken bg-secondaryAlt-darken bg-success-darken bg-info-darken bg-warning-darken bg-danger-darken',
    // Background darken !important
    '!bg-primary-darken !bg-primaryAlt-darken !bg-secondary-darken !bg-secondaryAlt-darken !bg-success-darken !bg-info-darken !bg-warning-darken !bg-danger-darken',
  ],
  plugins: [require('@tailwindcss/forms')],
};
