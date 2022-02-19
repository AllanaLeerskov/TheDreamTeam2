module.exports = {
  purge: [],
  darkMode: false,
  content: ["./public/**/*.{html,js}"],
  content: ["./views/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px'
    },
    container: {
      center: true,
      padding: '1rem'
    },
    extend: {
      fontFamily: {
        fuzzy: "'Fuzzy Bubbles' , cursive" ,

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
