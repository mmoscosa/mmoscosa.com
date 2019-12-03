<template>
  <section class="bg-gray-100 py-8">
    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">Highlights</h1>
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <div class="w-full md:w-1/3 p-6 flex flex-col flex-grow flex-shrink clickeable" v-for="highlight in highlights" :key="highlight.id">
        <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow">
          <div class="flex flex-wrap no-underline hover:no-underline">
            <div class="w-full font-bold text-xl text-gray-800 px-6">
              <g-image class="w-10 pt-2" :src="highlight.logo.file.url" :alt="highlight.title" /> {{highlight.title}}
            </div>
            <p class="text-gray-800 text-base px-6 mb-5" v-html="highlight.description"></p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    props: ['highlights']
  }
</script>

<style>
  
</style>
