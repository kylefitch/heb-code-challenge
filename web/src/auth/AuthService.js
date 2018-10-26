import auth0 from 'auth0-js'
import EventEmitter from 'EventEmitter'
import jwt from 'jsonwebtoken'
import router from '../router'

export default class AuthService {

  authenticated = this.isAuthenticated()
  authNotifier = new EventEmitter()

  constructor () {
    this.login = this.login.bind(this)
    this.setSession = this.setSession.bind(this)
    this.logout = this.logout.bind(this)
    this.isAuthenticated = this.isAuthenticated.bind(this)
  }

  auth0 = new auth0.WebAuth({
    domain: 'kylefitch.auth0.com',
    clientID: 'EWnZfdbqZu0vvVI7T3oxo5LsxPgT1EBg',
    audience: 'http://heb.kylefitch.com',
    redirectUri: 'http://localhost:8080/callback',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  login () {
    this.auth0.authorize()
  }

  handleAuthentication () {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult)
        router.push({ name: 'SearchResults'})
      } else if (err) {
        router.push({ name: 'SearchResults'})
        console.log(err)
      }
    })
  }

  setSession (authResult) {
    // Set the time that the Access Token will expire at
    let expiresAt = JSON.stringify(
      authResult.expiresIn * 1000 + new Date().getTime()
    )
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    let decoded = jwt.decode(authResult.idToken)
    localStorage.setItem('username', decoded.name)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('username')
    this.userProfile = null
    this.authNotifier.emit('authChange', false)
    // navigate to the home route
    router.push({ name: 'SearchResults'})
  }

  isAuthenticated () {
    // Check whether the current time is past the
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
