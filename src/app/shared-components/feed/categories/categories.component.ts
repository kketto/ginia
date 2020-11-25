import { Component, Input, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';

export interface Category {
    id: number;
    label: string;
    slug: string
}


@Component({
    selector: 'app-categories',
    templateUrl: './categories.component.html',
    styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

    categories: Category[];

    constructor(private categoriesService: CategoriesService) { }

    ngOnInit(): void {
        this.categories = this.categoriesService.getCategories();
    }




}