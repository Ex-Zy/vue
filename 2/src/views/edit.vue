<template>
  <div class="container mt-3 text-center">
    <h2>Редактирование пользователя</h2>
    <div v-if="!user"
         class="alert alert-warning">Загрузка</div>
    <user-form v-else
               v-model="user"/>

    <div class="buttons-control">
      <button type="button"
              class="btn btn-primary"
              @click="save">Сохранить</button>

      <button type="button"
              class="btn btn-danger"
              @click="remove">Удалить</button>
    </div>

  </div>
</template>

<script>
  import axios from '@/helpers/shortUrlToServer.js';

  export default {
    name: "edit",
    components: {
      "user-form": () => import("@/components/UserEditForm.vue")
    },
    data() {
      return {
        user: null
      }
    },
    computed: {
      id() {
        return this.$route.params.id
      },
      loadUrl() {
        return `http://localhost:3004/users/${this.id}`
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        axios.get(this.loadUrl)
          .then(response => response.data)
          .then(response => (this.user = response))
          .catch(e => {console.error(e)})
      },
      save() {
        axios.patch(this.loadUrl, this.user)
          .then(() => console.info('Сохранено'))
          .catch((e) => console.error(e))
      },
      remove() {
        axios.delete(this.loadUrl)
          .then(() => console.info('Удалено'))
          .then(() => this.redirectToList())
          .catch((e) => console.error(e))
      },
      redirectToList() {
        this.$router.push('/users')
      }
    }
  }

</script>

<style lang="sass">
.buttons-control
  position: relative
  margin: 0 0 50px
  .btn
    margin: 0 20px 0 0
</style>
