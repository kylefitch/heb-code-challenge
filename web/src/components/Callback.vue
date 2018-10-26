<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'Callback',

    props: ['auth'],

    data () {
      this.auth.handleAuthentication()
      return {}
    }

  }
</script>

<style scoped>

</style>