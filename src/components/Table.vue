<template>
	<div id="table">
		<table class="table table-striped">
			<thead>
				<th>Nama barang</th>
				<th>Harga</th>
				<th>Stok</th>
				<th></th>
			</thead>
			<tbody>
				<tr v-for="(item, index) in items" v-bind:key="index">
					<td>{{ item.nama_barang }}</td>
					<td>{{ item.harga }}</td>
					<td>{{ item.stok }}</td>
					<td>
						<b-button-group>
							<b-button variant="primary" v-on:click="editBarang(item.id_barang)" type="button">Edit</b-button>
							<b-button variant="danger" v-on:click="hapusBarang(item.id_barang)" type="button">Hapus</b-button>
						</b-button-group>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  computed: {
  	items() {
	    return this.$store.state.barang
		}
  },
	mounted() {
		this.$store.dispatch('getBarang')
	},
	methods: {
		editBarang(id) {
			this.$router.push({name: 'barang.show', params: {
				id: id
			}});
		},
		hapusBarang(id) {
			if(confirm('Anda yakin untuk menghapus data ini?')) {
				this.$store.dispatch('deleteBarang', id)
				.then(response => {
					this.$store.dispatch('getBarang')
				})
				.catch(error => {
					console.log(error)
				})
        // this.$store.commit('addBarang')
			} else {
				return false
			}
		},
	},
};
</script>

<style></style>
