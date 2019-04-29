<template>

<div>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand :to="{path: '/'}">Transaksi Barang</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav v-if="isLoggedIn">
                <b-nav-item :to="{name: 'barang'}">Barang</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item :to="{name: 'logout'}" v-if="isLoggedIn">Logout</b-nav-item>
                <b-nav-item :to="{name: 'login'}" v-else>Login</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>

</div>

</template>

<script>
import axios from 'axios';

export default {
  name: 'Navbar',
  computed: {
    isLoggedIn() {
      return this.$store.getters.isLogin;
    },
  },
  methods: {
    logout() {
      this.$store.commit('isLogin', false);

      this.$router.push({ name: 'login' });
    },
  },
};

</script>


<style scoped>


</style>
