<template>
    <form @submit.prevent="login">

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮箱</label>

            <div class="col-md-6">
                <input id="email"
                       :class="{ 'is-invalid' : errors.has('email') }"
                       v-validate="{required: true, min: 4}"
                       data-vv-as="邮箱"
                       value="xudong0226@163.com"
                       v-model="email" type="email" class="form-control" name="email" autocomplete="email">

                <span class="invalid-feedback" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{ 'is-invalid' : errors.has('password') }">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

            <div class="col-md-6">
                <input id="password"
                       :class="{ 'is-invalid' : errors.has('password') }"
                       v-validate="{ required: true, min: 6 }"
                       data-vv-as="密码"
                       value="passowrd"
                       v-model="password" type="password" class="form-control" name="password" autocomplete="new-password">
                <span class="invalid-feedback" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    登 录
                </button>
            </div>
        </div>
    </form>
</template>

<script>

    export default {
        name: "LoginForm",
        data(){
            return {
                email : '',
                password : '',
            }
        },
        methods:{
            login(){
                let formData = {
                    email: this.email,
                    password: this.password
                }

                // Submit 验证
                this.$validator.validateAll().then(result => {

                    this.$store.dispatch('loginRequest',formData).then(response => {
                        this.$router.push({name: 'profile'})
                    })

                })

            }
        }
    }
</script>

<style scoped>

</style>
