import { Injectable, Type } from '@angular/core';
import { Subject } from 'rxjs';
import { SignInComponent } from '../shared-components/sign-in/sign-in.component';
import { SignUpComponent } from '../shared-components/sign-up/sign-up.component';

export interface PopupConfig {
    component: Type<unknown>;
    title?: string;
    width?: string;
    height?: string;
}

@Injectable({ providedIn: 'root' })
export class PopupService {
    private _open$ = new Subject<PopupConfig>();
    open$ = this._open$.asObservable();

    open(config: PopupConfig): void {
        this._open$.next(config);
    }


    openSignInPopup(): void {
        this.open({ component: SignInComponent, title: 'ავტორიზაცია', width: "400px", height: "350px" });
    }

    openSignUpPopup(): void {
        this.open({ component: SignUpComponent, title: 'რეგისტრაცია', width: "600px", height: "550px" });
    }
}