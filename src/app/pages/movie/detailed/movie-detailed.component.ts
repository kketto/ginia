import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { CategoriesService } from 'src/app/services/categories.service';
import { MoviesService } from 'src/app/services/movies.service';
import { UserService } from 'src/app/services/user.service';
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
    private $unsubscribe = new Subject<void>();

    constructor(private route: ActivatedRoute,
        private movieService: MoviesService,
        private titleService: Title,
        private adminGuard: AdminGuard,
        private userService: UserService) { }

    ngOnInit(): void {
        this.userService.$user.pipe(takeUntil(this.$unsubscribe))
            .subscribe(() => {
                this.isAdmin = this.adminGuard.isAdmin();
            });

        this.route.params.pipe(takeUntil(this.$unsubscribe))
            .subscribe((params) => {
                const id = params.id as string;
                this.movieService.getMovieById(+id)
                    .pipe(takeUntil(this.$unsubscribe))
                    .subscribe((movie) => {
                        this.movie = movie;
                        this.titleService.setTitle(`Ginia.ge - ${this.movie.title}`);
                        this.cast = this.movie.cast;//.join(", ");
                        this.categoryLabels = this.movie.categories.map(category => category.label).join(', ')

                    });
            });
    };

    onRateChange(rate: number): void {
        this.movieService.changeRate(this.movie.id, rate);
    }

    ngOnDestroy(): void {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }

}