/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        'main-height': '90vh',
        'audioplayer-height': '11vh',
      },
      colors: {
        'main-black': '#1C1D21',
        'main-beige': '#EBEBD3',
        'main-blue': '#6853DF',
        'main-mint': '#DCF8DC',
        'border-leftbar': '#F4CAB8',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
