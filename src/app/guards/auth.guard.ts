import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { PopupService } from '../services/popup.service';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate, CanLoad {
    constructor(private userService: UserService, private popupService: PopupService, private router: Router) { }

    canLoad(route: Route, segments: UrlSegment[]): boolean {
        return this.guardLogic();
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.guardLogic();
    }

    private guardLogic(): boolean {
        this.userService.saveDecodedToken();
        if (!this.userService.user) {
            this.router.navigate(['/']);
            this.popupService.openSignInPopup();
        }

        return true;
    }
}