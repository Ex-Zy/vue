<template>
	<div class="table-wrp">

		<div class="topper">
			<div class="topper__left">
				<div class="topper__count">Всего {{length}} пользователей</div>
			</div>
			<div class="topper__right">
				<div class="form-group">
					<label for="search" class="h5">Search by name / lastname / email</label>
					<input type="text" id="search" class="form-control" v-model="searchValue">
				</div>
			</div>
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
				<tr
					v-if="!filteredItems.length">
					<td colspan="8" class="table__empty">Result is empty</td>
				</tr>
				<tr
					v-else
					v-for="item in filteredItems"
					:key="item.id">
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
    },
		length: {
      type: Number,
			required: true,
			dafault: 0
		}
  },
	data() {
    return {
      searchValue: ''
		}
	},
	computed: {
    filteredItems() {
      let val = this.searchValue.toLocaleLowerCase();

      return this.users.filter(item => {
        return item.firstName.toLocaleLowerCase().includes(val) ||
          item.lastName.toLocaleLowerCase().includes(val) ||
          item.email.toLocaleLowerCase().includes(val)
			});
		}
	}
};
</script>

<style lang="scss" scoped>
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
.table__empty {
	text-align: center;
	font-weight: normal;
	font-size: 16px;
	border: 0;
}
.topper {
	display: flex;
	align-items: center;
	justify-content: space-between;
	&__count {
		font: 16px sans-serif;
	}
	&__left {
		padding: 15px 0 0;
	}
	&__right {
		width: 400px;
	}
	.form-group {
		margin: 0;
	}
}
</style>
