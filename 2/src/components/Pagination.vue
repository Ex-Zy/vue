<template>
  <div class="pagination">
    <div class="pagination__left">
      <button
        type="button"
        class="btn btn-link"
        v-if="hasPrev"
        @click="changePage(prevPage)"
      >Prev</button>
    </div>
    <div class="pagination__right">
      <button
        type="button"
        class="btn btn-link"
        v-if="hasNext"
        @click="changePage(nextPage)"
      >Next</button>
    </div>
    <ul class="pagination-list">
      <li v-if="hasFirst">
        <button
          type="button"
          class="btn btn-secondary"
          @click="changePage(1)"
        >1</button>
      </li>
      <li v-if="hasFirst">...</li>
      <li
        v-for="(page, index) in pages"
        :class="{'is-active': page === currentPage}"
        :key="'page-' + index">
          <button
            type="button"
            class="btn btn-secondary"
            @click="changePage(page)"
          >
            {{page}}
          </button>
      </li>
      <li v-if="hasLast">...</li>
      <li v-if="hasLast">
        <button
          type="button"
          class="btn btn-secondary"
          @click="changePage(totalPages)"
        >{{totalPages}}</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'pagination',
    model: {
      prop: 'currentPage',
      event: 'change-page'
    },
    props: {
      totalRows: {
        type: Number,
        required: true
      },
      currentPage: {
        type: Number,
        default: 1
      },
      perPage: {
        type: Number,
        default: 10
      },
      pageRange: {
        type: Number,
        default: 2
      }
    },
    computed: {
      hasFirst() {
        return this.rangeStart !== 1;
      },
      hasLast() {
        return this.rangeEnd < this.totalPages;
      },
      pages() {
        let pages = [];

        for(let i = this.rangeStart; i <= this.rangeEnd; i++) {
          pages.push(i);
        }
        return pages;
      },
      rangeStart() {
        let start = this.currentPage - this.pageRange;

        return (start > 0) ? start : 1;
      },
      rangeEnd() {
        let end = this.currentPage + this.pageRange;

        return (end < this.totalPages) ? end : this.totalPages;
      },
      prevPage() {
        return this.currentPage - 1;
      },
      nextPage() {
        return this.currentPage + 1;
      },
      totalPages() {
        return Math.ceil(this.totalRows / this.perPage);
      },
      hasPrev() {
        return this.currentPage > 1
      },
      hasNext() {
        return this.currentPage < this.totalPages
      }
    },
    methods: {
      changePage(page) {
        this.$emit('change-page', page);
      }
    }
  }
</script>

<style>
  .pagination {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    margin: 0;
  }
  .pagination__left {
    order: 1;
  }
  .pagination__right {
    order: 3;
  }
  .pagination-list {
    list-style: none;
    padding: 0;
    margin: 0 15px;
    display: flex;
    order: 2;
  }
  .pagination-list li {
    margin: 0 2px;
  }
  .pagination-list li.is-active .btn {
    background: #42b983;
  }
</style>