import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraSelectPageRoutingModule } from './calculadora-select-routing.module';

import { CalculadoraSelectPage } from './calculadora-select.page';
import { CalcRentabilidadComponent } from '../calc-rentabilidad/calc-rentabilidad.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraSelectPageRoutingModule,
  ],
  declarations: [CalculadoraSelectPage]
})
export class CalculadoraSelectPageModule {}
