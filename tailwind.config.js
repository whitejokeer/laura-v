/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './assets/js/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink:    '#171717',
        ink2:   '#404040',
        gold:   '#A16207',
        goldlt: '#CA8A04',
        muted:  '#E8ECF0',
        line:   '#E5E5E5',
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body:    ['"Space Grotesk"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
    },
  },
  plugins: [],
};
