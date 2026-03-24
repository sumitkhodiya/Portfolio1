/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Cinematic theme - Blue & Warm glow
        cinema: {
          blue: '#0EA5E9',
          warm: '#F97316',
          navy: '#0F172A',
          dark: '#0a0e27',
          darker: '#05091a',
        },
        dark: {
          50: '#f8f9fa',
          100: '#e9ecef',
          200: '#dee2e6',
          300: '#ced4da',
          400: '#adb5bd',
          500: '#6c757d',
          600: '#495057',
          700: '#343a40',
          800: '#212529',
          900: '#0a0e27',
        },
        accent: '#F97316',
        primary: '#0EA5E9',
      },
      fontFamily: {
        sans: ['Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'Courier New', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'glow': 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(55, 118, 171, 0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(55, 118, 171, 0.8)' },
        },
      },
    },
  },
  plugins: [],
}
