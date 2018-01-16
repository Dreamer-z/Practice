// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
// require styles
import 'swiper/dist/css/swiper.css';

Vue.config.productionTip = false;
Vue.use(YDUI);
Vue.use(VueAwesomeSwiper);
// axios全局配置
// Vue.prototype.$http = axios;
// axios.defaults.baseURL = api;
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['XPS-Version'] = '1.0.0';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: {
        App,
    }
});