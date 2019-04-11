<template>
  <div class="alert alert-danger" dismissible @input="onClose" :value="true">
    {{text}}
  </div>
</template>

<script>
  export default {
    props: ['text'],
    methods: {
      onClose () {
        this.$emit('dismissed')
      }
    }
  }
</script>