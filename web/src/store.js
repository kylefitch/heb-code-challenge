import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import _ from 'lodash'

const API_BASE_URL = 'http://localhost:8000/';

Vue.use(Vuex)

export default new Vuex.Store({
  // App state
  state: {
    favorites: [],
    searchTerm: '',
    searchResults: []
  },
  // Mutations for state
  mutations: {
    setSearchTerm (state, searchTerm) {
      state.searchTerm = searchTerm
    },
    setSearchResults (state, searchResults) {
      state.searchResults = searchResults
    },
    setFavorites (state, favorites) {
      state.favorites = favorites
    },
    addFavorite (state, favorite) {
      state.favorites.push(favorite)
    },
    removeFavorite (state, favorite) {
      state.favorites = _.remove(state.favorites, n => {
        return n.id !== favorite.id
      })
    }
  },
  // Async actions
  actions: {
    searchGifs ({ commit }, searchTerm) {
      const BASE_URL = 'https://api.giphy.com/v1/gifs/search';
      const KEY = 'XROTJc1lOzII5KoqJS5Fr7jNE1fF1num';
      const LIMIT = 100;
      const RATING = 'G';

      axios.get(BASE_URL + '?api_key=' + KEY + '&q=' + searchTerm + '&limit=' + LIMIT + '&rating=' + RATING)
        .then(response => {
          commit('setSearchResults', response.data.data)
        })
    },
    saveFavorite ({ commit }, favorite) {
      axios.post(API_BASE_URL + 'favorite', favorite, { headers: { "Authorization": 'Bearer ' + localStorage.getItem('access_token') } } )
        .then(response => {
          commit('addFavorite', response.data)
        })
    },
    updateFavorite ({ dispatch }, favorite) {
      axios.post(API_BASE_URL + 'favorite/' + favorite.id, favorite, { headers: { "Authorization": 'Bearer ' + localStorage.getItem('access_token') } })
        .then(response => {
          dispatch('getFavorites')
        })
    },
    getFavorites ({ commit }) {
      axios.get(API_BASE_URL + 'favorites/' + localStorage.getItem('username'), { headers: { "Authorization": 'Bearer ' + localStorage.getItem('access_token') } })
        .then(response => {
          commit('setFavorites', response.data)
        })
    }
  }
})
