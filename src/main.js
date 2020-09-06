import Vue from 'vue';
import router from './js/router.js';
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