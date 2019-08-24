export default {
    actions:{
        updatePasswordRequest({dispatch}, formData){
            return axios.post('/api/user/password',formData).then(response => {
                dispatch('showNotification',{level:'success',msg:'更新密码成功'})
            }).catch(error =>{
                console.log(error.response)
                dispatch('showNotification',{level:'error',msg:'更新密码失败'})
            })
        }
    }
}