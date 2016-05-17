// import Sui from './vendors/sui/sm-0.6.2.css'
import VuxCss from 'vux/vux.css'
import common from './assets/styles/common.scss'

import Vue from 'vue'
import App from './App'
import XHeader from "./components/ui/Header"



Vue.component('x-header',XHeader)
/* eslint-disable no-new */
var test = window.testvm = new Vue({
  el: 'body',
  components: { App }
})
