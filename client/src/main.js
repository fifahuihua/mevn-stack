/**
 * Created by ZHANGAN2 on 5/10/2018.
 */
'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource'
import ElementUI from 'element-ui'
import lodash from 'lodash'
// import moment from 'moment'

import router from './router'
import store from './store'

import locale from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'
import './css/common.css'

import MainPage from './components/MainPage';

Vue.use(ElementUI, { locale })
// Vue.use(moment)
Vue.use(VueResource)
Vue.use(lodash)
Vue.prototype._ = lodash

Vue.config.devtools = true
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  template: '<MainPage />',
  components: { MainPage }
})
