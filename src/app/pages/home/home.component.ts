import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/shared-components/feed/feed.component';
import { Slide } from 'src/app/shared-components/slider/slider.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {


    movies: Movie[];

    slides: Slide[];
    // = [{
    //     src: './assets/potter.jpg',
    //     alt: 'killbill',
    //     path: '/movie/5'
    // },
    // {
    //     src: './assets/interstellar.jpg',
    //     alt: 'interstellar',
    //     path: '/movie/1'
    // }];

    private $unsibscribe = new Subject<void>();


    constructor(private movieService: MoviesService, private http: HttpClient) { }

    ngOnInit(): void {

        this.http.get('http://localhost:3000/slide')
            .pipe(takeUntil(this.$unsibscribe))
            .subscribe((slide) => { this.slides = slide as any })

        this.movieService.getMovies()
            .pipe(takeUntil(this.$unsibscribe))
            .subscribe(movies => {
                this.movies = movies;
            });
    }

    ngOnDestroy(): void {
        this.$unsibscribe.next();
        this.$unsibscribe.complete()
    }

}