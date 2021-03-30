import { RouteConfig } from 'vue-router'

type VueImport = Promise<typeof import('*.vue')>

const routes: Array<RouteConfig> = [
    /* {
        path: '/',
        redirect: '/blog',
    }, */
    {
        //path: '/blog',
        path: '/',
        name: 'blog',
        component: (): VueImport => import('~/pages/blog.vue'),
    },
    {
        path: '/projects',
        name: 'projects',
        component: (): VueImport => import('~/pages/projects.vue'),
    },
]

export default routes
