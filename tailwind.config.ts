/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'input-label': '#9FA2B4',
        'input-placeholder': '#4B506D',
        'input-bg': '#FCFDFE',
        'input-border': '#F0F1F7',
      },
      width: {
        '316': '316px',
        '536': '536px',
      },
      height: {
        '42': '42px',
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
