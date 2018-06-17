import Router from 'vue-router';
import routes from './routes.js'

export default () => {
    return new Router({
        routes: routes,
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