<template>
  <div class="users-list-page mt-3">
    <h2>Список пользователей</h2>

    <button type="button"
            class="btn btn-primary"
            @click="loadData">Load users</button>

    <div class="alert alert-warning mt-3"
         v-if="!users.length">
      Oops: oops oops
    </div>

    <grid-table v-else :users="users">
    </grid-table>

  </div>

</template>

<script>
  import axios from '@/helpers/shortUrlToServer.js';

  export default {
    name: 'users',
    components: {
      'grid-table': () => import('@/components/grid/GridTable.vue')
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        axios.get('/users')
          .then(({data}) => this.users = data)
          .catch(e => {
            console.error(e)
          })
      }
    }
  }
</script>

<style lang="sass" scoped>
  .users-list-page
    max-width: 90%
    margin: 0 auto
</style>
