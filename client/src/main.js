import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './route'
import VueResource from 'vue-resource';

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  routes,
  mode: `history`  //To Remove the # tag from the url #IMP
});


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
