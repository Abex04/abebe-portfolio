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
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#1b2a4a',
          900: '#0b132b',
          950: '#070b1a',
        },
        electric: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px 0 rgba(0, 0, 0, 0.03)',
        'card': '0 4px 6px -1px rgba(11, 19, 43, 0.05), 0 2px 4px -1px rgba(11, 19, 43, 0.03)',
        'card-hover': '0 20px 25px -5px rgba(11, 19, 43, 0.1), 0 10px 10px -5px rgba(11, 19, 43, 0.04)',
        'glow': '0 0 25px -5px rgba(37, 99, 235, 0.25)',
      },
      backgroundImage: {
        'navy-gradient': 'linear-gradient(135deg, #0b132b 0%, #1b2a4a 100%)',
      }
    },
  },
  plugins: [],
}
