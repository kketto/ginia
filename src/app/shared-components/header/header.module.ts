import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ClickOutsideModule } from 'src/app/directives/click-outside.module';
import { SearchModule } from '../search/search.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { SignUpModule } from '../sign-up/sign-up.module';
import { HeaderComponent } from './header.component';
import { UserMenuComponent } from './user-menu/user-menu.component';


@NgModule({
    declarations: [
        HeaderComponent,
        UserMenuComponent,
    ],
    imports: [
        CommonModule,
        RouterModule,
        SearchModule,
        SignInModule,
        SignUpModule,
        ClickOutsideModule
    ],
    providers: [],
    exports: [HeaderComponent]
})
export class HeaderModule { }