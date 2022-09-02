import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);
export default new VueRouter({
    routes: [
        {
            path: '/',
            component: () => import('./components/main.vue'),
            name: 'main',
            children: [
                {
                    path: 'avatar',
                    name: 'avatar',
                    component: () => import('./components/avatar.vue')
                },
                {
                    path: 'introduction',
                    name: 'introduction',
                    component: () => import('./components/introduction.vue')
                },
                {
                    path: 'skill',
                    name: 'skill',
                    component: () => import('./components/skill.vue')
                },
                {
                    path: 'project',
                    name: 'project',
                    component: () => import('./components/project.vue')
                },
                {
                    path: 'hobbys',
                    name: 'hobbys',
                    component: () => import('./components/hobbys.vue')
                },
                {
                    path: 'contact',
                    name: 'contact',
                    component: () => import('./components/contact.vue')
                },
                {
                    path: '/', redirect: '/avatar'
                }
            ]
        },

    ]
})