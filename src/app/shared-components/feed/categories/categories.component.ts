import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { Movie } from '../feed.component';

export interface Category {
    id: number;
    label: string;
    slug: string;
    movies?: Movie[];
}


@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {

    categories: Category[];

    private $unsibscribe = new Subject<void>();

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.categoriesService.getCategories().pipe(takeUntil(this.$unsibscribe)).subscribe((categories) => {
            this.categories = categories;
        });
    }


    ngOnDestroy(): void {

        this.$unsibscribe.next();
        this.$unsibscribe.complete();

    }

}