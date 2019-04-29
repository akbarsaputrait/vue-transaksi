  <template>
  <div>
    <b-form v-on:submit.prevent="addBarang">
      <b-form-group label="Nama barang">
        <b-form-input type="text" v-model="formData.nama_barang" placeholder="Nama barang"></b-form-input>
      </b-form-group>

      <b-form-group label="Harga">
        <b-form-input type="number" v-model="formData.harga" placeholder="Harga"></b-form-input>
      </b-form-group>

      <b-form-group label="Stok">
        <b-form-input type="number" v-model="formData.stok" placeholder="Stok barang"></b-form-input>
      </b-form-group>

      <b-button variant="primary" block type="submit">Simpan</b-button>
      <b-button variant="warning" block type="button" @click="clearForm">Bersihkan</b-button>

      <b-alert
        class="my-3"
        variant="danger"
        :show="alert.show"
        fade
        dismissible
        @dismissible="alert.show = false">
        {{ alert.message }}
      </b-alert>
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'Form',
  data() {
    return {
      formData: {
        nama_barang: '',
        harga: '',
        stok: '',
        id: localStorage.getItem('id_user')
      },
      alert: {
        show: false,
        message: '',
        countdown: 3
      }
    };
  },
  methods: {
    addBarang() {
      this.$store.dispatch('addBarang', this.formData)
      .then(response => {
        // this.clearForm()
        // this.$store.dispatch('getBarang')
        // this.$store.commit('addBarang')
        console.log(response)
      })
      .catch(error => {
        const statusCode = error.response.status;
        if(statusCode === 422) {
          this.alert.show = true;
          this.alert.message = "Pastikan nama, harga, stok barang sudah benar.";
        }
      })
    },
    clearForm() {
      this.formData.nama_barang = '';
      this.formData.harga = '';
      this.formData.stok = '';
    }
  },
};
</script>

<style scoped>

</style>
