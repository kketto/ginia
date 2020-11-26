import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CategoriesService } from 'src/app/services/categories.service';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/shared-components/feed/feed.component';


@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {

    form: FormGroup;

    categories = this.categoriesService.getCategories();

    constructor(private formbuilder: FormBuilder, private categoriesService: CategoriesService, private router: Router, private moviesServise: MoviesService) { }

    ngOnInit(): void {
        this.form = this.formbuilder.group({
            title: ['', Validators.required],
            imageSrc: ['', Validators.required],
            videoSrc: ['', Validators.required],
            categorieIds: [[], Validators.required],
            year: ['', [Validators.required, Validators.min(1800), Validators.max(2200)]],
            director: ['', Validators.required],
            cast: [[]],
            description: ['', Validators.required],
        });
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }

        let formValue = this.form.getRawValue();
        formValue.cast = formValue.cast.map(e => e.label);

        this.moviesServise.addMovie(formValue as Partial<Movie>);

        this.router.navigate(['/']);
    }

}