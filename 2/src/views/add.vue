<template>
  <div class="container mt-3">
    <h2 class="text-center">Добавление пользователя</h2>
    <div v-if="!user"
         class="alert alert-warning"
    >Загрузка</div>
    <user-form v-else
               :user="user"
               @input="value => user = value"
    ></user-form>
  </div>
</template>

<script>
  const emptyObject = {
    id: 0,
    isActive: false,
    balance: '',
    picture: '',
    age: 0,
    accessLevel: '',
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    about: '',
    registed: ''
  };
  export default {
    name: 'addUser',
    components: {
      'user-form': () => import("@/components/UserEditForm.vue")
    },
    data() {
      return {
        user: null
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        this.user = Object.assign({}, emptyObject)
      }
    }
  }
</script>