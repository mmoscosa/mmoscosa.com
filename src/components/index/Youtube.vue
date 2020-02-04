<template>
  <section>
    <div
      v-for="video in videos"
      :key="video.id"
      class="w-full md:w-1/3 p-3 inline-block"
    >
      <youtube
        :video-id="video.id"
        :player-vars="{
          allowfullscreen: 1,
          constrols: 0,
          allow:
            'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        }"
        class="embed-responsive aspect-ratio-16"
      ></youtube>
    </div>
    <p
      class="w-full text font-thin leading-tight text-center text-gray-600 clickeable"
      v-on:click="toggleMore()"
      v-show="videos.length >= videosLimit"
    >
      Show {{ more === true ? 'less' : 'more' }}
    </p>

    <div class="w-full flex justify-center pt-10">
      <g-image src="~/assets/img/logo.png" width="32" />
    </div>
  </section>
</template>

<static-query>
query{
	youtubevids: allYouTubeVideos{
  edges{
    node{
      id,
      title,
      feedUrl,
      items{
        author,
        link,
        title
      }
    }
  }
}
}
</static-query>

<script>
export default {
  data: function() {
    return {
      more: false,
      videosLimit: 3
    }
  },
  computed: {
    videos: function() {
      var parsedVideos = []
      var ytVideos = this.$static.youtubevids.edges[0].node.items

      for (const property in ytVideos) {
        const tempVideoParsed = {}
        tempVideoParsed.title = ytVideos[property].title
        tempVideoParsed.link = ytVideos[property].link
        var parts = tempVideoParsed.link.split('=')
        var lastSegment = parts.pop() || parts.pop()
        tempVideoParsed.id = lastSegment
        parsedVideos.push(tempVideoParsed)
      }
      if (this.more) {
        return parsedVideos
      } else {
        return parsedVideos.slice(0, this.videosLimit)
      }
      return parsedVideos
    }
  },
  methods: {
    toggleMore: function() {
      this.more = !this.more
    }
  }
}
</script>

<style></style>
