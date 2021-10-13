import { RouteRecordRaw } from 'vue-router'

const pages = import.meta.glob('/pages/**/*.vue')

const routes: Array<RouteRecordRaw> = [
    /* {
        path: '/',
        redirect: '/blog',
    }, */
    {
        //path: '/blog',
        path: '/',
        name: 'Blog',
        component: pages['/pages/blog.vue'],
    },
    {
        path: '/projects',
        name: 'Projects',
        component: pages['/pages/projects.vue'],
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: pages['/pages/not_found.vue'],
        meta: { invisible: true },
    },
]

export default routes
