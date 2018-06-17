<template>
    <div>
        <input type="text" v-model="userId"/>
        <router-link :to="{path:'/index',query:{userId:userId}}">Login</router-link>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data(){
            return{
                userId:''
            }
        }
    }
</script>

<style>

</style>