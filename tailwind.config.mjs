// tailwind.config.mjs


/** @type {import('tailwindcss').Config} */
const config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        redCustom: '#ff4444',
      },
    },
  },
  plugins: [],
};

export default config;