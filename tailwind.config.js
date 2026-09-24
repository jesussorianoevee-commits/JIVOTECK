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
          cyanGlow: '#38BDF8',
          cyanDark: '#0284C7',
          cyanDeep: '#0369A1',
          skyLight: '#F0F9FF',
          skyBorder: '#BAE6FD',
          tealDeep: '#00584B',
          tealPrimary: '#007362',
          bentoDark: '#070A11',
          bentoCard: '#0C1322',
          bentoCardElevated: '#111A2E',
          bentoBorder: '#1E293B',
          coralGlow: '#F97316',
          coralAura: '#FF6B00',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      boxShadow: {
        'cyan-glow': '0 0 35px -5px rgba(0, 212, 255, 0.35)',
        'coral-glow': '0 0 40px -5px rgba(249, 115, 22, 0.3)',
        'bento': '0 10px 30px -10px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.06)',
        'upstream': '0 4px 20px -2px rgba(2, 132, 199, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)',
        'upstream-hover': '0 12px 30px -4px rgba(2, 132, 199, 0.16), 0 4px 10px -2px rgba(0, 0, 0, 0.06)',
      }
    },
  },
  plugins: [],
}
