<template>
	<div class="table-wrp">
		<div class="form-group mt-5">
			<label for="search" class="h5">Search by name</label>
			<input type="text" id="search" class="form-control" v-model="searchValue">
		</div>
		<table class="table">
			<thead>
			<tr>
				<th>#</th>
				<th>Имя</th>
				<th>Фамилия</th>
				<th>Активен</th>
				<th>Баланс</th>
				<th>Email</th>
				<th>Телефон</th>
				<th>Зарегистрирован</th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in filteredItems"
					:key="item.id"
			>
				<td>
					<router-link :to="'/edit/' + item.id">
						# {{ item.id }}
					</router-link>
				</td>
				<td>{{ item.firstName }}</td>
				<td>{{ item.lastName }}</td>
				<td>{{ item.isActive }}</td>
				<td>{{ item.balance }}</td>
				<td>{{ item.email }}</td>
				<td>{{ item.phone }}</td>
				<td>{{ item.registered }}</td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
      required: true
    }
  },
	data() {
    return {
      searchValue: ''
		}
	},
	computed: {
    filteredItems() {
      return this.users.filter(item => item.firstName.indexOf(this.searchValue) > -1)
		}
	}
};
</script>

<style scoped>
.table {
  margin: 20px auto;
  border-collapse: collapse;
  text-align: left;
  font-size: 18px;
  white-space: nowrap;
}
.table th {
  text-align: left;
  font-size: 18px;
  font-weigt: 800;
  padding: 5px 20px;
}
.table td {
  padding: 10px 20px;
  border: 1px solid #cdcdcd;
}
</style>
