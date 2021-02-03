import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookiesService } from '../services/cookies.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private cookiesService: CookiesService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.cookiesService.get("token");
        if (token) {
            req = req.clone({
                setHeaders: {
                    Authorization: token
                }
            });
        }

        return next.handle(req);
    }
}