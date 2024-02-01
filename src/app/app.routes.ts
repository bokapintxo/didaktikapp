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
  },
  {
    path: 'puzzlea',
    loadComponent: () => import('./puzzlea/puzzlea.page').then( m => m.PuzzleaPage)
  },
  {
    path: 'hitzak-lotu',
    loadComponent: () => import('./hitzak-lotu/hitzak-lotu.page').then( m => m.HitzakLotuPage)
  },
  {
    path: 'hitzak-lotu-bi',
    loadComponent: () => import('./hitzak-lotu-bi/hitzak-lotu-bi.page').then( m => m.HitzakLotuBiPage)
  },
  {
    path: 'urkatua',
    loadComponent: () => import('./urkatua/urkatua.page').then( m => m.UrkatuaPage)
  },
  {
    path: 'bingo-irakaslea',
    loadComponent: () => import('./bingo-irakaslea/bingo-irakaslea.page').then( m => m.BingoIrakasleaPage)
  },
  {
    path: 'bingo-rola',
    loadComponent: () => import('./bingo-rola/bingo-rola.page').then( m => m.BingoRolaPage)
  },



];
