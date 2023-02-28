<template>
  <div>
    <v-data-table :headers="headers" :items="users" hide-default-footer dense>
      <template v-slot:item="{ item }">
        <tr>
          <td>
            <v-checkbox v-model="item.isChecked"></v-checkbox>
          </td>
          <td>{{ item.name }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.phone }}</td>
          <td>
            <v-btn small color="primary" @click="showDetails(item)">Details</v-btn>
          </td>
        </tr>
        <tr v-if="item.isChecked">
          <td colspan="5">
            <!-- <v-data-table :headers="detailsHeaders" :items="item.details" hide-default-footer dense> -->
            <v-data-table :headers="detailsHeaders" :items="item.details" >
              <template v-slot:item="{ item }">
                <tr>
                  <td>{{ item.date }}</td>
                  <td>{{ item.description }}</td>
                  <td>{{ item.amount }}</td>
                </tr>
              </template>
            </v-data-table>
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
  
<script>
  export default {
    name: 'AdminTables',
    data() {
      return {
        headers: [
          { text: '', value: 'isChecked', sortable: false },
          { text: 'Name', value: 'name' },
          { text: 'Email', value: 'email' },
          { text: 'Phone', value: 'phone' },
          { text: 'Actions', value: 'actions', sortable: false }
        ],
        detailsHeaders: [
          { text: 'Date', value: 'date' },
          { text: 'Description', value: 'description' },
          { text: 'Amount', value: 'amount' }
        ],
        users: [
          {
            name: 'John Doe',
            email: 'johndoe@example.com',
            phone: '1234567890',
            isChecked: false,
            details: [
              { date: '2022-01-01', description: 'Service Fee', amount: '$100' },
              { date: '2022-01-15', description: 'Late Payment Fee', amount: '$20' }
            ]
          },
          {
            name: 'Jane Doe',
            email: 'janedoe@example.com',
            phone: '0987654321',
            isChecked: false,
            details: [
              { date: '2022-01-01', description: 'Service Fee', amount: '$150' },
              { date: '2022-02-01', description: 'Service Fee', amount: '$150' }
            ]
          }
        ]
      }
    },
    methods: {
      showDetails(user) {
        // toggle the isChecked property of the selected user
        user.isChecked = !user.isChecked
      }
    }
  }
</script>

<style scoped>

</style>