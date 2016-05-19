// import Sui from './vendors/sui/sm-0.6.2.css'
import VuxCss from './assets/styles/vux.css'
import common from './assets/styles/common.scss'
import VueResource from "vue-resource"
import Vue from 'vue'
import App from './App'
import XHeader from "./components/ui/Header"
import mmapi from 'mmapi'
window.mmapi = mmapi
Vue.use(VueResource);
Vue.component('x-header',XHeader)
/* eslint-disable no-new */
var test = window.testvm = new Vue({
  el: 'body',
  components: { App }
})
