import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSavePage } from './modal-save.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSavePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSavePageRoutingModule {}
