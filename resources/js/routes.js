import VueRouter from 'vue-router'
import Store from './store/index'
import JwtAuth from './helpers/jwt'

let routes = [
    {
        path: '/',
        name: 'home',
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
        meta:{requiresGuest: true}
    },
    {
        path: '/login',
        name: 'login',
        components: require('./components/login/Login'),
        meta:{requiresGuest: true}
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
    if (to.meta.requiresAuth) {
        if (Store.state.AuthUser.authenticated || JwtAuth.getToken()){
            return next()
        }else{
            return next({'name':'login'})
        }
    }

    if (to.meta.requiresGuest) {
        if (Store.state.AuthUser.authenticated || JwtAuth.getToken()){
            return next({'name':'home'})
        }
    }
    return next()
})

export default router
