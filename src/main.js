// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
require('es6-promise').polyfill();

import Vue from 'vue'

import VueI18n from 'vue-i18n'

import App from './App'
import router from './router'

// import 'vue-awesome/icons'
import 'vue-awesome/icons/user'

import Icon from 'vue-awesome/components/Icon'



import iView from 'iview';
import 'iview/dist/styles/iview.css';
import langs from './lang/index.js'

Vue.use(VueI18n)
Vue.use(iView);

// langs=JSON.parse(JSON.stringify(langs))
console.log(langs)


const i18n = new VueI18n({
  locale: 'cn', // set locale
  messages:langs, // set locale messages
})




Vue.config.productionTip = false

// Vue.component('icon', Icon)
Vue.component('icon', Icon)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  i18n
})
