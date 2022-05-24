import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronogramaPage } from './cronograma.page';

const routes: Routes = [
  {
    path: '',
    component: CronogramaPage
  },
  {
    path: 'crono-detail',
    loadChildren: () => import('./crono-detail/crono-detail.module').then( m => m.CronoDetailPageModule)
  },
  {
    path: 'modal-save/:id',
    loadChildren: () => import('./modal-save/modal-save.module').then( m => m.ModalSavePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronogramaPageRoutingModule {}
