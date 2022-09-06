/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      animation: {
        'spin': 'spin 20s linear infinite',
      }
    },
  },
  plugins: [],
}
