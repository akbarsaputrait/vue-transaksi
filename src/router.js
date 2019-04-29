import Vue from 'vue';
import Router from 'vue-router';
import Barang from './views/Barang.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/barang',
      name: 'barang',
      component: Barang,
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/barang/:id',
      name: 'barang.show',
      component: () => import('./views/barang/Show.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/auth/Login.vue'),
    },
    {
      path: '/logout',
      name: 'logout',
      component: () => import('./views/auth/Logout.vue'),
      meta: {
        requireAuth: true,
      },
    },
    {
      path: '*',
      redirect: '/login',
    },
  ],
});
