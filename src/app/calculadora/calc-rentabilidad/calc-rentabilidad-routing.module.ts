import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcRentabilidadComponent } from './calc-rentabilidad.component';

const routes: Routes = [
  {
    path: '',
    component: CalcRentabilidadComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcRentabilidadRoutingModule { }
