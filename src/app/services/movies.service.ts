import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../shared-components/feed/feed.component';
import { CookiesService } from './cookies.service';
import { LocalStorageService } from './local-storage.service';

@Injectable({ providedIn: 'root' })
export class MoviesService {

    private movies: Movie[] = this.localStorageService.getItem("movies") || [];

    constructor(private localStorageService: LocalStorageService, private http: HttpClient, private cookiesService: CookiesService) { }

    getMovies(): Observable<Movie[]> {
        return this.http.get<Movie[]>('http://localhost:3000/movies');
    }

    searchMovie(searchTerm: string): Observable<Movie[]> {
        return this.http.get<Movie[]>('http://localhost:3000/movies/search/' + searchTerm);


    }

    getMovieById(id: number): Observable<Movie> {
        return this.http.get<Movie>('http://localhost:3000/movies/' + id);
    }

    getMoviesByCategoryId(categoryId: number): Observable<Movie[]> {

        return this.http.get<Movie[]>(`http://localhost:3000/categories/${categoryId}/movies`);

    }

    addMovie(movie: Partial<Movie>): void {
        movie.id = this.movies.length + 1;
        movie.rating = 0;

        let headers = new HttpHeaders({ 'Authorization': this.cookiesService.get("token") });
        this.http.post('http://localhost:3000/movies', movie, { headers }).subscribe((r) => {
        });
        this.movies.push(movie as Movie);
        this.localStorageService.setItem("movies", this.movies);
    }

    editMovie(id: number, movie: Partial<Movie>): void {
        this.http.put(`http://localhost:3000/movies/${id}`, movie).subscribe((r) => {
        })
    }

    changeRate(id: number, rate: number): void {
        this.http.put(`http://localhost:3000/movies/${id}/changeRate`, { rate }).subscribe((r) => {
        });
    }

}
