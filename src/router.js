import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Entry from './views/Entry.vue'
import NewEntry from './views/NewEntry.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/entry',
      name: 'entry',
      component: Entry
    },
    {
      path: '/new',
      name: 'new',
      component: NewEntry
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
