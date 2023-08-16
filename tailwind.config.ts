import type { Config } from 'tailwindcss';
import { crimsonDark, mauveDark, pinkDark, plumDark, purpleDark, slateDark } from '@radix-ui/colors';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'radial-top-right': 'radial-gradient(circle 300px at top right, hsl(318, 80%, 15%), #000000)',
      },
      borderRadius: {
        round: '30px',
      },
      colors: {
        //* ───────────────────────────
        'pink-1': pinkDark.pink1,
        'pink-2': pinkDark.pink2,
        'pink-3': pinkDark.pink3,
        'pink-4': pinkDark.pink4,
        'pink-5': pinkDark.pink5,
        'pink-6': pinkDark.pink6,
        'pink-7': pinkDark.pink7,
        'pink-8': pinkDark.pink8,
        'pink-9': pinkDark.pink9,
        'pink-10': pinkDark.pink10,
        'pink-11': pinkDark.pink11,
        'pink-12': pinkDark.pink12,

        //* ───────────────────────────
        'crimson-1': crimsonDark.crimson1,
        'crimson-2': crimsonDark.crimson2,
        'crimson-3': crimsonDark.crimson3,
        'crimson-4': crimsonDark.crimson4,
        'crimson-5': crimsonDark.crimson5,
        'crimson-6': crimsonDark.crimson6,
        'crimson-7': crimsonDark.crimson7,
        'crimson-8': crimsonDark.crimson8,
        'crimson-9': crimsonDark.crimson9,
        'crimson-10': crimsonDark.crimson10,
        'crimson-11': crimsonDark.crimson11,
        'crimson-12': crimsonDark.crimson12,

        //* ───────────────────────────
        'plum-1': plumDark.plum1,
        'plum-2': plumDark.plum2,
        'plum-3': plumDark.plum3,
        'plum-4': plumDark.plum4,
        'plum-5': plumDark.plum5,
        'plum-6': plumDark.plum6,
        'plum-7': plumDark.plum7,
        'plum-8': plumDark.plum8,
        'plum-9': plumDark.plum9,
        'plum-10': plumDark.plum10,
        'plum-11': plumDark.plum11,
        'plum-12': plumDark.plum12,

        //* ───────────────────────────
        'purple-1': purpleDark.purple1,
        'purple-2': purpleDark.purple2,
        'purple-3': purpleDark.purple3,
        'purple-4': purpleDark.purple4,
        'purple-5': purpleDark.purple5,
        'purple-6': purpleDark.purple6,
        'purple-7': purpleDark.purple7,
        'purple-8': purpleDark.purple8,
        'purple-9': purpleDark.purple9,
        'purple-10': purpleDark.purple10,
        'purple-11': purpleDark.purple11,
        'purple-12': purpleDark.purple12,

        //* ───────────────────────────
        'mauve-1': mauveDark.mauve1,
        'mauve-2': mauveDark.mauve2,
        'mauve-3': mauveDark.mauve3,
        'mauve-4': mauveDark.mauve4,
        'mauve-5': mauveDark.mauve5,
        'mauve-6': mauveDark.mauve6,
        'mauve-7': mauveDark.mauve7,
        'mauve-8': mauveDark.mauve8,
        'mauve-9': mauveDark.mauve9,
        'mauve-10': mauveDark.mauve10,
        'mauve-11': mauveDark.mauve11,
        'mauve-12': mauveDark.mauve12,

        //* ───────────────────────────
        'slate-1': slateDark.slate1,
        'slate-2': slateDark.slate2,
        'slate-3': slateDark.slate3,
        'slate-4': slateDark.slate4,
        'slate-5': slateDark.slate5,
        'slate-6': slateDark.slate6,
        'slate-7': slateDark.slate7,
        'slate-8': slateDark.slate8,
        'slate-9': slateDark.slate9,
        'slate-10': slateDark.slate10,
        'slate-11': slateDark.slate11,
        'slate-12': slateDark.slate12,
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
      },
      animation: {
        slideDownAndFade: 'slideDownAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideLeftAndFade: 'slideLeftAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
        slideRightAndFade: 'slideRightAndFade 400ms cubic-bezier(0.16, 1, 0.3, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
