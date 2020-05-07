// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/global.css'
import DefaultLayout from '~/layouts/Default.vue'
import VueTruncate from 'vue-truncate-filter'
import VueYouTubeEmbed from 'vue-youtube-embed'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { config, library } from '@fortawesome/fontawesome-svg-core'
import Hotjar from 'vue-hotjar'

import {
  faGithub,
  faTwitter,
  faMedium,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false
library.add(faGithub, faTwitter, faMedium, faLinkedin, faInstagram)

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(require('vue-moment'))
  Vue.use(VueTruncate)
  Vue.use(VueYouTubeEmbed)

  Vue.use(Hotjar, {
    id: process.env.GRIDSOME_HOTJAR_SITEID, // Hotjar Site ID
  })

  Vue.component('font-awesome', FontAwesomeIcon)

  // Add a meta tag
  head.meta.push(
    {
      name: 'og:title',
      content: 'Martin Moscosa',
    },
    {
      name: 'og:type',
      content: 'website',
    },
    {
      name: 'og:image',
      content:
        'https://media.licdn.com/dms/image/C4E03AQHpaBMnDPlMuw/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=6UUfAk8nRaciP4BRks4CEHMTC4xgaSxTT5-c2TjBSXU',
    },
    {
      name: 'og:url',
      content: 'https://www.mmoscosa.com',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:site',
      content: '@mmoscosa',
    },
    {
      name: 'twitter:creator',
      content: '@mmoscosa',
    },
    {
      name: 'twitter:summary',
      content: 'https://www.mmoscosa.com',
    }
  )
}
