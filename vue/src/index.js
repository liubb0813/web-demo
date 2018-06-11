import Vue from 'vue';

const comp = {
    props: {
        text: {
            type: String
        }
    },
    data() {
        return {
            str: 'hello'
        }
    },
    methods: {
        changeText() {
            this.$emit('handleText');
        }
    },
    template: `
        <div>
            <p>{{text}}</p>
            <p @click="changeText">{{str}}</p>
        </div>
    `
}

const app = new Vue({
    el: "#root",
    template: `
        <div>
            <comp-one @handleText="text = 'welcome'" :text="text"></comp-one>
        </div>
    `,
    data() {
        return {
            text: 'world'
        }
    },
    components: {
        CompOne: comp
    }
});

app.$on('test', () => {
    console.log('111111')
});

setTimeout(() => {
    app.$emit('test');
}, 3000);

