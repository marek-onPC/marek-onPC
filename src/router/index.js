import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
// import Programming from '../views/Programming.vue'
// import Baking from '../views/Baking.vue'
// import Trips from '../views/Trips.vue'
import About from '../views/About.vue'
import Post from '../views/Post.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: 'Home - marek onPC' }
  },
  // {
  //   path: '/programming',
  //   name: 'Programming',
  //   component: Programming,
  //   meta: { title: 'Programming - marek onPC' }
  // },
  // {
  //   path: '/baking',
  //   name: 'Baking',
  //   component: Baking,
  //   meta: { title: 'Baking - marek onPC' }
  // },
  // {
  //   path: '/trips',
  //   name: 'Trips',
  //   component: Trips,
  //   meta: { title: 'Trips - marek onPC' }
  // },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About,
    meta: { title: 'About - marek onPC' }
  },
  {
    path: '/post',
    name: 'Post',
    component: Post,
    meta: { title: 'Post - marek onPC' }
  },
  {
    path: '/404',
    component: NotFound,
    meta: { title: '404 - marek onPC' }
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
