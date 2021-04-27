import Vue from 'vue'
import App from './App.vue'
require("./components/support/IFrame");
require('@/assets/tailwind.css');

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')