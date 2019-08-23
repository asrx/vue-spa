<template>
    <form @submit.prevent="register">
        <div class="form-group row">
            <label for="name" class="col-md-4 col-form-label text-md-right">用户名</label>
            <div class="col-md-6">
                <input id="name"
                       :class="{ 'is-invalid' : errors.has('name') }"
                       v-validate="{required: true, min: 4}"
                       v-model="name" type="text" class="form-control" name="name" autocomplete="name" autofocus>
                <span class="form-check-label" v-show="errors.has('name')">{{errors.first('name')}}</span>
            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">邮箱</label>

            <div class="col-md-6">
                <input id="email"
                       :class="{ 'is-invalid' : errors.has('email') }"
                       v-validate="{required: true, min: 4}"
                       v-model="email" type="email" class="form-control" name="email" autocomplete="email">

                <span class="form-check-label" v-show="errors.has('email')">{{errors.first('email')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{ 'is-invalid' : errors.has('password') }">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

            <div class="col-md-6">
                <input id="password"
                       :class="{ 'is-invalid' : errors.has('password') }"
                       v-validate="{ required: true, min: 6 }"
                       v-model="password" type="password" class="form-control" name="password" autocomplete="new-password">
                <span class="form-check-label" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>

        <div class="form-group row" :class="{ 'is-invalid' : errors.has('password_confirmation') }">
            <label for="password-confirm" class="col-md-4 col-form-label text-md-right">确认密码</label>

            <div class="col-md-6">
                <input id="password-confirm"
                       :class="{ 'is-invalid' : errors.has('password_confirmation') }"
                       v-validate="{required: true, min: 6, confirmed: password}"
                       type="password" class="form-control" name="password_confirmation" autocomplete="new-password">

                <span class="form-check-label" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    注 册
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    export default {
        name: "RegisterForm",
        data(){
            return {
                name : '',
                email : '',
                password : '',
            }
        },
        methods:{
            register(){
                let formData = {
                    name : this.name,
                    email: this.email,
                    password: this.password
                }
                console.log(formData);
                axios.post('/api/register',formData).then(response => {
                    console.log('Register Successed!')

                    this.$router.push({name:'confirm'})
                })
            }
        }
    }
</script>

<style scoped>

</style>
