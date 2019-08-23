<template>
    <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 class="my-0 mr-md-auto font-weight-normal">
            <router-link to="/"> Vue-SPA </router-link>
        </h5>
        <nav class="my-2 my-md-0 mr-md-3">
            <router-link to="/login" class="p-2 text-dark">
                登录
            </router-link>
            <router-link to="/register" class="p-2 text-dark">
                注册
            </router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "TopMenu"
    }
</script>

<style scoped>

</style>
