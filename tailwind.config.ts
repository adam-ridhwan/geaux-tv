import type { Config } from 'tailwindcss';

import {
  blueDark,
  crimsonDark,
  greenDark,
  mauveDark,
  pinkDark,
  plumDark,
  purpleDark,
  redDark,
  slateDark,
} from '@radix-ui/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      black: '#000000',
      white: '#ffffff',

      'primary-light': slateDark.slate10,
      'primary-lighter': slateDark.slate11,
      'primary-lightest': slateDark.slate12,
      'primary-dark': slateDark.slate5,
      'primary-darker': slateDark.slate3,
      'primary-darkest': slateDark.slate1,
      'primary-void': 'hsl(240,54%,5%)',
      'primary-footer': 'hsl(240,54%,7%)',

      'accent-light': pinkDark.pink10,
      'accent-lighter': pinkDark.pink11,
      'accent-lightest': pinkDark.pink12,
      'accent-dark': pinkDark.pink6,
      'accent-darker': pinkDark.pink5,
      'accent-darkest': pinkDark.pink4,

      ...mauveDark,
      ...crimsonDark,
      ...plumDark,
      ...purpleDark,
      ...slateDark,
      ...pinkDark,

      ...blueDark,
      ...redDark,
      ...greenDark,
    },
    fontSize: {
      'fs-200': '0.875rem',
      'fs-300': '1rem',
      'fs-400': '1.125rem',
      'fs-500': '1.375rem',
      'fs-600': '1.75rem',
      'fs-700': '3.25rem',
    },
    screens: {
      tablet: '750px',
      desktop: '1600px',
    },

    extend: {
      backgroundImage: {
        'radial-top-right': 'radial-gradient(circle 300px at top right, hsl(318, 80%, 15%), #000000)',
        'gradient-bottom-to-top': `linear-gradient(to top, hsl(318, 80%, 5%) 5%, #000000)`,
        'cool-gradient': 'linear-gradient(120deg, hsl(227, 47.2%, 21.0%), hsl(298, 34.4%, 15.3%))',
      },
      borderRadius: {
        weak: '0.5rem',
        strong: '30px',
      },
      keyframes: {
        rotate: {
          '100%': {
            transform: 'rotate(360deg)',
          },
        },
        dash: {
          '0%': {
            'stroke-dasharray': '1, 150',
            'stroke-dashoffset': '0',
          },
          '50%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': '-35',
          },
          '100%': {
            'stroke-dasharray': '90, 150',
            'stroke-dashoffset': '-124',
          },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '0.05' },
        },
        contentShow: {
          from: { opacity: '0', bottom: '0px' },
          to: { opacity: '1', bottom: '20px' },
        },
        slideDown: {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        slideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        hide: {
          from: { opacity: '1' },
          to: { opacity: '0' },
        },
        slideIn: {
          from: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
          to: { transform: 'translateX(0)' },
        },
        swipeOut: {
          from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
          to: { transform: 'translateX(calc(100% + var(--viewport-padding)))' },
        },
      },
      animation: {
        rotate: 'rotate 2s linear infinite',
        dash: 'dash 1.5s ease-in-out infinite',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideDown: 'slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        slideUp: 'slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1)',
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
      fontWeight: {
        'fw-regular': '100',
        'fw-semi-bold': '200',
        'fw-bold': '300',
      },
    },
  },
  plugins: [],
};
export default config;
