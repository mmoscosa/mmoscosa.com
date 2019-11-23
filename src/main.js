// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import './assets/css/global.css'
import DefaultLayout from '~/layouts/Default.vue'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  var filter = function(text, length, clamp) {
    clamp = clamp || '...'
    var node = document.createElement('div')
    node.innerHTML = text
    var content = node.textContent
    return content.length > length ? content.slice(0, length) + clamp : content
  }

  Vue.filter('truncate', filter)
  Vue.use(require('vue-moment'))
}
