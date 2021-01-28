import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up.component';



@NgModule({
    declarations: [
        SignUpComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [],
    exports: [SignUpComponent]
})
export class SignUpModule { }

