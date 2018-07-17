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

    <user-list v-else :users="getFilteredUsers(users)" />

    <div class="table-bottom">

      <pagination
        v-model="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"></pagination>

      <form-select
        v-model.number="perPage"
        :options="pageOptions"></form-select>
    </div>

  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    name: 'users',
    components: {
      'user-list': () => import('@/components/UserList.vue'),
      'pagination': () => import('@/components/Pagination.vue'),
      'form-select': () => import('@/components/FormSelect.vue')
    },
    data() {
      return {
        users: [],
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15]
      }
    },
    mounted() {
      this.loadData();
    },
    methods: {
      loadData() {
        axios.get('http://localhost:3004/users')
          .then(({data}) => this.users = data)
          .catch(e => {
            console.error(e)
          })
      },
      getFilteredUsers(users) {
        let start = (this.currentPage-1) * this.perPage;
        let end = start + this.perPage;

        return users.slice(start, end);
      }
    },
    computed: {
      totalRows() {
        return this.users.length;
      }
    }
  }
</script>

<style lang="sass">
  .users-list-page
    max-width: 90%
    margin: 0 auto
  .table-bottom
    display: flex
    align-items: center
    justify-content: space-between
</style>
