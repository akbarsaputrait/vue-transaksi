<template>
    <div>
        <b-row class="justify-content-center">
            <b-col cols="12" class="text-center">
                <b-table stripped hover :items="items"></b-table>
            </b-col>
            <b-col cols="12">
                <Form></Form>
            </b-col>
        </b-row>
    </div>
</template>

<script>
    import Form from '../components/Form.vue';
    export default {
        components:  {
            Form
        },
        data() {
            return {
                items: [
                    {
                        age: 40,
                        first_name: 'Dickerson',
                        last_name: 'Macdonald'
                    },
                    {
                        age: 21,
                        first_name: 'Larsen',
                        last_name: 'Shaw'
                    },
                ]
            }
        }
    }
</script>
