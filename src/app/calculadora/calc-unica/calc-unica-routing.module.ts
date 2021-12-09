import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcUnicaPage } from './calc-unica.page';

const routes: Routes = [
  {
    path: '',
    component: CalcUnicaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcUnicaPageRoutingModule {}
