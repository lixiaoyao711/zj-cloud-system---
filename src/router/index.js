import { createRouter, createWebHashHistory } from 'vue-router';
import home from '../views/Home.vue';

const routes = [
    {
        path: '/',
        redirect: '/home',
    },
    {
        path: '/home',
        name: 'home',
        component: home,
        redirect: '/majorApplication',
        children: [
            {
                path: '/majorApplication',
                name: 'majorApplication',
                component: () => import('@/views/MajorApplication.vue'),
                meta: { useTab: true, tabName: '重大应用' },
            },
            {
                path: '/collaborativeOffice',
                name: 'collaborativeOffice',
                component: () => import('@/views/collaborativeOffice'),
                meta: { useTab: true, tabName: '协同办公' },
            },
            {
                path: '/taskExecution',
                name: 'taskExecution',
                component: () => import('@/views/taskExecution'),
                meta: { useTab: true, tabName: '协同办公' },
            },
        ],
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
