import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Help from '@/views/Help.vue'
import Contactus from '@/views/Contactus.vue'
import Login from '@/views/Login.vue'
import Signup from '@/views/Signup.vue'
import Findbuddies from '@/views/Findbuddies.vue'
import Account from '@/views/Account.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/contactus',
    name: 'Contactus',
    component: Contactus
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/findbuddies',
    name: 'Findbuddies',
    component: Findbuddies
  },
  {
    path: '/user/:slug',
    name: 'Account',
    component: Account
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
