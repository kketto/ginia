import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { UserService } from 'src/app/services/user.service';

@Component({
    selector: 'app-category-add',
    templateUrl: './category-add.component.html',
    styleUrls: ['./category-add.component.scss']
})
export class CategoryAddComponent {
    @Input()
    additionalInputs: any;

    @Output()
    close = new EventEmitter();

    private $unsubcribe = new Subject<void>();


    form: FormGroup;
    error: boolean;


    constructor(private formBuilder: FormBuilder, private categoriesService: CategoriesService) { }


    ngOnInit(): void {
        this.form = this.formBuilder.group({
            label: [this.additionalInputs?.label || '', [Validators.required, Validators.maxLength(30)]],
            slug: [this.additionalInputs?.slug || '', [Validators.required, Validators.maxLength(30), Validators.pattern(/^[A-Za-z0-9]+$/)]],
        })
    }

    onSubmit(): void {
        if (this.form.invalid) {
            this.form.markAllAsTouched();
            return;
        }
        let formValue = this.form.getRawValue()
        let chemodani;
        if (this.additionalInputs) {

            chemodani = this.categoriesService.editCategory(this.additionalInputs.id, formValue);
        } else {
            chemodani = this.categoriesService.addCategory(formValue)
        }

        chemodani.pipe(takeUntil(this.$unsubcribe))
            .subscribe(() => {
                this.categoriesService.dispatchGetCategories();
                this.close.emit();
            }, () => { this.error = true; });
    }


    ngOnDestroy(): void {
        this.$unsubcribe.next();
        this.$unsubcribe.complete();
    }

}