import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '@/views/HomeView.vue';
import PruebaView from '@/views/PruebaView.vue';

const routes = [
    {
        path:'/',
        name:'HomeVista',
        component:HomeView
    },
    {
        path:'/Prueba',
        name:'PruebaVista',
        component:PruebaView,
    }
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;