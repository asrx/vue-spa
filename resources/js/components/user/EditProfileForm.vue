<template>
    <form @submit.prevent="updateProfile">
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">用户名</label>

            <div class="col-md-6">
                <input id="name"
                       :class="{ 'is-invalid' : errors.has('name') }"
                       v-validate="{required: true, min: 4}"
                       data-vv-as="用户名"
                       v-model="name" type="text" class="form-control" name="name" autocomplete="name">

                <span class="invalid-feedback d-block" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮箱</label>

            <div class="col-md-6">
                <input id="email"
                       :class="{ 'is-invalid' : errors.has('email') }"
                       v-validate="{required: true, min: 4}"
                       data-vv-as="邮箱"
                       v-model="email" type="email" class="form-control" name="email" autocomplete="email">

                <span class="invalid-feedback d-block" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>


        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    更新用户资料
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import { ErrorBag } from 'vee-validate'
    import * as types from './../../store/mutation-type'

    export default {
        name: "EditProfileForm",
        created(){
            // this.$store.dispatch('setAuthUser')
        },
        computed:{
            name:{
                get(){
                    return this.$store.state.AuthUser.name
                },
                set(value){
                    this.$store.commit({
                        type: types.UPDATE_PROFILE_NAME,
                        value: value
                    })
                }
            },
            email:{
                get(){
                    return this.$store.state.AuthUser.email
                },
                set(value){
                    this.$store.commit({
                        type: types.UPDATE_PROFILE_EMAIL,
                        value: value
                    })
                }
            }
        },
        methods:{
            updateProfile(){
                const formData = {
                    name: this.name,
                    email: this.email
                }
                this.$store.dispatch('updateProfileRequest',formData).then(response => {
                    this.$router.push({name:'profile'})
                }).catch(error => {

                })
            }
        }
    }
</script>

<style scoped>

</style>
