import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'template-page',
    loadComponent: () => import('./template-page/template-page.page').then( m => m.TemplatePagePage)
  },
  {
    path: 'dialog',
    loadComponent: () => import('./dialog/dialog.page').then( m => m.DialogPage)
  },
  {
    path: 'bingoa',
    loadComponent: () => import('./bingoa/bingoa.page').then( m => m.BingoaPage)
  },  {
    path: 'hitzak-lotu',
    loadComponent: () => import('./hitzak-lotu/hitzak-lotu.page').then( m => m.HitzakLotuPage)
  },


];
