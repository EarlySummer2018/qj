import Vue from 'vue';
import router from './js/router.js';
import Calendar from 'vue2-datepick';
Vue.use(Calendar);
import VueRouter from 'vue-router';
Vue.use(VueRouter);
import index from './index.vue';


const vm = new Vue({
    el: '#app',
    data: {},
    methods: {},
    router,
    render: c => c(index),
})