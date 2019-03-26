<template>
  <b-modal :v-model="show">
    <p class="my-4">Hello from modal!</p>
  </b-modal>
</template>
<script>
export default {
  props: {
    show: Boolean
  }
}
</script>