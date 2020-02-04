<template>
  <div
    class="mx-full bg-white shadow-lg rounded-lg overflow-hidden"
    id="tweet"
    v-on:click="goToTwitter('https://twitter.com/mmoscosa')"
  >
    <div class="sm:flex sm:items-center px-6 py-4">
      <g-image
        class="block mx-auto sm:mx-0 sm:flex-shrink-0 h-12 sm:h-20 rounded-full"
        :src="$static.tweets.edges[0].node.image.url"
        alt="@mmoscosa twitter profile photo"
      />

      <div class=" sm:mt-0 sm:ml-4 text-center sm:text-left">
        <p class="text-xl leading-tight text-gray-800">
          <font-awesome :icon="['fab', 'twitter']" /> Martin Moscosa
        </p>
        <p class="text-sm leading-tight text-gray-600">
          {{ lastTweet.title | truncate(140, '...') }}
        </p>
      </div>
    </div>
  </div>
</template>
<static-query>
query{
  tweets:allTwitterPosts{
    edges{
      node{
        id,
        feedUrl,
        image{
          url
        }
        title,
        description,
        language,
        ttl,
        items{
          title,
          creator,
          pubDate,
          content
        }
      }
    }
  }
}
</static-query>
<script>
export default {
  computed: {
    lastTweet: function() {
      var lastTweet = {}
      var allTweets = this.$static.tweets.edges[0].node.items
      for (const property in allTweets) {
        var author = allTweets[property].creator
        if (author.includes('mmoscosa')) {
          lastTweet.title = allTweets[property].title
          lastTweet.pubDate = allTweets[property].pubDate
          break
        }
      }
      return lastTweet
    }
  },
  methods: {
    goToTwitter: function(url) {
      var win = window.open(url)
      win.focus()
    }
  }
}
</script>

<style>
#tweet {
  cursor: pointer;
}

#tweet:hover {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.2),
    0 4px 6px -2px rgba(0, 0, 0, 0.1);
}
</style>
