<template>
  <!--Footer-->
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-2 mb-6">
          <a
            class="no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
            href="/"
            id="black"
          >
            <g-image
              src="~/assets/img/logo.png"
              width="32"
              class="inline-block"
            />
            Martin Moscosa
          </a>
        </div>

        <div class="flex-1" />

        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Social</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.linkedin.com/in/mmoscosa/"
                target="blank"
                class="no-underline hover:underline text-gray-800 text"
              >
                <font-awesome :icon="['fab', 'linkedin']" />
                Linkedin
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://twitter.com/mmoscosa"
                target="blank"
                class="no-underline hover:underline text-gray-800 text"
              >
                <font-awesome :icon="['fab', 'twitter']" />
                Twitter
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.instagram.com/mmoscosa/"
                target="blank"
                class="no-underline hover:underline text-gray-800 text"
              >
                <font-awesome :icon="['fab', 'instagram']" />
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <div class="flex-1">
          <p class="uppercase text-gray-500 md:mb-6">Thanks for Coming</p>
          <ul class="list-reset mb-6">
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://www.paypal.me/mmoscosa"
                target="blank"
                class="no-underline hover:underline text-gray-800 text"
              >
                Made with ❤️
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="https://gridsome.org"
                target="blank"
                class="no-underline hover:underline text-gray-800 text"
              >
                Using Gridsome
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              <a
                href="/"
                class="no-underline hover:underline text-gray-800 text"
              >
                © {{ new Date() | moment('YYYY') }} Martin Moscosa
              </a>
            </li>
            <li class="mt-2 inline-block mr-2 md:block md:mr-0">
              [![Netlify
              Status](https://api.netlify.com/api/v1/badges/f67e33df-0cfe-40bb-9b5d-074221926336/deploy-status)](https://app.netlify.com/sites/mmoscosa/deploys)
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
#black {
  color: #404040;
}
a:hover {
  color: #404040;
}
</style>
