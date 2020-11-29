import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import View_two from './components/View_two.vue'
import View_one from './components/View_one.vue'

Vue.use(Router)
Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/view_one',
      name:'view_one',
      component: View_one,
    },
    {
      path: '/view_two/:id',
      name:'view_two',
      component: View_two,
      props: true,
    },
  ],
   mode: 'history'
 });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
