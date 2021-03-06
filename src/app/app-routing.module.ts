import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'movie',
    loadChildren: () => import('./pages/movie/movie.module').then(m => m.MovieModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryModule)

  },
  {
    path: '**',
    redirectTo: ''
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy', initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
