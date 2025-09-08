import { createRouter, createWebHashHistory } from 'vue-router'
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
import Post7 from './partials/posts/Post7.vue'
import Post8 from './partials/posts/Post8.vue'
import Post9 from './partials/posts/Post9.vue'
import Contact from './pages/Contact.vue'
import About from './pages/About.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: Home },
    { path: '/products', component: Products },
    { path: '/services', component: Services },
    { path: '/blog', component: Blog },
    { path: '/about', component: About },
    { path: '/blog/detectores-de-rayos-x-alimentarios', component: Post1 },
    { path: '/blog/detector-rayos-x', component: Post2 },
    { path: '/blog/data-collection', component: Post3 },
    { path: '/blog/sector-portuario', component: Post4 },
    { path: '/blog/access-control', component: Post5 },
    { path: '/blog/pesaje-automatico', component: Post6 },
    { path: '/blog/monitorizacion-remota', component: Post7 },
    { path: '/blog/industrial-agent-ai', component: Post8 },
    { path: '/blog/app-smart-pay', component: Post9 },
    { path: '/contact', component: Contact },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }

    if (to.hash) {
      const el = document.querySelector(to.hash)
      if (el) {
        const y = el.offsetTop - 80 
        window.scrollTo({ top: y, behavior: 'smooth' })
        return 
      }
      return { top: 0 }
    }

    return { top: 0 }
  }
})

export default router
