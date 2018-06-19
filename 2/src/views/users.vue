<template>
  <div class="users-list-page mt-3">
    <h2>Список пользователей</h2>
    <button type="button"
            class="btn btn-primary"
            @click="loadData"
    >Load users</button>
    <div class="alert alert-warning mt-3"
         v-if="!users.length">
      Oops: oops oops
    </div>
    <user-list v-else :users="users" />

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'users',
    components: {
      'user-list': () => import('@/components/UserList.vue')
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.loadData()
    },
    methods: {
      loadData() {
        axios.get('http://localhost:3004/users')
          .then(({data}) => this.users = data)
          .catch(e => {
            console.error(e)
          })
      }
    }
  }
</script>

<style lang="sass">
  .users-list-page
    max-width: 90%
    margin: 0 auto
</style>