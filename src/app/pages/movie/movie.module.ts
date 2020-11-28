import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from 'src/app/guards/admin.guard';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
    {
        path: 'add',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => import('./add/movie-add.module').then(m => m.MovieAddModule)
    },
    {
        path: ':id',
        loadChildren: () => import('./detailed/movie-detailed.module').then(m => m.MovieDetailedModule)
    },
    {
        path: 'edit/:id',
        canActivate: [AuthGuard, AdminGuard],
        loadChildren: () => import('./add/movie-add.module').then(m => m.MovieAddModule)

    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MovieModule { }
