class AuthService {
  loggedIn() {
    const accessCookie = document.cookie.indexOf('fetch-access-token');
    return accessCookie !== -1;
  }
}

const Auth = new AuthService();

export default Auth;
