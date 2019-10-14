import Vue from 'vue'
import App from './App.vue'
import AppHeader from './components/app-header'
import VueRouter from 'vue-router'
import CategoriesBar from './components/categories-bar'


Vue.component('AppHeader', AppHeader);
Vue.component('CategoriesBar',CategoriesBar);


Vue.use(VueRouter);

const router = new VueRouter();


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
