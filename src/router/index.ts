import { createRouter, createWebHistory } from 'vue-router'
import Movies from '@/components/NavItems/Movies.vue'
import Home from '@/components/NavItems/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/Home',
      name: 'home',
      component: Home,
    },
    {
      path: '/Movies',
      name: 'Movies',
      component: Movies,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
