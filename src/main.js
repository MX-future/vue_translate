// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios';
import { NavBar } from 'vant'
import { Field } from 'vant'
import { Actionsheet } from 'vant';
import { Button } from 'vant';
import { List,Cell} from 'vant';
import { Toast } from 'vant';

Vue.use(Toast);
Vue.use(List);
Vue.use(Cell);
Vue.use(Button);
Vue.use(Actionsheet);
Vue.use(Field);
Vue.use(NavBar);
Vue.prototype.$axios = axios;
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
