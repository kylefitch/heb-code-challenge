<template>
  <div id="search-results">
    <SearchResult v-for="searchResult in searchResults" v-bind:key="searchResult.id" :result="searchResult"></SearchResult>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchResult from './SearchResult'

export default {
  name: "SearchResults",

  components: {
    SearchResult
  },

  computed: mapState(['searchResults'])

}
</script>

<style scoped>
  #search-results {
    margin-top: 20px;
  }
</style>