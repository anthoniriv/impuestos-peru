import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcAnual1Page } from './calc-anual1.page';

const routes: Routes = [
  {
    path: '',
    component: CalcAnual1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcAnual1PageRoutingModule {}
