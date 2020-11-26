import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-user-menu',
    templateUrl: './user-menu.component.html',
    styleUrls: ['./user-menu.component.scss']
})
export class UserMenuComponent implements OnInit {

    userName: string;

    isUserMenuVisible: boolean;


    constructor(private userService: UserService) { }


    ngOnInit(): void {

        this.userName = this.userService.user;

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