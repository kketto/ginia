import { Component, } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
    selector: 'app-add-movie',
    templateUrl: './add-movie.component.html',
    styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {

    form: FormGroup;

    constructor(private formbuilder: FormBuilder) { }

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
}