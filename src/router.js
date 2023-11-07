import {createRouter} from 'vue-router'

const routes = [
    {path: '/faqs', component: () => import('./pages/FAQs.vue')},
    {path: '/profile', component: () => import('./pages/Profile.vue')},
    {path: '/', component: () => import('./pages/FFCRAInformation.vue')},

]

export default function (history) {
    const router = createRouter({
        history,
        routes
    })
    router.beforeEach((to, from) => {
        const query = from.query
        if (query.email)
            to.query.email = query.email
        return true
    })
    return router
}