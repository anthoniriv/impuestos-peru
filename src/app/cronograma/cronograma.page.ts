import { Component, OnInit } from '@angular/core';
import { CronoServiceService } from '../services/crono-service.service';
import { SaveDataService } from '../services/save-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cronograma',
  templateUrl: './cronograma.page.html',
  styleUrls: ['./cronograma.page.scss'],
})
export class CronogramaPage implements OnInit {

  cronograma: any;
  rucsSaved=[];
  listRucs=[];
  unicoRuc=[];

  constructor(
    private cronoService: CronoServiceService,
    private saveDataService: SaveDataService,
    private router: Router
  ) {
    this.loadData();
   }

  ngOnInit() {
    this.loadData();
    this.loadDataInterval();
  }
  
  getRucs(){
    this.rucsSaved = this.cronoService.getRUCS();
  }

  //Reload loadData function to get the new data
  ionViewDidEnter(){
    this.loadData();
  }

  //Function to use loadData function every 60 seconds
  loadDataInterval(){
    setInterval(() => {
      this.loadData();
    }, 20000);
  }

  async loadData(){
    this.listRucs = await this.saveDataService.getData();
    console.log('ESTOS SON TUS RUCS GUARDADOS',this.listRucs);
  }

  async removeItem(index){
    this.saveDataService.removeItem(index);
    this.listRucs.splice(index,1);
  }

  generaraCronograma(value){
    console.log('ESTE ES EL VALOR QUE SE ENVIA',value);
    this.cronograma="";
    this.router.navigate(['/cronograma',value]);
  }

}
