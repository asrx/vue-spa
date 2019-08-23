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
            <router-link v-if="user.authenticated" to="#" class="p-2 text-dark">
                <a href="#123">退出</a>
            </router-link>
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
        }
    }
</script>

<style scoped>

</style>
