<template>
  <blockquote
    class="px-6 mx-4 max-w-sm overflow-hidden recomendation"
    v-on:click="goToUser(recInfo.linkedin)"
  >
    <div class="blockquote">
      <p class="text-sm">
        {{ parsedContent(recInfo.recomendation) | truncate(400, '...') }}
      </p>
    </div>
    <span class="text-gray-600 text-xs text-right italic float-right">{{
      recInfo.created | moment('MMMM Do YYYY')
    }}</span>
    <div class="flex items-center mt-8">
      <img
        class="w-10 h-10 rounded mr-4"
        :src="recInfo.avatar.file.url"
        :alt="recInfo.name"
      />
      <div class="text-sm">
        <p class="text-gray-900 leading-none">{{ recInfo.name }}</p>
        <p class="text-gray-600 text-xs">
          {{ recInfo.position }}
        </p>
      </div>
    </div>
  </blockquote>
</template>

<script>
const htmlToText = require('html-to-text')
export default {
  props: ['recInfo'],
  methods: {
    parsedContent: function(unparsedContent) {
      return htmlToText.fromString(unparsedContent)
    },
    goToUser: function(url) {
      var win = window.open(url)
      win.focus()
    }
  }
}
</script>

<style>
:root {
  --text-color: #4a5568;
}
.recomendation {
  -webkit-filter: grayscale(80%); /* Safari 6.0 - 9.0 */
  filter: grayscale(80%);
  cursor: pointer;
}
.recomendation:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
.blockquote {
  position: relative;
  min-height: 250px;
  vertical-align: top;
  color: var(--text-color);
  padding: 30px 0;
  width: 100%;
  z-index: 1;
  margin-top: 30px;
  align-self: center;
  border-top: solid 1px;
  font-style: italic;
}
.blockquote:before {
  position: absolute;
  content: '“';
  color: var(--text-color);
  font-size: 10rem;
  line-height: 0;
  top: 25px;
  left: 5px;
}
</style>
