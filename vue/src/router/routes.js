// import Home from '../views/home.vue';
// import Login from '../views/login.vue';

export  default [
    {
        path: '/index',
        component: () => import('../views/home.vue'),
        props:(route) => ({
            userId:route.query.userId
        })
    },
    {
        path: '/login',
        component: () => import('../views/login.vue')
    }
]