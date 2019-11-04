import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor( private authService: AuthService ) { }

    private isUrlHasToken() {
        return window.location.href.indexOf('token') > 1;
    }

    canActivate(): boolean {
        if (this.authService.isSignedIn() || this.isUrlHasToken()) {
            return true;
        }
        this.authService.signIn();
        return false;
    }

}
