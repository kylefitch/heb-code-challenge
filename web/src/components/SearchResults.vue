<template>
  <div id="search-results">
    <SearchResult v-for="searchResult in searchResults" v-bind:key="searchResult.id" :result="searchResult" :authenticated="authenticated"></SearchResult>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import SearchResult from './SearchResult'

export default {
  name: "SearchResults",

  props: ['authenticated'],

  components: {
    SearchResult
  },

  computed: mapState(['searchResults'])

}
</script>

<style lang="scss" scoped>
  #search-results {
    margin-top: 20px;
  }
</style>