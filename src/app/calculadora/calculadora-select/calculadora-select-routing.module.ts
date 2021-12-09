import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalcAnual1Page } from '../calc-anual1/calc-anual1.page';
import { CalcAnual2Page } from '../calc-anual2/calc-anual2.page';
import { CalcUnicaPage } from '../calc-unica/calc-unica.page';

import { CalculadoraSelectPage } from './calculadora-select.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraSelectPage
  },
  {
    path: 'calc-unic',
    component: CalcUnicaPage
  },
  {
    path: 'calc-anual1',
    component: CalcAnual1Page
  },
  {
    path: 'calc-anual2',
    component: CalcAnual2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraSelectPageRoutingModule {}
