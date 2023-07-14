import { createRouter, createWebHistory } from 'vue-router'
import firebase from 'firebase/compat/app'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('../views/LoginPage.vue')
    },
    {
      path: '/base',
      name: 'base',
      redirect: { path: '/home' },
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../layout/baseLayout.vue'),
      meta: {
        requiresAuth: true
      },

      children: [
        {
          path: '/home',
          name: 'home',
          component: () => import('../views/HomeView.vue')
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('../views/AboutView.vue')
        }
      ]
    }
  ]
})

// beforeEach é uma função/hook que será executado antes de cada rota iniciar. O primeiro argumento é a rota de destino e o segundo a rota de origem.

// router.beforeEach((to, from, next) => {
//   const currentUser = firebase.auth().currentUser
//   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)

//   if (requiresAuth && !currentUser) next('login')
//   else if (!requiresAuth && currentUser) next('home')
//   else next()
// })

export default router
