import { Routes } from '@angular/router';

export const routes: Routes = [
  /*{
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },*/
  {
    path: '',
    redirectTo: 'list-news',
    pathMatch: 'full',
  },
  {
    path: 'add-news',
    loadComponent: () => import('./add-news/add-news.page').then(m => m.AddNewsPage)
  },
  {
    path: 'list-news',
    loadComponent: () => import('./list-news/list-news.page').then(m => m.ListNewsPage)
  },
];
