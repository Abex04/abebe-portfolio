/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6c63ff',
          50: '#f4f3ff',
          100: '#ebe9fe',
          200: '#d9d6fe',
          300: '#bfb8fd',
          400: '#9f92fa',
          500: '#6c63ff',
          600: '#5a4fe6',
          700: '#483cbf',
          800: '#382f94',
          900: '#2d2777',
        },
        dark: {
          DEFAULT: '#050508',
          bg: '#050508',
          card: '#13131a',
          cardHover: '#181824',
          border: '#1e1e2e',
          borderHover: 'rgba(108, 99, 255, 0.4)',
        },
        navy: {
          900: '#0b132b',
          950: '#070b1a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 4s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(108, 99, 255, 0.7)' },
        },
        'gradient-shift': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}
