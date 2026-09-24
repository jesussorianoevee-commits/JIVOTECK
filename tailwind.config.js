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
          tealDeep: '#00584B',
          tealPrimary: '#007362',
          tealLight: '#E8F5F1',
          tealBorder: '#C2E6DC',
          mint: '#00D4B2',
          mintDark: '#059669',
          amberWarm: '#F59E0B',
          amberLight: '#FEF3C7',
          coralWarm: '#EA580C',
          coralLight: '#FFEDD5',
          electricBlue: '#2563EB',
          blueLight: '#DBEAFE',
          bentoDark: '#0A0F17',
          bentoCard: '#111827',
          bentoBorder: '#1F2937',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      boxShadow: {
        'upstream': '0 4px 20px -2px rgba(0, 98, 84, 0.06), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'upstream-hover': '0 12px 30px -4px rgba(0, 98, 84, 0.12), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
        'bento-glow': '0 0 40px -10px rgba(0, 212, 178, 0.25)',
      }
    },
  },
  plugins: [],
}
