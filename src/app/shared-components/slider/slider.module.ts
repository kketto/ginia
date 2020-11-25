import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SliderComponent } from './slider.component';


@NgModule({
    declarations: [
        SliderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    providers: [],
    exports: [SliderComponent]
})
export class SliderModule { }