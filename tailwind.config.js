module.exports = {
  purge: [],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
   darkMode: false, // or 'media' or 'class'
   theme: {
     extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
        '16': 'repeat(17, minmax(0, 1fr))',
      }
     },
   },
   variants: {
     extend: {},
   },
   plugins: [],
 }