/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 20s linear infinite',
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}
