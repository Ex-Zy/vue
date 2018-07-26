<template>
  <div class="grid-table">
    <div class="grid-table__body">

      <user-list
        :users="filteredUsers"
        :length="users.length"></user-list>

    </div>
    <div class="grid-table__bottom">

      <pagination
        v-model.number="currentPage"
        :total-rows="totalRows"
        :per-page="perPage"></pagination>

      <select-list
        v-model.number="perPage"
        :options="pageOptions"></select-list>

    </div>
  </div>
</template>

<script>
  export default {
    name: "GridTable",
    components: {
      'user-list': () => import('@/components/grid/GridUserList.vue'),
      'pagination': () => import('@/components/grid/GridPagination.vue'),
      'select-list': () => import('@/components/grid/GridSelect.vue')
    },
    props: {
      users: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        currentPage: 1,
        perPage: 10,
        pageOptions: [5, 10, 15]
      }
    },
    computed: {
      totalRows() {
        return this.users.length;
      },
      filteredUsers() {
        let start = (this.currentPage-1) * this.perPage;
        let end = start + this.perPage;

        return this.users.slice(start, end);
      }
    }
  }
</script>

<style lang="sass" scoped>
.grid-table
  position: relative
  &__body
    overflow: auto
  &__bottom
    display: flex
    justify-content: space-between
    align-items: center
    padding: 20px 0
</style>
