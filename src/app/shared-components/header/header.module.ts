import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SearchModule } from '../search/search.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { HeaderComponent } from './header.component';


@NgModule({
    declarations: [
        HeaderComponent
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