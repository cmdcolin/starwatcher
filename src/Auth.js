import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    clientID: 'QPm0fLP8YMBbQiY9kjs0uAYh8p3zQ9jZ',
    domain: 'starwatcher.auth0.com',
    redirectUri: 'http://vastholdings.us/starwatcher/build',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}
