import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeedModule } from 'src/app/shared-components/feed/feed.module';
import { SliderModule } from 'src/app/shared-components/slider/slider.module';
import { HomeComponent } from './home.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: HomeComponent
    }
]

@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        SliderModule,
        FeedModule
    ],
    providers: [],
})
export class HomeModule { }