// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'promise-polyfill/src/polyfill';
import App from './App'
import router from './router'

// import 'vue-awesome/icons'
import 'vue-awesome/icons/user'

import Icon from 'vue-awesome/components/Icon'

// import { MdButton, MdContent, MdTabs,MdCard } from 'vue-material/dist/components'
// import 'vue-material/dist/vue-material.min.css'
//
// Vue.use(MdButton)
// Vue.use(MdContent)
// Vue.use(MdTabs)
// Vue.use(MdCard)

import iView from 'iview';
import 'iview/dist/styles/iview.css';

Vue.use(iView);


Vue.config.productionTip = false

// Vue.component('icon', Icon)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
