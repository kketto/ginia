import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PopupBuilderComponent } from './popup-builder.component';
import { PopupComponent } from './popup.component';


@NgModule({
    declarations: [
        PopupComponent,
        PopupBuilderComponent
    ],
    imports: [
        CommonModule,
    ],
    providers: [],
    exports: [PopupBuilderComponent]
})
export class PopupModule { }