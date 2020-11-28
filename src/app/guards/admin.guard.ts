import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserService } from '../services/user.service';

@Injectable({ providedIn: 'root' })
export class AdminGuard implements CanActivate {

    constructor(private userService: UserService, private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let isAdmin = this.isAdmin();
        if (!isAdmin) {
            this.router.navigate(['/']);
        }
        return isAdmin;
    }

    isAdmin(): boolean {
        return this.userService.user && this.userService.user === "keti";
    }
}