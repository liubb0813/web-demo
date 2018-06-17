import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import App from './App.vue';
import createRouter from './router';
import createStore from './store/store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = createRouter();
const store = createStore();

router.beforeEach((to, from, next) => {
    console.log('before each');
    next();
});

router.beforeResolve((to, from, next) => {
    console.log('before resolve');
    next();
});

router.afterEach((to, from) => {
    console.log('after each');
});

new Vue({
    el: '#app',
    router,
    store,
    components: {App},
    template: '<App/>'
});

