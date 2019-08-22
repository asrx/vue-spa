<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header"><h4>{{ post.title }}</h4></div>
                    <div class="card-body">
                        {{ post.body }}
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Post",
        data(){
            return {
                post: []
            }
        },
        mounted() {
            axios.get('/api/posts/' + this.$route.params.id).then(response=>{
                this.post = response.data
            })
        }
    }
</script>

<style scoped>

</style>
