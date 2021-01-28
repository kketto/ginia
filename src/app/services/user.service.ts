import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CookiesService } from './cookies.service';
import jwt_decode from "jwt-decode";

@Injectable({ providedIn: 'root' })
export class UserService {
    private _user: any;

    set user(value: any) {
        this._user = value;
        this._$user.next(value);
    }

    get user(): any {
        return this._user;
    }

    private _$user = new BehaviorSubject<string>(null);
    $user = this._$user.asObservable();

    constructor(private cookiesService: CookiesService, private http: HttpClient) { }

    singIn(userName: string, password: string): Observable<string> {
        return this.http.get<string>("http://localhost:3000/login", { params: { userName, password } }).pipe(tap(token => {
            this.saveDecodedToken(token)
        }));

    }

    signUp(body: { userName: string; password: string; fullName: string }): Observable<any> {
        return this.http.post("http://localhost:3000/register", body)
    }

    signOut(): void {
        this.user = null;
        this.cookiesService.delete('token');
        // this.router.navigate(['']);
    }

    saveDecodedToken(token?: string): void {
        if (!token) {
            token = this.cookiesService.get("token");
        }
        if (token) {
            this.user = jwt_decode(token);
        }
    }
}