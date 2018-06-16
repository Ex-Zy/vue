<template>
	<div class="form">
		<div class="form__row">
			<label>Имя</label>
			<input type="text" class="form__input" v-model="localUser.firstName" placeholder="Введите имя">
		</div>
		<div class="form__row">
			<label>Фамилия</label>
			<input type="text" class="form__input" v-model="localUser.lastName" placeholder="Введите фамилию">
		</div>
		<div class="form__row">
			<label>Баланс</label>
			<input type="text" class="form__input" v-model="localUser.balance" placeholder="Введите баланс">
		</div>
		<div class="form__row">
			<label>Телефон</label>
			<input type="text" class="form__input" v-model="localUser.phone" placeholder="Введите телефон">
		</div>
    <div class="form__row">
      <label>Адрес</label>
      <input type="text" class="form__input" v-model="localUser.address" placeholder="Введите адрес">
    </div>
    <div class="form__row">
      <label>Компания</label>
      <input type="text" class="form__input" v-model="localUser.company" placeholder="Введите компанию">
    </div>
    <div class="form__row">
      <label>
        Активен
        <div class="input">
          <input type="checkbox" v-model="localUser.isActive" class="input__checkbox">
          <span class="input__text">Подтвердить</span>
        </div>
      </label>
    </div>
    <div class="form__row">
      <label>Выберите тип</label>
      <select id="inputGroupSelect01" class="custom-select" v-model="localUser.accessLevel">
        <option disabled>Выберите пользователя</option>
        <option value="guest">Guest</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
      </select>
    </div>
    <div class="form__row">
      <div class="form-group">
        <label>О себе:</label>
        <textarea v-model="localUser.about" class="form-control" rows="6" style="resize: none"></textarea>
      </div>
    </div>
	</div>
</template>
<script>
export default {
  name: "UserEditForm",
  model: {
    prop: 'user'
  },
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      localUser: null
    };
  },
  watch: {
    localUser: {
      deep: true,
      handler() {
        this.$emit('input', this.localUser);
      }
    }
  },
  created() {
    this.localUser = Object.assign({}, this.user);
  }
};
</script>
<style scoped>
.form {
  max-width: 500px;
  margin: 20px auto;
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
.input {
  position: relative;
  margin: 5px 0 0;
  cursor: pointer;
}
.input__checkbox {
  margin: 0 5px 0 0;
}
.input__text {
  font-weight: 400;
}
</style>
