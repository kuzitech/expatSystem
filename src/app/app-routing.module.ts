import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    title: "Landing"
  },
  {
    path: 'brand',
    loadChildren: () => import('./pages/brand/brand.module').then( m => m.BrandPageModule),
    title: "Brand"
  },
  {
    path: 'faults',
    loadChildren: () => import('./pages/faults/faults.module').then( m => m.FaultsPageModule),
    title: "Faults"
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule),
    title: "Search"
  },
  {
    path: 'favorites',
    loadChildren: () => import('./pages/favorites/favorites.module').then( m => m.FavoritesPageModule),
    title: "Favorites"
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
