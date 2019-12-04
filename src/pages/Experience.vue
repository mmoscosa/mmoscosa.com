<template>
  <Layout>
    <section class="bg-white" v-for="experience in $page.allExperiences.edges" :key="experience.node.id">
      <span v-if="isCurrentExperience(experience.node.id)">
        <div class="container max-w-10xl mx-auto m-8">
        <section class="bg-white  py-8 px-10 mt-10" id="breadcrumb">
          <ul class="flex">
            <li class="mr-6">
              <a class="text-blue-500 hover:text-blue-800" href="/">Home</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="#">&#187; Experience</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="#">&#187; {{experience.node.company.name}}</a>
            </li>
            <li class="mr-6">
              <a class="text-gray-400 cursor-not-allowed" href="#">&#187; {{experience.node.title}}</a>
            </li>
          </ul>
        </section>
      
        <div class="flex flex-wrap mb-4 bg-white">
          <div class="w-full p-2 bg-white sm:w-3/5">
            <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{{experience.node.title}}</h1>
            <p class="text-gray-800 text-base px-6 mb-5" v-html="experience.node.description"></p>
          </div>
          <div class="w-full p-4 bg-white sm:w-2/5">
            <CompanyAbout :company="experience.node.company" />
          </div>
        </div>
        </div>
        <Highlights :highlights="experience.node.highlights" />
      </span>
      
    </section>
    <CallToAction />
  </Layout>
</template>

<page-query>
  query{
    allExperiences:allContentfulExperience (sortBy: "updatedAt", order:DESC){
    edges{
      node{
				id,
        title,
        description,
        updatedAt,
				highlights{
          id,
          title,
          description,
          logo{
            file{
              url
            }
          }
        },
        company{
          name,
          description,
          logo{
            file{
              url
            }
          }
        }
      }
    }
  },
  }
</page-query>

<script>
  const htmlToText = require('html-to-text')
  import CompanyAbout from '~/components/experience/CompanyAbout.vue'
  import Highlights from '~/components/experience/Highlights.vue'
  import CallToAction from '~/components/CallToAction.vue'
  
  export default {
    metaInfo: {
      title: 'Experience',
    },
    data() {
      return {
        currentExperience: null
      }
    },
    computed: {},
    methods: {
      isCurrentExperience: function(current) {
        var isCurrent = false
        if (this.currentExperience == current) {
          isCurrent = true
        }
        return isCurrent
      },
      parsedContent: function(unparsedContent) {
        return htmlToText.fromString(unparsedContent)
      }
    },
    async mounted() {
      this.currentExperience = this.$route.query.id
    },
    components: {
      CompanyAbout,
      Highlights,
      CallToAction
    }
  }
</script>
