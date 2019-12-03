<template>
  <section class="bg-white">
    <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <g-image class="w-full p-6" :src="company.logo.file.url" :alt="company.name" />
      <div class="px-4 py-4">
        <p class="text-gray-700 text-sm" v-html="company.description"></p>
      </div>
    </div>
  
  </section>
</template>

<script>
  export default {
    props: ['company']
  }
</script>

<style>
  
</style>
