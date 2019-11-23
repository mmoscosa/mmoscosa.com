<template>
  <Layout>
    <Hero />
    <About />
    <Experience />
    <Posts />
    <CallToAction />
  </Layout>
</template>

<script>
  import Hero from '~/components/Hero.vue'
  import About from '~/components/About.vue'
  import Posts from '~/components/Posts.vue'
  import Experience from '~/components/Experience.vue'
  import CallToAction from '~/components/CallToAction.vue'
  
  export default {
    metaInfo: {
      title: 'Welcome!'
    },
    components: {
      Hero,
      About,
      Posts,
      Experience,
      CallToAction
    }
  }
</script>

<style>
  .home-links a {
    margin-right: 1rem;
  }
</style>
