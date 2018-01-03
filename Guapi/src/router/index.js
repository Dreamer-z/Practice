import Vue from 'vue';
import Router from 'vue-router';
import Ind from '@/components/Index';
import Movies from '@/components/movies';

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Ind
    }, {
        path: '/movies',
        name: 'movies',
        component: Movies,
    }]
});