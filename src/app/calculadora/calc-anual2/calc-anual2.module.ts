import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalcAnual2PageRoutingModule } from './calc-anual2-routing.module';

import { CalcAnual2Page } from './calc-anual2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalcAnual2PageRoutingModule
  ],
  declarations: [CalcAnual2Page]
})
export class CalcAnual2PageModule {}
