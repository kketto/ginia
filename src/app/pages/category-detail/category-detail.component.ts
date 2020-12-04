import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Category } from 'src/app/shared-components/feed/categories/categories.component';
import { Movie } from 'src/app/shared-components/feed/feed.component';

@Component({
    selector: 'app-category-detail',
    templateUrl: './category-detail.component.html',
    styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit, OnDestroy {

    categoryMovies: Movie[];
    private $unsubscribe = new Subject<void>();

    constructor(private movieService: MoviesService, private route: ActivatedRoute, private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.route.params.pipe(takeUntil(this.$unsubscribe)).subscribe((params) => {
            const categoryName = params.category as string;
            const categoryId = this.categoriesService.getCategoryBySlug(categoryName).id;
            this.categoryMovies = this.movieService.getMoviesByCategoryId(categoryId)
        })

    }

    ngOnDestroy(): void {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }

}