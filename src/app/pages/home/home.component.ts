import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/shared-components/feed/feed.component';
import { Slide } from 'src/app/shared-components/slider/slider.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


    movies: Movie[];

    slides: Slide[] = [{
        src: './assets/potter.jpg',
        alt: 'killbill',
        path: '/movie/5'
    },
    {
        src: './assets/interstellar.jpg',
        alt: 'interstellar',
        path: '/movie/1'
    }];


    constructor(private movieService: MoviesService) { }

    ngOnInit(): void {
        this.movies = this.movieService.getMovies();
    }

}