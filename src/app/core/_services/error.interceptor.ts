import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';

import { AuthService } from '../../shared/services/auth.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                return this.handleUnauthorized(request, next);
            } else {
                const error = err.error || err.statusText;
                return throwError(error);
            }
        }));
    }

    private addToken(request: HttpRequest<any>, authToken: string) {
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${authToken}`,
                'content-type': 'application/json'
            }
        });
    }

    handleUnauthorized(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return this.authService.refreshToken().pipe(
            switchMap((token: any) => {
                if (token) {
                    return next.handle(this.addToken(req, token.accessToken));
                } else {
                    return this.authService.signOut();
                }
            }),
            catchError((err) => this.authService.signOut()));
    }
}
