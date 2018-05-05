<template>
	<div class="user-list">
		<h1>This is user list</h1>
		<table-component :titles="titles" :list="list"></table-component>
	</div>
</template>

<script>
	import UserListTable from '@/components/UserListTable.vue';

	export default {
		name: 'user-list',
		components: {
			'table-component': UserListTable
		},
		data() {
			return {
				titles: {
					col1: 'First name',
					col2: 'Middle name',
					col3: 'Last name',
					col4: 'age'
				},
				list: [
					{
						firstName: 'Alexey',
						middleName: 'Alexeevich',
						lastName: 'Volkov',
						age: 25,
						id: 1
					},
					{
						firstName: 'Semen',
						middleName: 'Semenovich',
						lastName: 'Kolhoznikov',
						age: 23,
						id: 2
					},
					{
						firstName: 'Petr',
						middleName: 'Petrovich',
						lastName: 'Anohin',
						age: 61,
						id: 3
					}
				]
			}
		}
	}
</script>