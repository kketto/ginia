import { Injectable } from '@angular/core';
import { Movie } from '../shared-components/feed/feed.component';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class MoviesService {

    private movies: Movie[] = this.localStorageService.getItem("movies");

    constructor(private localStorageService: LocalStorageService) { }

    getMovies(): Movie[] {
        return this.movies;
    }

    searchMovie(searchTerm: string): Movie[] {

        searchTerm = searchTerm.toLowerCase();
        return this.movies.filter(movie => {
            return movie.title.toLowerCase().includes(searchTerm)
                || movie.director.toLowerCase().includes(searchTerm)
                || movie.cast.some(actor => actor.toLowerCase().includes(searchTerm))
        });
    }

    getMovieById(id: number): Movie {
        return this.movies.find((e) => {
            return id === e.id
        })
    }

    getMoviesByCategoryId(categoryId: number): Movie[] {

        return this.movies.filter((e) => {

            return e.categorieIds.includes(categoryId)
        })
    }

    addMovie(movie: Partial<Movie>): void {
        movie.id = this.movies.length + 1;
        movie.rating = 0;
        this.movies.push(movie as Movie);
        this.localStorageService.setItem("movies", this.movies);
    }

}
