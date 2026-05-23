/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        brand: {
          900: '#0f172a',
          800: '#112d4e',
          600: '#2563eb',
          500: '#38bdf8',
          300: '#94e3ff'
        }
      }
    }
  },
  plugins: [],
}
