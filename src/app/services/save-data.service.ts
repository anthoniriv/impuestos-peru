import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import * as CordovaSQLiteDriver from 'localforage-cordovasqlitedriver'
import { BehaviorSubject } from 'rxjs';

const STORAGE_KEY = 'myRucs';

@Injectable({
  providedIn: 'root'
})
export class SaveDataService {

  private storageReady= new BehaviorSubject(false);
  constructor(private storage: Storage) {
    // this.init();
  }

  async init() {
    console.log('init');
    await this.storage.defineDriver(CordovaSQLiteDriver);
    await this.storage.create();
    console.log('storage created');
  }

  getData(){
    console.log('getData');
    return this.storage.get(STORAGE_KEY) || [];
  }

  async addData(data) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.push(data);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  async removeItem(data) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    storedData.splice(data, 1);
    return this.storage.set(STORAGE_KEY, storedData);
  }

  //Get item based based if the input is equal to ruc.rucnumber
  async getItem(ruc) {
    const storedData = await this.storage.get(STORAGE_KEY) || [];
    return storedData.find(item => item.rucNumber === ruc);
  }

}
