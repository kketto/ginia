import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CategoriesService } from 'src/app/services/categories.service';
import { PopupService } from 'src/app/services/popup.service';
import { Category } from 'src/app/shared-components/feed/categories/categories.component';

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.scss']
})
export class CategoryManageComponent implements OnInit, OnDestroy {

    categories: Category[];

    private $unsibscribe = new Subject<void>();

    constructor(private categoriesService: CategoriesService, private popUpService: PopupService) { }

    ngOnInit(): void {
        this.categoriesService.$getCategories.pipe(takeUntil(this.$unsibscribe)).subscribe((categories) => {
            this.categories = categories;
        });
        this.categoriesService.dispatchGetCategories();
    }

    onEdit(category): void {
        this.popUpService.openAddCategoryPopup(category);

    }

    onAdd() {
        this.popUpService.openAddCategoryPopup()
    }

    onDelete(id: number) {
        this.categoriesService.deleteCategory(id)
            .pipe(takeUntil(this.$unsibscribe))
            .subscribe(() => {
                this.categoriesService.dispatchGetCategories();
            });
    }


    ngOnDestroy(): void {

        this.$unsibscribe.next();
        this.$unsibscribe.complete();

    }

}