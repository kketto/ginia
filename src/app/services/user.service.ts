import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { CookiesService } from './cookies.service';

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

    constructor(private cookiesService: CookiesService, private router: Router) { }

    singIn(userName: string, password: string): boolean {
        if ((userName === "keti" || userName === "soso") && password === "soso") {
            this.user = userName;
            this.cookiesService.set('userName', userName, 10);
            return true;

        }

        return false;
    }

    signOut(): void {
        this.user = null;
        this.cookiesService.delete('userName');
        // this.router.navigate(['']);
    }

}