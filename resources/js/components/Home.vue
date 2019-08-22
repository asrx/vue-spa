<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="my-3 p-3 bg-white rounded box-shadow">
                    <h6 class="border-bottom border-gray pb-2 mb-0">文章列表页</h6>
                    <div v-for="post in posts" :key="post.id"  class="media text-muted pt-3">
                        <p class="media-body pb-3 mb-0 small lh-125 border-bottom border-gray">
                            <strong class="d-block text-gray-dark">
                                <router-link :to="{ name: 'posts', params: {id: post.id} }">{{ post.title }}</router-link>
                            </strong>
                            {{ post.body }}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                posts:[]
            }
        },
        mounted() {
            axios.get('/api/posts').then(response => {
                this.posts = response.data.data
            })
            console.log('Component mounted.')
        }
    }
</script>
