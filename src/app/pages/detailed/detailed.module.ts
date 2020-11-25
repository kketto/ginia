import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { DetailedComponent } from './detailed.component';

const ROUTES: Route[] = [
    {
        path: ':id',
        component: DetailedComponent
    }
]

@NgModule({
    declarations: [
        DetailedComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES)
    ],
    providers: [],
})
export class DetailedModule { }