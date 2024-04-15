import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalcPrecioComponent } from './calc-precio.component';

const routes: Routes = [
  {
    path: '',
    component: CalcPrecioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalcPrecioRoutingModule { }
