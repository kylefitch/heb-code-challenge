<template>
  <div>
    <div class="row result">
      <div class="col-md-1">
        <button class="btn btn-primary" v-if="authenticated" @click="handleSaveClick">Save</button>
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

  props: ['result', 'authenticated'],

  methods: {
    handleSaveClick () {
      let favorite = {
        url: this.result.url,
        previewUrl: this.result.images.fixed_height_downsampled.url,
        username: localStorage.getItem('username')
      };
      this.$store.dispatch('saveFavorite', favorite)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>