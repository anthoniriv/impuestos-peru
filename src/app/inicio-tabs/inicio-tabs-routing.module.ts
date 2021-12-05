import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioTabsPage } from './inicio-tabs.page';

const routes: Routes = [
  {
    path: '',
    component: InicioTabsPage,
    children: [
      {
        path:'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },
      {
        path:'calculadora',
        loadChildren: () => import('../calculadora/calculadora-select/calculadora-select.module').then( m => m.CalculadoraSelectPageModule)
      },
      {
        path:'cronograma',
        loadChildren: () => import('../cronograma/cronograma.module').then( m => m.CronogramaPageModule)
      },
      {
        path:'',
        redirectTo: '/inicio/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path:'',
    redirectTo: '/inicio/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioTabsPageRoutingModule {}
