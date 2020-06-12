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

  api.loadSource(async (actions) => {
    const rssParser = new RssParser()
    const { items } = await rssParser.parseURL(
      'https://medium.com/feed/@mmoscosa'
    )

    const tweets = await rssParser.parseURL(
      'http://fetchrss.com/rss/5ee2a5388a93f8f14e8b45695ee2a5238a93f8f14e8b4567.xml'
    )

    const videos = await rssParser.parseURL(
      'https://www.youtube.com/feeds/videos.xml?channel_id=UCfZfBpohRrYqLZEHymDNc8g'
    )

    const twitterCollection = actions.addCollection({
      typeName: 'twitterPosts',
    })

    const postCollection = actions.addCollection({
      typeName: 'BlogPosts',
    })

    const videoCollection = actions.addCollection({
      typeName: 'youTubeVideos',
    })

    for (let twKey in tweets) {
      if (tweets.hasOwnProperty(twKey)) {
        twitterCollection.addNode({
          items: tweets['items'],
          image: tweets['image'],
          title: tweets['title'],
          link: tweets['link'],
          description: tweets['content'],
        })
      }
    }

    for (let ytKey in videos) {
      if (videos.hasOwnProperty(ytKey)) {
        videoCollection.addNode({
          link: videos['videos'],
          items: videos['items'],
          title: videos['title'],
          feedUrl: videos['feedUrl'],
        })
      }
    }

    for (const item of items) {
      postCollection.addNode({
        title: item.title,
        url: item.link,
        created: item.pubDate,
        categories: item.categories,
        item: item,
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
