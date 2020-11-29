import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Post from './components/Post.vue'
import Hello from './components/Hello.vue'

Vue.use(Router)
Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/hello',
      name:'hello',
      component: Hello,
    },
    {
      path: '/post/:id',
      name:'post',
      component: Post,
      props: true,
    },
  ],
   mode: 'history'
 });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
