/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3B82F6',
        accent: {
          1: '#A5D8FF',
          2: '#D0BCFF',
          3: '#B197FC',
        },
        light: {
          bg: '#EFF6FF',
          secondary: '#F3F4F6',
          white: '#FFFFFF',
        },
        dark: {
          primary: '#000000',
          secondary: '#404040',
          muted: '#737373',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'scroll': 'scroll 30s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
