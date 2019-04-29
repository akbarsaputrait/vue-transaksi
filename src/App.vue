<template>
  <div id="app">
    <Navbar></Navbar>
    <b-container class="py-5">
      <transition name="fade" mode="out-in">
        <router-view/>
      </transition>
    </b-container>
  </div>
</template>

<script>
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'MyView',
    components: {
      Navbar
    }
  };
</script>

<style scoped type="scss">
  html,
  body {
    margin: 0;
    padding: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
</style>
