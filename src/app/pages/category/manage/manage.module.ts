import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { NgSelectModule } from '@ng-select/ng-select';
import { CategoryAddComponent } from './add/category-add.component';
import { CategoryManageComponent } from './manage.component';

const ROUTES: Route[] = [
    {
        path: '',
        component: CategoryManageComponent
    },

]

@NgModule({
    declarations: [
        CategoryManageComponent,
        CategoryAddComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(ROUTES),
        NgSelectModule
    ],
    providers: [],
})
export class CategoryManageModule { }