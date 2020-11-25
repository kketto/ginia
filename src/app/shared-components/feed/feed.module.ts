import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './categories/categories.component';
import { FeedComponent } from './feed.component';
import { FeedItemComponent } from './item/feed-item.component';


@NgModule({
    declarations: [
        FeedComponent,
        FeedItemComponent,
        CategoriesComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

    ],
    providers: [],
    exports: [FeedComponent]
})
export class FeedModule { }