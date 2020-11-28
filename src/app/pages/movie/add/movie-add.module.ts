import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { MovieAddComponent } from './movie-add.component';
import { NgSelectModule } from '@ng-select/ng-select';

const ROUTES: Route[] = [
    {
        path: '',
        component: MovieAddComponent
    }
]

@NgModule({
    declarations: [
        MovieAddComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        NgSelectModule
    ],
    providers: [],
})
export class MovieAddModule { }