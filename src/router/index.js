import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Notes from '../views/Notes.vue'
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
  {
    path: '/notes',
    name: 'Notes',
    component: Notes,
    meta: { title: 'Notes - marek onPC' }
  },
  {
    path: '/about',
    name: 'About',
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
