// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/global.css'
import DefaultLayout from '~/layouts/Default.vue'
import VueTruncate from 'vue-truncate-filter'
import VueYouTubeEmbed from 'vue-youtube-embed'
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(require('vue-moment'))
  Vue.use(VueTruncate)
  Vue.use(VueYouTubeEmbed)
  // Add a meta tag
  head.meta.push(
    {
      name: 'og:title',
      content: 'Martin Moscosa'
    },
    {
      name: 'og:type',
      content: 'website'
    },
    {
      name: 'og:image',
      content:
        'https://media.licdn.com/dms/image/C4E03AQHpaBMnDPlMuw/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=6UUfAk8nRaciP4BRks4CEHMTC4xgaSxTT5-c2TjBSXU'
    },
    {
      name: 'og:url',
      content: 'https://www.mmoscosa.com'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:site',
      content: '@mmoscosa'
    },
    {
      name: 'twitter:creator',
      content: '@mmoscosa'
    },
    {
      name: 'twitter:summary',
      content: 'https://www.mmoscosa.com'
    }
  )
}
