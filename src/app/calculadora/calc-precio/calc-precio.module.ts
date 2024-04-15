import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalcPrecioRoutingModule } from './calc-precio-routing.module';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CalcPrecioComponent } from './calc-precio.component';

@NgModule({
  declarations: [CalcPrecioComponent],
  imports: [CommonModule, FormsModule, IonicModule, CalcPrecioRoutingModule],
})
export class CalcPrecioModule {}
