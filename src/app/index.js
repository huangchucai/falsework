/**
 * Created by Z7 on 2017/11/16.
 */
import '../css/sale.styl';
import "../global/reset.css";
import Vue from  'vue'
import App from '../app.vue'
Vue.config.devtools = true;
new Vue({
    el: "#app",
    template: '<App/>',
    components: {App}
})