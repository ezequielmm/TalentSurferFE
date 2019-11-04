import { Injectable, Inject, EventEmitter } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isSignedInListener = new BehaviorSubject<boolean>(this.isSignedIn());

  constructor() { }

  private signInEventEmitter() {
    this.isSignedInListener.next(this.isSignedIn());
  }

  public isSignedIn(): boolean {
    return (this.getAuthToken()) ? true : false;
  }

  public getAuthToken(): string {
    return localStorage.getItem('AUTH_TOKEN');
  }

  public setAuthToken(authToken: string) {
    localStorage.setItem('AUTH_TOKEN', authToken);
    this.signInEventEmitter();
  }

  public signIn() {
    window.location.href = environment.loginUrl;
  }

  public signOut() {
    localStorage.removeItem('AUTH_TOKEN');
  }
}
