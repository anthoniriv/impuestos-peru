import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';

import { SaveDataService } from 'src/app/services/save-data.service';

@Component({
  selector: 'app-modal-save',
  templateUrl: './modal-save.page.html',
  styleUrls: ['./modal-save.page.scss'],
})
export class ModalSavePage implements OnInit {

  rucNumber:string;
  rucName:string;
  savedRuc:string;

  constructor(
    private modalCtrl: ModalController,
    private router: Router,
    private saveDataService: SaveDataService
  ) { }

  ngOnInit() {
  }
  
  saveData(rucID:string,nameRuc:string){
    console.log('Datos Guardados',rucID,nameRuc);
    this.modalCtrl.dismiss();
    //Router to cronograma
    this.router.navigate(['/cronograma']);
  }

  async addData(){
    //pass to string rucNumber
    this.rucNumber = this.rucNumber.toString();
    //pass to string rucName
    this.rucName = this.rucName.toString();
    //save data
    this.savedRuc="true";
    console.log('Datos Guardados',this.rucNumber + ' ' + this.rucName + this.savedRuc);
    const data = {
      rucNumber: this.rucNumber,
      rucName: this.rucName,
      savedRuc: this.savedRuc
    }
    this.saveDataService.addData(data);
    this.modalCtrl.dismiss();
    //Router to cronograma
    this.router.navigate(['/cronograma']);
  }
}
