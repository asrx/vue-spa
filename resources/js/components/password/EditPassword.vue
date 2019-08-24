<template>
    <div>
        <div class="card-deck text-center">
            <div class="card box-shadow">
                <div class="card-header">
                    <h4 class="my-0 font-weight-normal"></h4>
                </div>
                <div class="card-body">
                    <edit-password-form></edit-password-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import EditPasswordForm from "./EditPasswordForm";

    export default {
        name: "EditPassword",
       components:{
           EditPasswordForm
       }
    }
</script>

<style scoped>

</style>
