import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcRentabilidadRoutingModule } from './calc-rentabilidad-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalcRentabilidadComponent } from './calc-rentabilidad.component';

@NgModule({
  declarations: [CalcRentabilidadComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcRentabilidadRoutingModule,
  ],
})
export class CalcRentabilidadModule {}
