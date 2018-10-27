import Vue from 'vue'
import Router from 'vue-router'
import SearchResults from './components/SearchResults'
import Callback from './components/Callback'
import Favorites from './components/Favorites'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'SearchResults',
      component: SearchResults,
      props: true
    },
    {
      path: '/callback',
      name: 'Callback',
      component: Callback,
      props: true
    },
    {
      path: '/favorites',
      name: 'Favorites',
      component: Favorites,
      props: true
    }
  ]
})
