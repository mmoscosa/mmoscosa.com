<template>
  <section class="bg-white border-b py-8">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Experience
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <div
        class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink clickeable"
        v-for="experience in $static.experience.edges"
        :key="experience.node.id"
        v-on:click="goToExperience(experience.node.id)"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <div class="flex flex-wrap no-underline hover:no-underline">
            <p class="w-full text-gray-600 text-xs md:text-sm px-6">
              <g-image
                class="w-32 py-2 "
                :src="experience.node.company.logo.file.url"
                alt="experience.company.name"
              />
            </p>
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              {{ experience.node.title }}
            </div>
            <p class="text-gray-800 text-base px-6 mb-5">
              {{
                parsedContent(experience.node.description)
                  | truncate(300, '...')
              }}
              <span v-if="experience.node.description.length > 300"
                ><br />&#171;<small>Read More</small>&#187;</span
              >
            </p>
          </div>
        </div>
        <div
          class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6"
        >
          <div class="flex">
            <ul class="flex">
              <li
                class="mr-6"
                v-for="highlight in experience.node.highlights"
                :key="highlight.title"
              >
                <g-image
                  class="w-10 h-10"
                  :src="highlight.logo.file.url"
                  alt="highlight.title"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section class="container max-w-10xl mx-auto m-8">
        <section class="bg-white py-8 px-10 mt-10">
          <Recommendations />
        </section>
      </section>
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Press and Talks
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>

      <table class="table-auto w-full text-gray-900">
        <tbody>
          <tr
            class="clickeable  transition-fade"
            v-for="edge in computedPress"
            :key="edge.node.id"
            v-on:click="goToSource(edge.node.link)"
          >
            <td class="px-4 py-2">
              <g-image
                class="rounded w-24"
                :src="edge.node.thumbnail.file.url"
              />
            </td>
            <td class="px-4 py-2">
              <span class="font-bold">{{ edge.node.title }}</span>
            </td>
            <td class="px-4 py-2">
              <small>({{ edge.node.source }})</small>
            </td>
            <td class="px-4 py-2">
              Published:
              {{ edge.node.published | moment('dddd, MMMM Do YYYY') }}
            </td>
          </tr>
        </tbody>
      </table>
      <a
        href="#"
        class="w-full my-2 text font-thin leading-tight text-center text-gray-800"
        v-on:click="toggleMore()"
        v-show="$static.press.edges.length > pressLimit"
      >
        Show {{ more === true ? 'less' : 'more' }}
      </a>
    </div>
  </section>
</template>

<static-query>
	query {
  experience:allContentfulExperience (sortBy: "updatedAt", order:DESC){
    edges{
      node{
				id,
        title,
        description,
        updatedAt,
				highlights{
          title,
          logo{
            file{
              url
            }
          },
          description
        },
        company{
          name,
          logo{
            file{
              url
            }
          }
        }
      }
    }
  },
  press: allContentfulPress (sortBy: "published", order:DESC){
    edges{
      node{
				id,
				title,
        source,
        published,
        link,
        thumbnail {
          file{
            url
          }
        },
      }
    }
  }
}
</static-query>

<script>
const htmlToText = require('html-to-text')
import Recommendations from '~/components/Recommendations.vue'

export default {
  data: function() {
    return {
      more: false,
      pressLimit: 7
    }
  },
  components: {
    Recommendations
  },
  computed: {
    computedPress: function() {
      if (this.more) {
        return this.$static.press.edges
      } else {
        return this.$static.press.edges.slice(0, this.pressLimit)
      }
    }
  },
  methods: {
    toggleMore: function() {
      this.more = !this.more
    },
    parsedContent: function(unparsedContent) {
      return htmlToText.fromString(unparsedContent)
    },
    goToSource: function(url) {
      var win = window.open(url, '_blank')
      win.focus()
    },
    goToExperience: function(id) {
      var url = '/experience?id=' + id
      var win = window.open(url, '_self')
      win.focus()
    }
  }
}
</script>

<style>
.transition-fade {
  transition: opacity 0.5s;
}
.clickeable {
  cursor: pointer;
}

.clickeable:hover {
  cursor: pointer;
  background-color: #efefef;
}
</style>
