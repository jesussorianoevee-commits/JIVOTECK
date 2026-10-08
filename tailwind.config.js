/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jivo: {
          orange: '#FF6B35',
          'orange-hover': '#E85A24',
          navy: '#0E2433',
          'navy-dark': '#091822',
          'navy-card': '#132E40',
          cream: '#F8F6F1',
          'cream-card': '#FFFFFF',
          green: '#2F5F50',
          'green-light': '#3D7A67',
          border: '#D8D2C6',
          'border-light': '#EAE5DC',
        },
        // Backwards compatibility if needed
        jivoteck: {
          cyan: '#FF6B35',
          cyanGlow: '#FF8A5B',
          cyanDark: '#E85A24',
          skyLight: '#F8F6F1',
          skyBorder: '#D8D2C6',
          tealDeep: '#2F5F50',
          tealPrimary: '#2F5F50',
          bentoDark: '#0E2433',
          bentoCard: '#132E40',
          coralGlow: '#FF6B35',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Newsreader', 'Playfair Display', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Space Mono', 'monospace'],
      },
      boxShadow: {
        'jivo-card': '0 4px 20px -2px rgba(14, 36, 51, 0.06), 0 2px 6px -1px rgba(14, 36, 51, 0.04)',
        'jivo-hover': '0 12px 30px -4px rgba(14, 36, 51, 0.12), 0 4px 10px -2px rgba(14, 36, 51, 0.05)',
        'orange-glow': '0 0 25px -3px rgba(255, 107, 53, 0.35)',
      }
    },
  },
  plugins: [],
}
