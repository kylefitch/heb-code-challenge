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

  // Configure auth0 request
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
    // Parse response and set session data
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
    // Set auth data in local storage
    let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
    localStorage.setItem('access_token', authResult.accessToken)
    localStorage.setItem('id_token', authResult.idToken)
    localStorage.setItem('expires_at', expiresAt)
    // Decode id_token
    let decoded = jwt.decode(authResult.idToken)
    // Set username form decoded token
    localStorage.setItem('username', decoded.name)
    this.authNotifier.emit('authChange', { authenticated: true })
  }

  logout () {
    // Logout and clear local storage
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
    localStorage.removeItem('expires_at')
    localStorage.removeItem('username')
    this.authNotifier.emit('authChange', false)
    router.push({ name: 'SearchResults'})
  }

  isAuthenticated () {
    // Check for current authentication
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }
}
