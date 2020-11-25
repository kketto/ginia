import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer.component';


@NgModule({
    declarations: [
        FooterComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [FooterComponent]
})
export class FooterModule { }