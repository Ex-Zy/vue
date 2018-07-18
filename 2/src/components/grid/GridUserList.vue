<template>
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
			<tr v-for="item in users"
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
</template>

<script>
export default {
  name: "UserList",
  props: {
    users: {
      type: Array,
      required: true
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
