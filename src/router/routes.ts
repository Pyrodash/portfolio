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
        name: 'blog',
        component: pages['/pages/blog.vue'],
    },
    {
        path: '/projects',
        name: 'projects',
        component: pages['/pages/projects.vue'],
    },
]

export default routes
