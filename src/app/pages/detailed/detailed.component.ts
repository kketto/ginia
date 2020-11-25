import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/shared-components/feed/feed.component';
import { Slide } from 'src/app/shared-components/slider/slider.component';

@Component({
    selector: 'app-detailed',
    templateUrl: './detailed.component.html',
    styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit, OnDestroy {
    movie: Movie;
    cast: string;
    private subscriber: Subscription;

    constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

    ngOnInit(): void {
        this.subscriber = this.route.params.subscribe((params) => {
            const id = params.id as string;
            this.movie = this.movieService.getMovieById(+id);

            this.cast = this.movie.cast.join(", ");
        });
    };

    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }



}