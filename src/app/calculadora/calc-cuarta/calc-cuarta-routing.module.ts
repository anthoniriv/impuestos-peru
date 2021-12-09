import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalcCuartaPage } from './calc-cuarta.page';

const routes: Routes = [
  {
    path: '',
    component: CalcCuartaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalcCuartaPageRoutingModule {}
