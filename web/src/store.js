import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    gifs: [],
    searchResults: []
  },
  mutations: {
    setSearchResults (state, searchResults) {
      state.searchResults = searchResults
    }
  },
  actions: {
    searchGifs ({ commit }, searchTerm) {
      const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
      const KEY = 'XROTJc1lOzII5KoqJS5Fr7jNE1fF1num';
      const LIMIT = 25;
      const RATING = 'G';

      axios.get(BASE_URL + '?api_key=' + KEY + '&q=' + searchTerm + '&limit=' + LIMIT + '&rating=' + RATING)
        .then(response => {
          commit('setSearchResults', response.data.data)
        })
    }
  }
})
