import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faChevronLeft, faChevronRight, faAngleDoubleLeft, faAngleDoubleRight, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faTwitterSquare, faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import router from './router'

library.add(faChevronLeft, faChevronRight, faAngleDoubleLeft, faAngleDoubleRight, faHeart)
library.add(faTwitterSquare, faLinkedin, faGithubSquare)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
