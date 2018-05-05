<template>
	<div class="user-edit">
		<h1 class="title">Edit user form</h1>
		<component-form v-model="profile"></component-form>
		<h3>Данные пользователя</h3>
		<div class="print">
			<p>firstName = > {{profile.firstName}}</p>
			<p>middleName = > {{profile.middleName}}</p>
			<p>lastName = > {{profile.lastName}}</p>
			<p>id = > {{profile.id}}</p>
		</div>
	</div>
</template>

<script>
import UserEditForm from "@/components/UserEditForm.vue";

export default {
	name: 'user-edit',
	components: {
		'component-form': UserEditForm
	},
	data() {
		return {
			profile: {
        firstName: 'Alex',
        lastName: 'Lesley',
        middleName: 'Sergeevich',
        id: 0
      }
		}
	},
}
</script>