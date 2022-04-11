const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./templates/frontend/**/*.{html,html.twig, twig}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Archivo', ...defaultTheme.fontFamily.sans],
        'two': ['Julius Sans One', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
