<template>
  <div>
    <div class="row">
      <div class="col-md-3">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Category" v-model="category">
          <div class="input-group-append">
            <button class="btn btn-primary" type="button" id="search-button" @click="handleAddClick">Add</button>
          </div>
        </div>
        <div class="category">
          <dt>Category:</dt>
          <dd><h3><span class="badge badge-secondary">{{ favorite.category }}</span></h3></dd>
        </div>
      </div>
      <div class="col-md-9">
        <a v-bind:href="favorite.url"><img v-bind:src="favorite.previewUrl" /></a>
      </div>
    </div>
    <hr>
  </div>
</template>

<script>
export default {
  name: "Favorite",

  props: ['favorite'],

  methods: {
    handleAddClick () {
      let updatedFavorite = {
        id : this.favorite.id,
        url : this.favorite.url,
        username : this.favorite.username,
        category : this.category
      }
      this.$store.dispatch('updateFavorite', updatedFavorite)
      this.category = ''
    }
  },

  data () {
    return {
      category: ''
    }
  }
}
</script>

<style scoped>
  .category {
    margin-top: 40px;
  }
</style>