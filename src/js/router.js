import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '../components/HomePage.vue';
import FillPage from '../components/FillingPage.vue';


const router = new VueRouter({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: HomePage },
        {path:'/home/filling', component: FillPage}
    ]
});
export default router;