import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from '../feed/feed.component';
import { debounceTime, filter, map, pluck, takeUntil } from 'rxjs/operators'
import { Subject, Subscription } from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
    form: FormGroup;

    searchedMovies: Movie[];

    private $unsubscribe = new Subject<void>();

    constructor(private formBuilder: FormBuilder, private moviesService: MoviesService) { }

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            term: ['', [Validators.required, Validators.minLength(2)]]
        });
        this.form.valueChanges.pipe(
            debounceTime(500),
            pluck('term'),
            takeUntil(this.$unsubscribe)
        ).subscribe((termValue) => { this.onSearch(termValue) });
    }

    private onSearch(termValue: string): void {
        if (this.form.invalid) {
            this.searchedMovies = [];
            return;
        }
        this.moviesService.searchMovie(termValue)
            .pipe(takeUntil(this.$unsubscribe))
            .subscribe(movie => {
                this.searchedMovies = movie;
            });
    }

    onBackdrop(): void {
        this.searchedMovies = [];
    }

    onDetail(): void {
        this.searchedMovies = [];
        this.form.controls.term.reset();
    }

    ngOnDestroy(): void {
        this.$unsubscribe.next();
        this.$unsubscribe.complete();
    }
}