import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodoView from '../views/TodoView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/todo',
      name: 'todo',
      component: TodoView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: () => import('../views/EditView.vue')
    },
    {
      path: '/:catchAll(.*)', // atau `:pathMatch(.*)*`
      name: 'NotFound',
      component: () => import('../views/NotFound.vue')
   },
  ]
})

export default router
