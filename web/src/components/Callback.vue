<template>
  <div>
  </div>
</template>

<script>
  export default {
    name: 'Callback',

    props: ['auth'],

    data () {
      // Call handleAuthentication on component load
      this.auth.handleAuthentication()
      return {}
    }

  }
</script>

<style scoped>

</style>