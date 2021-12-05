import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CronoDetailPageRoutingModule } from './crono-detail-routing.module';

import { CronoDetailPage } from './crono-detail.page';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CronoDetailPageRoutingModule,
    NgxDatatableModule
  ],
  declarations: [CronoDetailPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CronoDetailPageModule {}
