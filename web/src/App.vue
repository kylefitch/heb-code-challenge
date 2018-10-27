<template>
  <div id="app">
    <div class="container">
      <div id="header" class="row">
        <div class="col-md-4">
          <Search></Search>
        </div>
        <div class="col-md-3">
          <button class="btn btn-success" v-if="authenticated" @click="handleFavoritesClick">Favorites</button>
        </div>
        <div class="col-md-4">
          <div id="username" v-if="authenticated">{{ username }}</div>
        </div>
        <div class="col-md-1">
          <button class="btn btn-danger" v-if="!authenticated" @click="login()">Log In</button>
          <button class="btn btn-danger" v-if="authenticated" @click="logout()">Log Out</button>
        </div>
      </div>
      <router-view :auth="auth" :authenticated="authenticated"></router-view>
    </div>
  </div>
</template>

<script>
import Search from './components/Search'
import AuthService from './auth/AuthService'

// Setup auth service
const auth = new AuthService();
const { login, logout, authenticated, authNotifier } = auth;

export default {
  name: 'app',

  components: {
    Search
  },

  data () {
    // On auth change event, set authentication status
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      this.username = localStorage.getItem('username')
    });
    return {
      auth,
      authenticated,
      username: localStorage.getItem('username')
    }
  },
  methods: {
    login,
    logout,
    handleFavoritesClick() {
      this.$router.push({ name: 'Favorites'})
    }
  }

}
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  #header {
    margin-top: 10px;
  }
  #username {
    margin-top: 10px;
  }
</style>
