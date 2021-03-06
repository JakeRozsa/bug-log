import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import Home from './views/Home.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/buggy/:id',
      props: true,
      name: 'buggy',
      component: function () {
        // @ts-ignore
        return import('./views/Buggy.vue')
      }
    }
  ]
})
