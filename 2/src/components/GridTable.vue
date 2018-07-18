<template>
  <div class="grid-table">
    <div class="grid-table__body">
      <slot name="body"></slot>
    </div>
    <div class="grid-table__bottom">
      <slot name="bottom"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "GridTable"
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
