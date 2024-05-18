module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'midnight-green': '#224855',
        'vermillion': '#E64833',
        'bole': '#874F41',
        'ash-grey': '#90AEAD',
        'champagne': '#FBE9D0',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}