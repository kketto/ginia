import { Component } from '@angular/core';
import { PopupService } from 'src/app/services/popup.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private popupService: PopupService, public userService: UserService) { }

    onSignIn(): void {
        this.popupService.openSignInPopup();
    }

    onSignUp(): void {
        this.popupService.openSignUpPopup();
    }
}