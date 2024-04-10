/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
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
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
      fontFamily: {
        inter: 'Inter, sans-serif',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
