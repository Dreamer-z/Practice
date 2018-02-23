import Vue from 'vue';
import Router from 'vue-router';
import Ind from '@/components/index/Index';
import movieDetails from "@/components/common/movieDetails";
import Movies from '@/components/top250/movies';

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [{
            path: '/',
            name: 'index',
            component: Ind,
        },
        {
            path: "/movieDetails",
            name: 'movieDetails',
            component: movieDetails,
        },
        {
            path: '/movies',
            name: 'movies',
            component: Movies,
        }
    ]
});