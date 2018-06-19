<template>
  <div class="container mt-3">
    <h2 class="text-center">Добавление пользователя</h2>
    <div v-if="!user"
         class="alert alert-warning"
    >Загрузка</div>
    <user-form v-else v-model="user" />
    <div class="text-center">
      <button type="button"
              class="btn btn-primary"
              @click="saveUser"
      >Сохранить</button>
    </div>
  </div>
</template>

<script>
  import axios from '@/helpers/shortUrl.js';

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
      },
      saveUser() {
        axios.post('/users', this.user)
          .then(response => {
            console.log('Done!!!');
            this.redirectToList();
          })
          .catch(e => console.error(e))
      },
      redirectToList() {
        this.$router.push('/users')
      }
    }
  }
</script>