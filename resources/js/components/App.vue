<template>
    <div>
        <top-menu></top-menu>
        <transition name="fade" mode="out-in">
            <router-view></router-view>
        </transition>
    </div>
</template>

<script>
    import TopMenu from './common/TopMenu'
    import JwtToken from './../helpers/jwt'
    import Cookie from 'js-cookie'

    export default {
        created(){
            if (JwtToken.getToken()){
                this.$store.dispatch('setAuthUser')
            }else if (JwtToken.getAuthId()){
                this.$store.dispatch('refreshToken')
            }
        },
        components:{
            TopMenu
        }
    }
</script>
