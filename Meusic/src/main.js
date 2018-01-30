// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import Users from './Users.vue'
import Home from './Home.vue'
import Songs from './Songs.vue'

Vue.use(VueRouter);
Vue.config.productionTip = false

const json = require('./obj.json');

const routes = [
  { path: '/users', component: Users },
  { path: '/', component: Home },
  { path: '/songs', component: Songs}
];

const router = new VueRouter({
  routes,
  mode: 'history',
  data:{
    list: json
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  data:{
    lst: json
  }
})
