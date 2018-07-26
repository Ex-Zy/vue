<template>
  <div class="page-rows">
    <span
      class="page-rows__text">Кол. строк: </span>
    <select
      class="page-rows__select"
      :value="perPage"
      @change="changeValue(perPage, $event)">
      <option
        v-for="option in options">{{option}}</option>
    </select>
  </div>
</template>

<script>
  export default {
    name: 'selectList',
    model: {
      prop: 'perPage',
      event: 'change'
    },
    props: {
      perPage: {
        type: Number,
        required: true
      },
      options: {
        type: Array,
        required: true
      }
    },
    methods: {
      changeValue(val, e) {
        this.$emit('change', val = e.target.value)
      }
    }
  }
</script>
<style lang="scss" scoped>
  .page-rows {
    display: inline-flex;
    align-items: center;
    &__text {
      margin: 0 20px 0 0;
      font: 14px/1.2 sans-serif
    }
  }
</style>
