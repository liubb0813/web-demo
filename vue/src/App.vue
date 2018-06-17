<template>
    <div id="app">
        <p>{{sum}}</p>
        <p @click="updateCount(200)">{{fullName}}</p>
        <input type="text" v-model.number="a"/>
        <router-view/>
    </div>
</template>

<script>
    import { mapState, mapGetters, mapMutations, mapActions} from 'vuex';
    export default {
        name: 'App',
        mounted() {
            this.updateCountAsync({
                num: 25,
                time: 3000
            });
//            this.updateCount(100)
        },
        data() {
            return {
                a : 1
            }
        },
        methods: {
            ...mapActions(['updateCountAsync']),
            ...mapMutations(['updateCount'])
        },
        computed: {
            ...mapState({
                sum (state) {
                    return state.count + this.a;
                }
            }),
            ...mapGetters(['fullName'])
        }
    }
</script>

<style>

</style>
