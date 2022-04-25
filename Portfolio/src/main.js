import Vue from 'vue'
import App from './App.vue'

import AOS from 'aos'
import 'aos/dist/aos.css'
import VueParallaxJs from 'vue-parallax-js'
import VueScrollTo from 'vue-scrollto'
import VueRouter from 'vue-router'
import VTooltip from 'v-tooltip'

var VueCookie = require('vue-cookie');

Vue.use(VTooltip)
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(VueCookie);
Vue.use(VueParallaxJs)

Vue.config.productionTip = false

const routes = [
  { path: '/'}
]

const router = new VueRouter({
  mode:'history',
  routes // short for `routes: routes`
})

new Vue({
  el: '#container',
            data: {
                fullRepoName: '',
                username: '',
                repo: ''
            },
            methods: {
                changeRepo: function() {
                    var splitData = this.fullRepoName.split('/');
                    this.username = splitData[0];
                    this.repo = splitData[1];

                    console.group("Vue Data");
                    console.log("fullRepoName:", this.fullRepoName);
                    console.log("username:", this.username);
                    console.log("repo:", this.repo);
                    console.groupEnd("Vue Data");
                }
            },
  created () {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
