<template>
  <!--Nav-->
  <nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex items-center">
        <!-- {{siteName}} -->
      </div>

      <div class="block lg:hidden pr-4">
        <a
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 mailtoui"
          :href="mailtoHref"
        >
          ✉️
        </a>
      </div>

      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <li class="mr-3">
            <!-- <a
						class="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4"
						href="#">
						Calendly?
					</a> -->
          </li>
        </ul>
        <a
          id="navAction"
          class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full mt-4 lg:mt-0 py-4 px-8 shadow opacity-75 mailtoui"
          :href="mailtoHref"
          >Contact me ✉️</a
        >
      </div>
    </div>

    <!-- <hr class="border-b border-gray-100 opacity-25 my-0 py-0" /> -->
  </nav>
</template>

<script>
import MailtoUI from 'mailtoui/dist/mailtoui-min.js'

export default {
  data: () => ({
    email: 'martin@mmoscosa.com',
  }),
  props: ['siteName'],
  mounted() {
    MailtoUI.run({
      title: 'Keep in touch, just saying',
      buttonIcon1: 'https://image.flaticon.com/icons/svg/104/104069.svg',
      //disableOnMobile: false,
    }) // <--- Run MailtoUI manually
  },
  computed: {
    mailtoHref: function() {
      return 'mailto:' + this.email + '?subject=Hi%20there!'
    },
  },
  methods: {},
}
</script>

<style></style>
