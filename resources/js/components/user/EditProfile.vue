<template>
    <div>
        <div class="card-deck text-center">
            <div class="card box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal"></h4>
                </div>
                <div class="card-body">
                    <edit-profile-form></edit-profile-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EditProfileForm from './EditProfileForm'

    export default {
        name: "EditProfile",
       components:{
           EditProfileForm
       }
    }
</script>

<style scoped>

</style>
