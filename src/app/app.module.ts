import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage-angular';
import {Drivers} from '@ionic/storage'
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule,IonicStorageModule.forRoot({
    name: '__mydb',
    driverOrder: [CordovaSQLiteDriver._driver,Drivers.IndexedDB, Drivers.LocalStorage]
  }), BrowserAnimationsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy}, SplashScreen, StatusBar],
  bootstrap: [AppComponent],
})
export class AppModule {}
