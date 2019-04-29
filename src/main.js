import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

// Axios
import axios from 'axios';

// Bootstrap Vue
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

Vue.use(BootstrapVue);

Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://localhost/latihan_lumen/public/api';
Vue.config.productionTip = true;

const token = localStorage.getItem('token');
if (token) {
  Vue.prototype.$http.defaults.headers.common.token = token;
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (store.getters.isLogin) {
      next();
      return;
    }
    next('/login');
  } else {
    next();
  }
});
