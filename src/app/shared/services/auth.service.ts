import { Injectable, Inject, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isSignedInListener = new BehaviorSubject<boolean>(this.isSignedIn());

  constructor(private http: HttpClient) { }

  private signInEventEmitter() {
    this.isSignedInListener.next(this.isSignedIn());
  }

  public isSignedIn(): boolean {
    return (this.getAuthToken()) ? true : false;
  }

  public getAuthToken(): string {
    return localStorage.getItem('AUTH_TOKEN');
  }

  public getRefreshToken(): string {
    return localStorage.getItem('REFRESH_TOKEN');
  }

  public setAuthToken(authToken: string, refreshToken: string) {
    localStorage.setItem('AUTH_TOKEN', authToken);
    localStorage.setItem('REFRESH_TOKEN', refreshToken);
    this.signInEventEmitter();
  }

  public signIn() {
    window.location.href = environment.loginUrl;
  }

  public signOut(): Observable<any> {
    const refreshToken = this.getRefreshToken();
    localStorage.removeItem('AUTH_TOKEN');
    localStorage.removeItem('REFRESH_TOKEN');
    return this.http.patch(`${environment.refreshTokenUrl}/${refreshToken}/revoke`, {});
  }

  public refreshToken(): Observable<any> {
    const authToken = this.getAuthToken();
    const refreshToken = this.getRefreshToken();
    return this.http.get(`${environment.refreshTokenUrl}/${refreshToken}/refreshfor/${authToken}`, {});
  }

  public getUserInfoFromToken() {
    const token = this.getAuthToken();
    if (token) {
      const base64Url = token.split('.')[1];
      const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
      const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
      }).join(''));
      return JSON.parse(jsonPayload);
    }
    return null;
  }

  public getAccessLevel(): number {
    const token = this.getUserInfoFromToken();
    if (token) {
      const userRole = token.role;
      return (userRole.toLocaleLowerCase() === 'admin') ? 1 : (userRole.toLocaleLowerCase() === 'user') ? 2 : 3;
    }
    return null;
  }
}
