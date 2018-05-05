<template>
	<table class="table">
		<thead>
			<tr>
				<th v-for="(title, index) in titles" :key="`title-${index}`">
					{{title}}
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="item in list" :key="item.id">
				<td>{{item.firstName}}</td>
				<td>{{item.middleName}}</td>
				<td>{{item.lastName}}</td>
				<td>{{item.age}}</td>
			</tr>
		</tbody>
	</table>
</template>

<script>
export default {
	name: 'UserListTable',
	props: {
		titles: {
			type: Object,
			required: true
		},
		list: {
			type: Array,
			required: true
		}
	}
}
</script>

<style scoped>
	.table {
		margin: 20px auto;
		table-layout: fixed;
		border-collapse: collapse;
		text-align: left;
		font-size: 18px; 
	}
	.table th {
		text-align: left;
		font-size: 18px;
		font-weigt: 800;
		padding: 5px 40px;
	}
	.table td {
		padding: 10px 40px;
		border: 1px solid #cdcdcd;
	}
</style>