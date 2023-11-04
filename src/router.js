import { createRouter } from 'vue-router'

const routes = [
  { path: '/faqs', component: () => import('./pages/FAQs.vue') },
  { path: '/profile', component: () => import('./pages/Profile.vue') },
  { path: '/', component: () => import('./pages/FFCRAInformation.vue') },

]

export default function(history) {
    return createRouter({
      history,
      routes
    })
  }