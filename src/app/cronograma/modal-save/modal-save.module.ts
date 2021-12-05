import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSavePageRoutingModule } from './modal-save-routing.module';

import { ModalSavePage } from './modal-save.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSavePageRoutingModule
  ],
  declarations: [ModalSavePage]
})
export class ModalSavePageModule {}
