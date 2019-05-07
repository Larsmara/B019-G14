<template>
    <div class="alert alert-success" role="alert" @input="onClose" :value="true">
        <div class="d-flex align-items-center">
            {{text}}
        </div>
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