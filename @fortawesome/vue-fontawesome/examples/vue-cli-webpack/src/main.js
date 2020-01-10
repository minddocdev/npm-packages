import Vue from 'vue'
import App from './App'
import { library } from '@minddocdev/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faArchive } from '@minddocdev/free-solid-svg-icons'
import { faComment } from '@minddocdev/free-regular-svg-icons'
import { faTwitter } from '@minddocdev/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@minddocdev/vue-fontawesome'

library.add(
  faCoffee,
  faChild,
  faCircle,
  faArchive,
  faComment,
  faTwitter
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
