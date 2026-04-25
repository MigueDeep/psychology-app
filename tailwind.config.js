/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#020042',
        secondary: '#307ffe',
        mist: '#eef4ff',
      },
      fontFamily: {
        heading: ['"Source Serif 4"', 'Georgia', 'serif'],
        body: ['"Nunito Sans"', '"Trebuchet MS"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
