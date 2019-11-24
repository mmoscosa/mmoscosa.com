// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const tailwindcss = require('tailwindcss')

module.exports = {
  siteName: 'Martin Moscosa',
  siteUrl: 'https://www.mmoscosa.com',
  siteDescription: 'Martin Moscosa personal website',
  titleTemplate: 'Martin Moscosa - %s',
  plugins: [
    {
      use: '@gridsome/source-contentful',
      options: {
        host: 'cdn.contentful.com',
        typename: 'Contentful',
        space: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT
      }
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-45914309-1'
      }
    }
  ],
  css: {
    loaderOptions: {
      postcss: {
        plugins: [tailwindcss]
      }
    }
  }
}
