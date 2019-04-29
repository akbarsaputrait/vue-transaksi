<template>
	<b-row class="justify-content-center">
		<b-col cols="5">
		    <b-form v-on:submit.prevent="editBarang">
		      <b-form-group label="Nama barang">
		        <b-form-input type="text" v-model="formData.nama_barang" placeholder="Nama barang"></b-form-input>
		      </b-form-group>

		      <b-form-group label="Harga">
		        <b-form-input type="number" v-model="formData.harga" placeholder="harga"></b-form-input>
		      </b-form-group>

		      <b-form-group label="Stok">
		        <b-form-input type="number" v-model="formData.stok" placeholder="Stok barang"></b-form-input>
		      </b-form-group>

		      <b-button variant="primary" block type="submit">Simpan</b-button>
		      <b-button variant="danger" block :to="{name: 'barang'}">Kembali</b-button>

		      <b-alert
		        class="my-3"
		        :variant="alert.type"
		        :show="alert.show"
		        fade
		        dismissible
		        @dismissible="alert.show = false">
						{{ alert.message }}
		      </b-alert>
		    </b-form>
		</b-col>
	</b-row>
</template>
<script>
import Form from '@/components/Form.vue';
	export default {
		components: {
			Form
		},
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
	        countdown: '',
					type: '',
	      }
			}
		},
		created() {
			const id_barang = this.$route.params.id;
			this.$store.dispatch('showBarang', id_barang)
			.then(response => {
				this.formData.nama_barang = response.data.data.nama_barang
				this.formData.harga = parseInt(response.data.data.harga)
				this.formData.stok = response.data.data.stok
			})
			.catch(error => {
				console.log(error)
			})
		},
		methods: {
			editBarang() {
				const id_barang = this.$route.params.id;

				this.$store.dispatch('editBarang', 	{
					dataBarang: this.formData,
					id: id_barang
				})
				.then(response => {
					console.log(response)
					this.alert.type = 'success';
					this.alert.message = 'Barang berhasil diperbarui';
					this.alert.show = true;
				})
				.catch(error => {
					console.log(error)
				})
			}
		}
	}
</script>
<style></style>
