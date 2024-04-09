/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      gray: {
        100: '#f2f2f2',
        200: '#d9d9d9',
        300: '#808080',
        400: '#333333',
        500: '#262626',
        600: '#1a1a1a',
        700: '#0d0d0d',
      },
      violet: {
        500: '#8284fa',
        600: '#5e60ce',
      },
      blue: {
        500: '#4ea8de',
        600: '#1e6f9f',
      },
      red: '#e25858',
    },
    extend: {
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [],
}
