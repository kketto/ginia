import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';
import { SearchModule } from '../search/search.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { HeaderComponent } from './header.component';
import { UserMenuComponent } from './user-menu/user-menu.component';


@NgModule({
    declarations: [
        HeaderComponent,
        UserMenuComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        SearchModule,
        SignInModule
    ],
    providers: [],
    exports: [HeaderComponent]
})
export class HeaderModule { }