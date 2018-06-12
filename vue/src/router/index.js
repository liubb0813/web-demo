import Router from 'vue-router';

import Home from '../views/home.vue';
import Login from '../views/login.vue';

export default () => {
    return new Router({
        routes:[
            {
                path:'/',
                component:Home
            },
            {
                path:'/login',
                component:Login
            }
        ]
    });
}