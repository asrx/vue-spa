import VueRouter from 'vue-router'
import Store from './store/index'
import JwtAuth from './helpers/jwt'

let routes = [
    {
        path: '/',
        components: require('./components/pages/Home'),
        meta:{}
    },
    {
        path: '/about',
        components: require('./components/pages/About'),
        meta:{}
    },
    {
        path: '/posts/:id',
        name: 'posts',
        components: require('./components/posts/Post'),
        meta:{}
    },
    {
        path: '/register',
        name: 'register',
        components: require('./components/register/Register'),
        meta:{}
    },
    {
        path: '/login',
        name: 'login',
        components: require('./components/login/Login'),
        meta:{}
    },
    {
        path: '/confirm',
        name: 'confirm',
        components: require('./components/confirm/Email'),
        meta:{}
    },
    {
        path: '/profile',
        name: 'profile',
        components: require('./components/user/Profile'),
        meta:{
            requiresAuth: true
        }
    }
]

const router = new VueRouter({
    mode:'history',
    routes
})

// 检测是否登录
router.beforeEach((to,from,next) => {
    if (to.requiresAuth) {
        if (Store.state.authenticated || JwtAuth.getToken()){
            return next()
        }else{
            return next({'name':'login'})
        }
    }
    return next()
})

export default router
