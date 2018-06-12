import Router from 'vue-router';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

Vue.use(Router)

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
});
