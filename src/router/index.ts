import { createRouter, createWebHistory } from 'vue-router'
import { authGuard } from './guards/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: () => import('@/views/index/IndexView.vue')
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import('@/views/profile/ProfileView.vue'),
      meta: { authRequired: true }
    },
    {
      path: '/signout',
      name: 'Sign out',
      component: () => import('@/views/signout/SignoutView.vue')
    }
  ]
})

router.beforeEach(authGuard)

export default router
