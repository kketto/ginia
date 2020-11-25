import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { PopupService } from '../services/popup.service';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private userService: UserService, private popupService: PopupService, private router: Router) { }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.userService.user) {
            this.router.navigate(['/']);
            this.popupService.openSignInPopup();
        }

        //it requires exectlly boolean
        return !!this.userService.user;
    }


}