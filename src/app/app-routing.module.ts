import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [{
  path: '',
  loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
},
{
  path: 'movie',
  children: [
    {
      path: '',
      loadChildren: () => import('./pages/detailed/detailed.module').then(m => m.DetailedModule)
    },
    {
      path: 'add',
      canActivate: [AuthGuard, AdminGuard],
      loadChildren: () => import('./pages/add-movie/add-movie.module').then(m => m.AddMovieModule)
    },
    {
      path: 'edit/:id',
      canActivate: [AuthGuard, AdminGuard],
      loadChildren: () => import('./pages/add-movie/add-movie.module').then(m => m.AddMovieModule)

    }
  ]
},

{
  path: ':category',
  loadChildren: () => import('./pages/category-detail/category-detail.module').then(m => m.CategoryDetailModule)

},
{
  path: '**',
  redirectTo: ''
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
