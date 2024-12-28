import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: 'cocktail/:id',
    loadComponent: () =>
      import('./cocktail-details/cocktail-details.component').then(
        (m) => m.CocktailDetailsComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('../app/cocktail-list/cocktail-list.component').then(
        (m) => m.CocktailListComponent
      ),
  },
];
