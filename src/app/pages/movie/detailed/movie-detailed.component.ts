import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { CategoriesService } from 'src/app/services/categories.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/shared-components/feed/feed.component';

@Component({
    selector: 'app-movie-detailed',
    templateUrl: './movie-detailed.component.html',
    styleUrls: ['./movie-detailed.component.scss']
})
export class MovieDetailedComponent implements OnInit, OnDestroy {
    movie: Movie;
    cast: string;
    categoryLabels: string;
    isAdmin: boolean;
    private subscriber: Subscription;

    constructor(private route: ActivatedRoute, private movieService: MoviesService, private titleService: Title,
        private categoriesService: CategoriesService, private adminGuard: AdminGuard) { }

    ngOnInit(): void {
        this.isAdmin = this.adminGuard.isAdmin();

        this.subscriber = this.route.params.subscribe((params) => {
            const id = params.id as string;
            this.movie = this.movieService.getMovieById(+id);
            this.titleService.setTitle(`Ginia.ge - ${this.movie.title}`);

            this.cast = this.movie.cast.join(", ");
            this.categoryLabels = this.categoriesService.getLabelsFromIds(this.movie.categorieIds).join(", ")
        });
    };

    onRateChange(rate: number): void {
        this.movieService.changeRate(this.movie.id, rate);
    }










    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }

}