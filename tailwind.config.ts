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
        'secondary-gray': '#A4A6B3',
        'secondary-gray-light': '#9FA2B4',
        'primary-black': '#252733',
        'primary-bg-black': '#363740',
        'primary-blue': '#3751FF',
        'primary-white': '#DDE2FF',
      },
      width: {
        '316': '316px',
        '380': '380px',
        '536': '536px',
        '600': '600px',
      },
      height: {
        '42': '42px',
        '48': '48px',
        '582': '582px',
        '710': '710px',
      },
    },
    fontFamily: {},
  },
  plugins: [],
};
