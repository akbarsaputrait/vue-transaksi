<style lang="css" scoped>


</style>

<template lang="html">

<b-form @submit.prevent="sendData">
    <b-form-row class="justify-content-center">
        <b-col cols="4">
            <b-form-group label="Email address" label-for="email_address">
                <b-form-input id="email_address" type="email" placeholder="Enter email" v-model="formData.email"></b-form-input>
            </b-form-group>

            <b-form-group label="Password" label-for="password">
                <b-form-input id="password" type="password" placeholder="Enter password" v-model="formData.password"></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="primary" block>Login</b-button>
        </b-col>
    </b-form-row>
</b-form>

</template>

<script>

export default {
  data() {
    return {
      formData: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    sendData() {
      this.$store.dispatch('login', this.formData)
        .then(() => this.$router.push('/barang'))
        .catch(err => console.log(err));
    },
  },
};

</script>
