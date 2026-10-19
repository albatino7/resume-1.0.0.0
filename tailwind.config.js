/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          accent: '#c9f250',
          DEFAULT: '#c9f250',
          50: '#f9ffe6',
          100: '#f2ffcc',
          200: '#e5ff99',
          300: '#d7ff66',
          400: '#c9f250',
          500: '#aed92e',
          600: '#8ab01c',
          700: '#698715',
          800: '#485e10',
          900: '#2a3809',
        },
        dark: {
          bg: '#0e100d',
          card: '#171a15',
          cardHover: '#1f241d',
          border: '#242a20',
          text: '#f4f4ee',
          muted: '#9a9e93',
        },
        light: {
          bg: '#f6f5f0',
          card: '#ffffff',
          cardHover: '#f0efe9',
          border: '#e2e0d5',
          text: '#1d201a',
          muted: '#666a5f',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        display: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 25px -5px rgba(201, 242, 80, 0.3)',
        'lime-glow-lg': '0 0 50px -10px rgba(201, 242, 80, 0.45)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
