import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
    {
        path: 'manage',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => import('./manage/manage.module').then(m => m.CategoryManageModule)
    },
    {
        path: ':category',
        loadChildren: () => import('./category-detail/category-detail.module').then(m => m.CategoryDetailModule)
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CategoryModule { }
