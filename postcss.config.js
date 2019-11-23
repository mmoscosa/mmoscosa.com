module.exports = {
  plugins: [
    require('tailwindcss')('tailwind.js'),
    require('autoprefixer')(),
    require('tailwindcss-responsive-embed')(),
    require('tailwindcss-aspect-ratio')({
      ratios: {
        square: [1, 1],
        '16/9': [16, 9],
        '4/3': [4, 3],
        '21/9': [21, 9]
      }
    })
  ]
}
