import { Component, OnInit } from '@angular/core';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    userName: string;
    isAdmin: boolean;

    isUserMenuVisible: boolean;


    constructor(private userService: UserService, private admin: AdminGuard) { }


    ngOnInit(): void {
        this.userName = this.userService.user.fullName;
        this.isAdmin = this.admin.isAdmin();
    }

    onAvatar(e: MouseEvent): void {
        e.stopPropagation();
        this.isUserMenuVisible = !this.isUserMenuVisible;
    }

    onClose(): void {
        this.isUserMenuVisible = false;
    }

    onSignOut(): void {
        this.userService.signOut();
        this.onClose();
    }

}