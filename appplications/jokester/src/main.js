import Vue from 'vue'
import App from './components/App.vue'

import store from './store'  //no need to specify index.js file bc it is automatically found as the default javascript file

new Vue({
  el: '#app',
  store, //pass in the store to the vue instance
  render: h => h(App)
})
