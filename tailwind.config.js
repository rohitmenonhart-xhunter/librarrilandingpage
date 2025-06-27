/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'warm-white': '#faf8f5',
        'warm-gray': {
          50: '#f9f7f4',
          100: '#f2efe9',
          200: '#e5e0d5',
          300: '#d5cdc0',
          400: '#bbb1a0',
          500: '#a69b87',
          600: '#8c8270',
          700: '#736a5c',
          800: '#5c564a',
          900: '#48433a',
        },
        primary: '#4361ee', // Modern Blue
        secondary: '#f8f9fa', // Light Gray
        accent: '#3a0ca3', // Deep Purple
        text: {
          dark: '#212529', // Almost Black
          light: '#f8f9fa', // Off White
        },
        bg: {
          light: '#ffffff', // Pure White
          dark: '#212529', // Dark Gray
        },
        success: '#4cc9f0', // Bright Cyan
        warning: '#fca311', // Golden Yellow
        error: '#e63946', // Bright Red
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'feature': '0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [],
};
