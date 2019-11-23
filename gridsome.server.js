// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const RssParser = require('rss-parser')
module.exports = function(api) {
  //api.loadSource(({ addCollection }) => {
  // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  //})

  api.loadSource(async actions => {
    const rssParser = new RssParser()
    const { items } = await rssParser.parseURL(
      'https://medium.com/feed/@mmoscosa'
    )

    const collection = actions.addCollection({
      typeName: 'BlogPosts'
    })

    for (const item of items) {
      collection.addNode({
        title: item.title,
        url: item.link,
        created: item.pubDate,
        categories: item.categories,
        item: item
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
