<template>
  <div>
    <div id="search-box" class="input-group">
      <input type="text" class="form-control" placeholder="" v-model="searchTerm">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" id="search-button" @click="handleSearchClick">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  methods: {
    handleSearchClick () {
      this.$store.dispatch('searchGifs', this.searchTerm)
    }
  },

  data () {
    return {
      searchTerm: ''
    }
  }
}
</script>

<style lang="scss" scoped>
  #search-box {
    margin-top: 10px;
  }
</style>