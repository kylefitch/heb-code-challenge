<template>
  <div>
    <div class="row">
      <div class="col-md-12">
        <img v-bind:src="favorite.previewUrl" />
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Favorite",

  props: ['favorite']
}
</script>

<style scoped>

</style>