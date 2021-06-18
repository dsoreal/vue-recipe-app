module.exports = {
  purge: { content: ['./public/**/*.html', './src/**/*.vue'] },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {      
      colors: {
        'mx-blue-purple' : '#BCB6FF',
        'ur-blue': '#B8E1FF',
        'celeste': '#A9FFF7'
      }},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
