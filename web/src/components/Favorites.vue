<template>
  <div id="favorites">
    <Favorite v-for="favorite in favorites" v-bind:key="favorite.id" :favorite="favorite"></Favorite>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Favorite from "./Favorite";

export default {
  name: "Favorites",

  components: {
    Favorite
  },

  computed: mapState(['favorites']),

  beforeCreate () {
    this.$store.dispatch('getFavorites')
  }

}
</script>

<style scoped>
  #favorites {
    margin-top: 20px;
  }
</style>