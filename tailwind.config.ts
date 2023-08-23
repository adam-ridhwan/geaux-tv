import type { Config } from 'tailwindcss';

import { crimsonDark, mauveDark, pinkDark, plumDark, purpleDark, slateDark } from '@radix-ui/colors';

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
      'primary-void': 'hsl(240,4%,5%)',

      'secondary-light': purpleDark.purple10,
      'secondary-lighter': purpleDark.purple11,
      'secondary-lightest': purpleDark.purple2,
      'secondary-dark': purpleDark.purple5,
      'secondary-darker': purpleDark.purple3,
      'secondary-darkest': purpleDark.purple1,

      'tertiary-light': pinkDark.pink10,
      'tertiary-lighter': pinkDark.pink11,
      'tertiary-lightest': pinkDark.pink12,
      'tertiary-dark': pinkDark.pink6,
      'tertiary-darker': pinkDark.pink5,
      'tertiary-darkest': pinkDark.pink4,

      ...mauveDark,
      ...crimsonDark,
      ...plumDark,
      ...purpleDark,
      ...slateDark,
      ...pinkDark,
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
      mobile: '750px',
      desktop: '1700px',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial-top-right': 'radial-gradient(circle 300px at top right, hsl(318, 80%, 15%), #000000)',
        'gradient-bottom-to-top': `linear-gradient(to top, hsl(318, 80%, 5%) 5%, #000000)`,
      },
      borderRadius: {
        weak: '0.5rem',
        strong: '30px',
      },
      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          from: { opacity: '0', transform: 'translateX(2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        slideUpAndFade: {
          from: { opacity: '0', transform: 'translateY(2px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        slideRightAndFade: {
          from: { opacity: '0', transform: 'translateX(-2px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        overlayShow: {
          from: { opacity: '0' },
          to: { opacity: '0.5' },
        },
        contentShow: {
          from: { opacity: '0', bottom: '0px' },
          to: { opacity: '1', bottom: '20px' },
        },
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        overlayShow: 'overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        contentShow: 'contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1)',
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
