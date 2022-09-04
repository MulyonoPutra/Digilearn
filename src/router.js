import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'home',
                component: () => import('./pages/Home.vue')
            },
            {
                path: 'course-list',
                name: 'courseList',
                component: () => import('../src/pages/course/CourseList.vue')
            },
            {
                path: 'course-add',
                name: 'courseAdd',
                component: () => import('../src/pages/course/CourseAdd.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
