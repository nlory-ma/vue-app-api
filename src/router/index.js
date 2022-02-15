import * as VueRouter from 'vue-router' 

import HomePage from '../pages/HomePage.vue'
import NotFoundPage from '../pages/NotFound.vue'

// Lazy Loading Routes
const UserDetails = () => import('../pages/UserDetails.vue')

const router = VueRouter.createRouter({
    linkExactActiveClass: 'text-green-500 border-green-500 dark:text-green-200 dark:border-green-200',
    history: VueRouter.createWebHistory(),
    routes: [
        {
            path: '/notfound',
            name: 'NotFound',
            component: NotFoundPage
        },
        {
            path: '/:wrongPath(.*)',
            redirect: (to) => {
                return { name: 'NotFound', params: { wrongPath: to.params.wrongPath }}
            }
        },
        {
            path: '/',
            name: 'Home',
            component: HomePage,
            props: true
        },
        {
            path: '/users/:id',
            name: 'UserDetails',
            component: UserDetails
        },

    ]
})

export default router