import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/home.vue';
import Login from '../views/login.vue';

Vue.use(Router)

export default () => {
    return new Router({
        routes: [
            {
                path: '/',
                component: Home
            },
            {
                path: '/login',
                component: Login
            }
        ],
        mode: 'history',
        scrollBehavior(to, from, stopPosition) {
            if (stopPosition) {
                return stopPosition;
            } else {
                return {x: 0, y: 0};
            }
        }
    });
}