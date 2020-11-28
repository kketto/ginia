import { Component, OnDestroy, OnInit, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CategoriesService } from 'src/app/services/categories.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/shared-components/feed/feed.component';


@Component({
    selector: 'app-movie-add',
    templateUrl: './movie-add.component.html',
    styleUrls: ['./movie-add.component.scss']
})
export class MovieAddComponent implements OnInit, OnDestroy {

    form: FormGroup;
    subscriber: Subscription;
    editId: number;

    categories = this.categoriesService.getCategories();

    constructor(private formbuilder: FormBuilder, private route: ActivatedRoute, private categoriesService: CategoriesService,
        private router: Router, private moviesServise: MoviesService) { }


    ngOnInit(): void {

        this.subscriber = this.route.params.subscribe((params) => {
            let movie: Movie;

            if (params.id) {
                this.editId = +params.id;
                movie = this.moviesServise.getMovieById(this.editId);
            }

            this.form = this.formbuilder.group({
                title: [movie?.title || '', Validators.required],
                imageSrc: [movie?.imageSrc || '', Validators.required],
                videoSrc: [movie?.videoSrc || '', Validators.required],
                categorieIds: [movie?.categorieIds || [], Validators.required],
                year: [movie?.year || '', [Validators.required, Validators.min(1800), Validators.max(2200)]],
                director: [movie?.director || '', Validators.required],
                cast: [movie?.cast || []],
                description: [movie?.description || '', Validators.required],
            });
        })
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }


        let formValue = this.form.getRawValue();
        formValue.cast = formValue.cast.map(e => e.label);

        if (this.editId) {
            this.moviesServise.editMovie(this.editId, formValue as Partial<Movie>);
        }
        else {
            this.moviesServise.addMovie(formValue as Partial<Movie>);

        }

        this.router.navigate(['/']);
    }


    ngOnDestroy(): void {
        this.subscriber.unsubscribe();
    }
}