import Vue from 'vue';
import Router from 'vue-router';
import Ind from '@/components/index/Index';
import Movies from '@/components/top250/movies';

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