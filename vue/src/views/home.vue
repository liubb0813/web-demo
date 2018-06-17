<template>
    <div class="main">
        {{userId}}
        <router-link to="/login"> Exit</router-link>
    </div>
</template>

<script>
    export default {
        props: ['userId'],
        mounted() {
            console.log(this.userId)
        }
    }
</script>

<style>
    .main {
        height: 1500px;
        padding-top: 500px;
    }
</style>