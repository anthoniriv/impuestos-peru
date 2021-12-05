import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'inicio',
    loadChildren: () => import('./inicio-tabs/inicio-tabs.module').then( m => m.InicioTabsPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'cronograma',
    children: [
      {
        path: '',
        loadChildren: () => import('./cronograma/cronograma.module').then( m => m.CronogramaPageModule)
      },
      {
        path: ':idRuc',
        loadChildren: () => import('./cronograma/crono-detail/crono-detail.module').then( m => m.CronoDetailPageModule)
      }
    ]
  },
  {
    path: 'calculadora-select',
    loadChildren: () => import('./calculadora/calculadora-select/calculadora-select.module').then( m => m.CalculadoraSelectPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
