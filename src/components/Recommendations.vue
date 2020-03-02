<template>
  <section>
    <div
      class="mx-auto p-1 bg-white"
      v-bind:class="{ 'bg-gray-100': inExperienceSection }"
    >
      <h1
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        What people say
      </h1>
      <div class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div class="container py-4">
        <agile :options="agileOptions">
          <div
            v-for="recommendation in recommendations"
            :key="recommendation.id"
          >
            <slides class="slide" :recInfo="recommendation" />
          </div>
        </agile>
      </div>
    </div>
    <div class="text-gray-700 w-full flex justify-center">
      <a
        href="https://www.linkedin.com/in/mmoscosa/"
        target="blank"
        class="no-underline text"
      >
        <font-awesome :icon="['fab', 'linkedin']" />
        read all recomendations
      </a>
    </div>
  </section>
</template>

<static-query>
query{
  allRecomendations:allContentfulRecomendations{
    edges{
      node{
        id,
        name,
        position,
        linkedin
        avatar{
          title,
          file{
            url
          }
        }
        recomendation,
        created
      }
    }
  }
}
</static-query>

<script>
import Slide from '~/components/Slide.vue'
import { VueAgile } from 'vue-agile'

export default {
  data() {
    return {
      agileOptions: {
        centerMode: true,
        autoplaySpeed: 5000,
        autoplay: true,
        infinite: true,
        navButtons: false,
        dots: false,
        slidesToShow: 1,
        responsive: [
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              navButtons: true,
              dots: true
            }
          }
        ]
      }
    }
  },
  components: {
    agile: VueAgile,
    slides: Slide
  },
  props: ['companyRecomendations'],
  computed: {
    recommendations: function() {
      var allRecommendations = this.companyRecomendations
        ? this.companyRecomendations
        : this.$static.allRecomendations.edges

      allRecommendations = this.randomList(allRecommendations)

      //if we are not filtering per company, then we must take node out of each element
      if (!this.companyRecomendations) {
        var tempAllRecomendations = []
        allRecommendations.forEach(recommendation => {
          tempAllRecomendations.push(recommendation.node)
        })
        allRecommendations = tempAllRecomendations
      }

      return allRecommendations
    },
    inExperienceSection: function() {
      if (this.$route.path == '/experience') {
        return true
      }
    }
  },
  methods: {
    randomList: function(rand) {
      return rand.sort(function() {
        return 0.5 - Math.random()
      })
    }
  }
}
</script>

<style>
.agile__actions {
  margin-top: 20px;
}
.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #eee;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button,
.agile__dot:hover button {
  background-color: #888;
}

.slide {
  display: block;
}
</style>
