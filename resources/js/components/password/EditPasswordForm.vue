<template>
    <form @submit.prevent="updatePassword">
        <div class="form-group row">
            <label for="password" class="col-md-4 col-form-label text-md-right">密码</label>

            <div class="col-md-6">
                <input id="password"
                       :class="{ 'is-invalid' : errors.has('name') }"
                       v-validate="{required: true, min: 6}"
                       data-vv-as="密码"
                       v-model="password" type="password" class="form-control" name="password" autocomplete="password">

                <span class="invalid-feedback d-block" v-show="errors.has('password')">{{errors.first('password')}}</span>
            </div>
        </div>

        <div class="form-group row">
            <label for="email" class="col-md-4 col-form-label text-md-right">确认密码</label>

            <div class="col-md-6">
                <input id="email"
                       :class="{ 'is-invalid' : errors.has('password_confirmation') }"
                       v-validate="{required: true, min: 6, confirmed: password}"
                       data-vv-as="确认密码"
                       v-model="password_confirmation" type="password" class="form-control" name="password_confirmation" autocomplete="password_confirmation">

                <span class="invalid-feedback d-block" v-show="errors.has('password_confirmation')">{{errors.first('password_confirmation')}}</span>
                <span class="invalid-feedback" :class="{ 'd-block' : mismatchError}" v-show="mismatchError">{{bag.first('password','auth')}}</span>
            </div>
        </div>

        <div class="form-group row mb-0">
            <div class="col-md-6 offset-md-4">
                <button type="submit" class="btn btn-primary">
                    更新密码
                </button>
            </div>
        </div>
    </form>
</template>

<script>
    import { ErrorBag } from 'vee-validate'

    export default {
        name: "EditPasswordForm",
        data(){
            return {
                password: "",
                password_confirmation: "",
                bag: new ErrorBag()
            }
        },
        computed:{
            mismatchError(){
                return false
            }
        },
        methods:{
            updatePassword(){
                // Submit 验证
                this.$validator.validateAll().then(result => {
                    if (result){
                        const formData = {
                            password: this.password,
                        }

                        this.$store.dispatch('updatePasswordRequest',formData).then(response => {
//                            this.$router.push({name:'profile'})
                            console.log("Success!")
                        }).catch(error => {
//                            if(error.response.status === 421){
//                                this.bag.add({field:"password",msg:'邮箱密码不相符',scope: 'auth'})
//                            }
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>
