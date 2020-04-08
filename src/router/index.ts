import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

const routes: RouteConfig[] = [
    {
        path: '/',
        component: () => import('../views/Index.vue'),
        children: [
            {
                path: 'tinymce',
                name: 'tinymce',
                component: () => import('../views/Tinymce.vue')
            },
            {
                path: 'upload',
                name: 'upload',
                component: () => import('../views/Upload.vue')
            },
            {
                path: 'choose',
                name: 'choose',
                component: () => import('../views/Choose.vue')
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
