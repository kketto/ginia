import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClickOutsideDirective } from 'src/app/directives/click-outside.directive';


@NgModule({
    declarations: [
        ClickOutsideDirective
    ],
    imports: [
        CommonModule,

    ],
    exports: [ClickOutsideDirective]
})
export class ClickOutsideModule { }