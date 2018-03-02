// var data = { status: 'Critical' };

Vue.component('my-cmp', {
    data: function() {
        return {
            status: 'Critical'
        };
    },
    template: '<p>Server Status: {{ status }} (<buttion @click="changeStatus">Change</buttion>) </p>',
    methods: {
        changeStatus: function () {
            this.status = 'Normal';
        }
    }
});

new Vue({
    el: '#app'
});