import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject } from 'rxjs';
import { CookiesService } from './cookies.service';

@Injectable({ providedIn: 'root' })

export class UserService {

    // private _signedIn$ = new BehaviorSubject<boolean>(false);
    // signedIn$ = this._signedIn$.asObservable();

    user: any;

    constructor(private cookiesService: CookiesService, private router: Router) { }

    singIn(userName: string, password: string): boolean {
        if ((userName === "keti" || userName === "soso") && password === "soso") {
            this.user = userName;
            this.cookiesService.set('userName', userName, 10);
            // this._signedIn$.next(true);
            return true;

        }

        return false;
    }

    signOut(): void {
        this.user = null;
        // this._signedIn$.next(false);
        this.cookiesService.delete('userName');
        // this.router.navigate(['']);
    }

}