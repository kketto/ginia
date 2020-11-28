import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MovieDetailedComponent } from './movie-detailed.component';
import { BarRatingModule } from "ngx-bar-rating";


const ROUTES: Route[] = [
    {
        path: ':id',
        component: MovieDetailedComponent
    }
]

@NgModule({
    declarations: [
        MovieDetailedComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        BarRatingModule
    ],
    providers: [],
})
export class MovieDetailedModule { }