import Vue from 'vue'
import App from './components/App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'

const router = new VueRouter({
  mode: 'history',
  //modes - essentially makes sure that the app doesnt refresh when hits a new endpoint
  //hash mode - uses hash on urls to specify in app change funtionality
  //history mode - does not use hash instead uses alternative browser methods to achieve the same effect
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin }
  ]
})

new Vue({
  el: "#app",
  router,
  render: h => h(App)
})
