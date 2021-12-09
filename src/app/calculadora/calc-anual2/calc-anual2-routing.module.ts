import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcAnual2Page } from './calc-anual2.page';

const routes: Routes = [
  {
    path: '',
    component: CalcAnual2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcAnual2PageRoutingModule {}
