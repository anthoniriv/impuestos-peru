import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CronoDetailPage } from './crono-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CronoDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CronoDetailPageRoutingModule {}
