/*
 * @Descripttion: 
 * @version: v1.0.0
 * @Author: 田江
 * @Date: 2019-11-06 15:25:24
 * @LastEditors: 田江
 * @LastEditTime: 2019-11-08 15:54:13
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI);
Vue.use(ElementUI);

Vue.config.productionTip = false;

Axios.defaults.baseURL = '/api/'; //把axios的请求基本路径改为api，以后就不需要在每个axios请求里写api

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
