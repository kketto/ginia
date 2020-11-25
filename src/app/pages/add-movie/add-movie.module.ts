import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: AddMovieComponent
    }
]

@NgModule({
    declarations: [
        AddMovieComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES)
    ],
    providers: [],
})
export class AddMovieModule { }