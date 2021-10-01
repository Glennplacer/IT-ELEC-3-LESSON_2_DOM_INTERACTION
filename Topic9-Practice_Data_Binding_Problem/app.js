const app = Vue.createApp({
    data() {
        return {
            myName: 'Glenn Anrei Placer',
            myAge: 20,
            url: 'https://vuejs.org/images/logo.png'
        };
    },
    methods: {
        Edad() {
            return this.myAge + 5;
        },
        Uno() {
            const random = Math.random();
            if(random < 0.5) {
                return '0'
            } else {
                return '1'
            }
        }
    }
});

app.mount('#assignment');