require('./bootstrap');

window.Vue = require('vue');

import VueRouter from 'vue-router'
import router from './routes'
import store from './store/index'
import JwtToken from './helpers/jwt'
import App from './components/App'

import zh_CN from './locale/zh_CN';
import VeeValidate, { Validator } from 'vee-validate';

axios.interceptors.request.use(config => {
    if (JwtToken.getToken()) {
        config.headers['Authorization'] = 'Bearer ' + JwtToken.getToken()
    }
    return config
},error => {
    return Promise.reject(error)
})

Vue.use(VueRouter)

Vue.use(VeeValidate);

Validator.localize('zh_CN', zh_CN);

// 全局
Vue.component('app',App)

new Vue({
    el: '#app',
    router,
    store
});
