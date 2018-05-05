<template>
	<div class="form">
		<div class="form__row">
			<label>First Name</label>
			<input type="text" class="form__input" v-model="userInfo.firstName" placeholder="Enter firstName">
		</div>
		<div class="form__row">
			<label>Middle Name</label>
			<input type="text" class="form__input" v-model="userInfo.middleName" placeholder="Enter middleName">
		</div>
		<div class="form__row">
			<label>Last Name</label>
			<input type="text" class="form__input" v-model="userInfo.lastName" placeholder="Enter lastName">
		</div>
		<div class="form__row">
			<label>User id</label>
			<input type="text" class="form__input" v-model="userInfo.id" placeholder="Enter id">
		</div>
	</div>
</template>
<script>
export default {
	name: 'UserEditForm',
	props: {
		user: {
			type: Object,
			required: true
		}
	},
	model: {
		prop: 'user',
		event: 'changevalue',
	},
	data() {
		return {
			userInfo: Object.assign({}, this.user)
		}
	},
	watch: {
		userInfo: {
			deep: true,
			handler: 'notifyParentOnChangeUserData'
		}
	},
	methods: {
		notifyParentOnChangeUserData(val) {
			this.$emit('changevalue', val)
		}
	}
}
</script>
<style scoped>
	.form {
		max-width: 500px;
		margin: 20px auto 50px;
	}
	.form__input {
		display: block;
		width: 100%;
		padding: 5px 20px;
		font-size: 16px;
		line-height: 1.6;
		font-family: inherit;
		border: 1px solid #cdcdcd;
	}
	.form__input:focus {
		outline: 2px solid #707b8c;
	}
	.form__row label {
		text-align: left;
		display: block;
		margin: 10px 0 5px;
	}
</style>