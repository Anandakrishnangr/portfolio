import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          light: '#ffffff',
          dark: '#111111',
        },
        text: {
          primary: {
            light: '#000000',
            dark: '#ffffff',
          },
          secondary: {
            light: '#9b9b9b',
            dark: '#707070',
          },
          muted: {
            light: '#6d6d6d',
            dark: '#cecece',
          },
        },
        primary: '#00eeff',
      },
    },
  },
  plugins: [],
};

export default config;
