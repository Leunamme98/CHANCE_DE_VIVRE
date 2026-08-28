import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil',
  },
  {
    path: 'accueil',
    loadComponent: () => import('./features/accueil/accueil').then((m) => m.Accueil),
  },
  {
    path: 'qui-sommes-nous',
    loadComponent: () =>
      import('./features/qui-sommes-nous/qui-sommes-nous').then((m) => m.QuiSommesNous),
  },
  {
    path: 'missions',
    loadComponent: () => import('./features/missions/missions').then((m) => m.Missions),
  },
  {
    path: 'projets',
    loadComponent: () => import('./features/projets/projets').then((m) => m.Projets),
  },
  {
    path: 'partenaires',
    loadComponent: () => import('./features/partenaires/partenaires').then((m) => m.Partenaires),
  },
  {
    path: 'contact',
    loadComponent: () => import('./features/contact/contact').then((m) => m.Contact),
  },
  {
    path: '**',
    redirectTo: 'accueil',
  },
];
