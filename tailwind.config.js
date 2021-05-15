module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'Atma': ['Atma', 'cursive'],
        'Signika-Negative': ['"Signika Negative"', 'sans-serif']
      },
      spacing: {
        sm: '3px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
