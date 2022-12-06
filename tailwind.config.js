/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },

    extend: {
      colors: {
        primary: '#14b8a6',
        dark: '#0f172a',
        danger: '#dc2626',
        secondary: '#64748b',
      },
      screens: {
        'xl': '1150px',
      },
    },
  },
  plugins: [],
};
