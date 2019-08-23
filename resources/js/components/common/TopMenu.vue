<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">
            <router-link to="/"> Vue-SPA </router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link v-if="!user.authenticated" to="/login" class="p-2 text-dark">
                登录
            </router-link>
            <router-link v-if="!user.authenticated" to="/register" class="p-2 text-dark">
                注册
            </router-link>
            <router-link v-if="user.authenticated" to="/profile" class="p-2 text-dark">
                个人中心
            </router-link>
            <a href="#" @click="logout" v-if="user.authenticated"  class="p-2 text-dark router-link-exact-active router-link-active">
                退出
            </a>
        </nav>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "TopMenu",
        computed: {
            ...mapState({
                user: state => state.AuthUser
            })
        },
        methods:{
            logout(){
                this.$store.dispatch('logoutRequest').then(response => {
                    this.$router.push({name: 'home'})
                })
            }
        }
    }
</script>

<style scoped>

</style>
