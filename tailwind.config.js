/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4fa',
          100: '#dce6f5',
          200: '#bacdea',
          300: '#8bacda',
          400: '#5c88c7',
          500: '#3b69ae',
          600: '#2d538f',
          700: '#264473',
          800: '#1f385e',
          900: '#16294a',
          950: '#0d1a30',
        },
        lightblue: {
          50: '#f2f8fd',
          100: '#e3f0fa',
          200: '#c6e0f4',
        },
      },
      fontFamily: {
        display: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['Nunito Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
