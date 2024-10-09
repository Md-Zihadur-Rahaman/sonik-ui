/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Phudu: 'Phudu',
      Inter: 'Inter',
    },
    colors: {
      black: '#000000',
      dark_gray: '#383535',
      dark_gray_text: '#585858',
      white_text: '#ffffff',
      blue: '#7C5DF8',
    },
    extend: {},
  },
  plugins: [],
}
