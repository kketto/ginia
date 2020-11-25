import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../feed/feed.component';
import { debounceTime, filter, map, pluck } from 'rxjs/operators'
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    form: FormGroup;

    searchedMovies: Movie[];

    private subscriber: Subscription;

    constructor(private formBuilder: FormBuilder, private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            term: ['', [Validators.required, Validators.minLength(2)]]
        });
        this.subscriber = this.form.valueChanges.pipe(
            debounceTime(500),
            pluck('term'),
        ).subscribe((termValue) => { this.onSearch(termValue) });
    }

    private onSearch(termValue: string): void {
        if (this.form.invalid) {
            this.searchedMovies = [];
            return;
        }
        this.searchedMovies = this.moviesService.searchMovie(termValue);
    }

    onBackdrop(): void {
        this.searchedMovies = [];
    }

    onDetail(): void {
        this.searchedMovies = [];
        this.form.controls.term.reset();
    }

    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }
}