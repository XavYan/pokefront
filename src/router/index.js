import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import view404 from '../views/404.vue'

Vue.use(VueRouter)

const onlyInDevelopment = [
  {
    path: '/search',
    name: 'Search',
    component: Search,
    order: 1
  }
]

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    order: 2,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

if (process.env.NODE_ENV === 'development') routes.push(...onlyInDevelopment)

routes.push({ path: '*', component: view404 })

const router = new VueRouter({
  routes
})

// export default router
export { router, routes }
