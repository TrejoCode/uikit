/**
 * @description WindiCSS base config with base design system
 */
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        '50vh': '50vh',
        '80vh': '80vh',
        '90vh': '90vh',
      },
    },
  },
  fontFamily: {
    sans: ['IBM Plex Sans', 'sans-serif'],
  },
});
