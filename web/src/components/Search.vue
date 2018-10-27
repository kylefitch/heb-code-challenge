<template>
  <div>
    <div id="search-box" class="input-group">
      <input type="text" class="form-control" placeholder="" v-model="term">
      <div class="input-group-append">
        <button class="btn btn-primary" type="button" id="search-button" @click="handleSearchClick">Search</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",

  computed: {
    // Getter and setter for search term in vuex
    term: {
      get () {
        return this.$store.state.searchTerm
      },
      set (value) {
        this.$store.commit('setSearchTerm', value)
      }
    }
  },

  methods: {
    handleSearchClick () {
      this.$store.dispatch('searchGifs', this.term)
      this.$router.push({ name: 'SearchResults'})
    }
  }
}
</script>

<style lang="scss" scoped>

</style>