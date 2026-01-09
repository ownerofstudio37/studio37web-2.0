import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        studio: {
          orange: '#E67E22',
          dark: '#1a1a1a',
          light: '#f5f5f5',
        },
        primary: '#E67E22',
        secondary: '#1a1a1a',
      },
      fontFamily: {
        sans: ['var(--font-sans)'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};

export default config;
