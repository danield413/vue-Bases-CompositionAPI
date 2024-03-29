import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import(/* webpackChunkName: "counter" */ '../views/Counter.vue')
  },
  {
    path: '/users',
    name: 'users',
    component: () => import(/* webpackChunkName: "users" */ '../views/Users.vue')
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: () => import('../views/SearchPokemon.vue')
  },
  {
    path: '/poki/:id',
    name: 'pokemon-id',
    component: () => import('../views/Pokemon.vue')
  },
  {
    path: '/todo',
    name: 'todo',
    component: () => import('../views/TodoVuex.vue')
  },
  {
    path: '/slots',
    name: 'slots',
    component: () => import('../views/CustomSlots.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
