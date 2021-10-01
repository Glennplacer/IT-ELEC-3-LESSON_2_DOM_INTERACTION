const app = Vue.createApp({
    data() {
        return {
            myName: 'Glenn Anrei Placer',
            myAge: 20
        };
    },
    methods: {
        Edad() {
            return this.myAge + 5;
        }
    }
});

app.mount('#assignment');