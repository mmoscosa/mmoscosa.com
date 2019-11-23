<template>
  <div class="leading-normal tracking-normal text-white gradient" style="font-family: 'Source Sans Pro', sans-serif;">
    <Nav :siteName="$static.metadata.siteName" />
    <slot />
    <Footer />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
  import Nav from '~/components/Nav.vue'
  import Footer from '~/components/Footer.vue'
  export default {
    name: 'Layout',
    data() {
      return {}
    },
    components: {
      Nav,
      Footer
    }
  }
</script>

<style>
  .gradient {
    background: linear-gradient(90deg, #262626 0%, #404040 100%);
  }
</style>
