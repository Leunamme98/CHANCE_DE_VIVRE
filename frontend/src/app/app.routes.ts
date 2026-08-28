import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/accueil/accueil').then((m) => m.Accueil),
  },
  {
    path: 'a-propos',
    loadComponent: () => import('./features/a-propos/a-propos').then((m) => m.APropos),
  },
  {
    path: 'projets',
    loadComponent: () => import('./features/projets/projets').then((m) => m.Projets),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
