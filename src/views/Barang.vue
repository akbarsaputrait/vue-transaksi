<template>
  <b-row>
    <b-col cols="4">
      <Form></Form>
    </b-col>
    <b-col cols="8">
      <Table></Table>
    </b-col>
  </b-row>
</template>

<script>
import Form from '@/components/Form.vue'
import Table from '@/components/Table.vue'
export default {
  name: 'barang',
  components: {
    Form, Table
  }
}
</script>
