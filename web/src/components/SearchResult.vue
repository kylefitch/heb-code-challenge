<template>
  <div>
    <div class="row result">
      <div class="col-md-1">
        <button class="btn btn-primary">Save</button>
      </div>
      <div class="col-md-11">
        <img v-bind:src="result.images.fixed_height_downsampled.url" />
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "SearchResult",

  props: ['result']
}
</script>

<style lang="scss" scoped>

</style>