import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Products from './pages/Products.vue'
import Services from './pages/Services.vue'
import Blog from './pages/Blog.vue'
import Post1 from './partials/posts/Post1.vue'
import Post2 from './partials/posts/Post2.vue'
import Post3 from './partials/posts/Post3.vue'
import Post4 from './partials/posts/Post4.vue'
import Post5 from './partials/posts/Post5.vue'
import Post6 from './partials/posts/Post6.vue'
import SignIn from './pages/SignIn.vue'
import SignUp from './pages/SignUp.vue'
import ResetPassword from './pages/ResetPassword.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/services', component: Services },
    { path: '/blog', component: Blog },
    { path: '/blog/detectores-de-rayos-x-alimentarios', component: Post1 },
    { path: '/blog/detector-rayos-x', component: Post2 },
    { path: '/blog/data-collection', component: Post3 },
    { path: '/blog/sector-portuario', component: Post4 },
    { path: '/blog/access-control', component: Post5 },
    { path: '/blog/pesaje-automatico', component: Post6 },
    { path: '/signin', component: SignIn },
    { path: '/contact', component: SignUp },   // 👈 donde estará tu #contact-form
    { path: '/reset-password', component: ResetPassword }
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // cuando usas back/forward
      return savedPosition
    }

    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }

    // por defecto: scroll arriba
    return { top: 0 }
  }
})

export default router
