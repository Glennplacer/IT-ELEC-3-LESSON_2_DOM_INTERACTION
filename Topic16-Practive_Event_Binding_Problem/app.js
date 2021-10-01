const app = Vue.createApp({
    data() {
        return {
            output1: '',
            output2: ''
        };
    },
    methods: {
        submit() {
            alert('Hello World!')
        }
    }
});

app.mount('#assignment');