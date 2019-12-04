<template>
  <Layout>
    <section 
      v-for="experience in $page.allExperiences.edges" 
      :key="experience.node.id"
      v-show="experience.node.id === currentExperience">
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
      <div class="flex mb-4 bg-white">
        <div class="w-3/5 p-2 bg-white">
          <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">{{experience.node.title}}</h1>
          <p class="text-gray-800 text-base px-6 mb-5" v-html="experience.node.description"></p>
        </div>
        <div class="w-2/5 p-4 bg-white">
          <CompanyAbout :company="experience.node.company" />
        </div>
      </div>
      <Highlights :highlights="experience.node.highlights"/>
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
      title: 'Experience'
    },
    data() {
      return {
        currentExperience: null
      }
    },
    methods:{
      parsedContent: function(unparsedContent) {
				return htmlToText.fromString(unparsedContent)
			},
    },
    async mounted() {
      const {
        id
      } = this.$route.params
  
      this.currentExperience = id
    },
    components: {
      CompanyAbout,
      Highlights,
      CallToAction
    }
  }
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>
