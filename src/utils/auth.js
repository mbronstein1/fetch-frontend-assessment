import { redirect } from 'react-router-dom';

class AuthService {
  getTokenDuration() {
    const storedExpirationDate = localStorage.getItem('expiration');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  }

  login(user) {
    localStorage.setItem('user', JSON.stringify(user));
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem('expiration', expiration.toISOString());
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('expiration');
    return redirect('/');
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    const tokenDuration = this.getTokenDuration();

    if (!user) {
      return redirect('/');
    }

    if (tokenDuration < 0) {
      return this.logout();
    }

    return user;
  }
}

const Auth = new AuthService();

export default Auth;
