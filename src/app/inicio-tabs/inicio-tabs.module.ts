import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioTabsPageRoutingModule } from './inicio-tabs-routing.module';

import { InicioTabsPage } from './inicio-tabs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioTabsPageRoutingModule
  ],
  declarations: [InicioTabsPage]
})
export class InicioTabsPageModule {}
