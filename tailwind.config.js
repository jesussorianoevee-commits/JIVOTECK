/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jivoteck: {
          cyan: '#00D4FF',
          cyanDark: '#0099CC',
          skyLight: '#D2E8FD',
          skyMid: '#EAF4FE',
          skySoft: '#F5FAFF',
          dark: '#0A0E17',
          darkSurface: '#0F1523',
          darkCard: '#131B2C',
          darkBorder: '#1C263A',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
