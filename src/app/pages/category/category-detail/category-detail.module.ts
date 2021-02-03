import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { FeedModule } from 'src/app/shared-components/feed/feed.module';
import { CategoryDetailComponent } from './category-detail.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: CategoryDetailComponent
    }
]

@NgModule({
    declarations: [
        CategoryDetailComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(ROUTES),
        FeedModule
    ],
    providers: [],
})
export class CategoryDetailModule { }