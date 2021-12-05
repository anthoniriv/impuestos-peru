import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CronoServiceService } from 'src/app/services/crono-service.service';
import { ModalSavePage } from '../modal-save/modal-save.page';
import { RUC } from '../ruc.model';
import { SaveDataService } from 'src/app/services/save-data.service';

@Component({
  selector: 'app-crono-detail',
  templateUrl: './crono-detail.page.html',
  styleUrls: ['./crono-detail.page.scss'],
})
export class CronoDetailPage implements OnInit {

  public dataLoaded:boolean = false;
  rucNumber:any;
  rucHere:any;
  public savedRuc:boolean = false;


  public rucs:any;

  public fechas:any=[
    {
      "PERIODO":"ENERO ",
      "FECHA": " de Enero"
    },
    {
      "PERIODO":"FEBRERO ",
      "FECHA": " de Febrero"
    },
    {
      "PERIODO":"MARZO ",
      "FECHA": " de Marzo"
    },
    {
      "PERIODO":"ABRIL ",
      "FECHA": " de Marzo"
    },
    {
      "PERIODO":"MAYO ",
      "FECHA": " de Mayo"
    },
    {
      "PERIODO":"JUNIO ",
      "FECHA": " de Junio"
    },
    {
      "PERIODO":"JULIO ",
      "FECHA": " de Julio"
    },
    {
      "PERIODO":"AGOSTO ",
      "FECHA": " de Agosto"
    },
    {
      "PERIODO":"SETIEMBRE ",
      "FECHA": " de Setiembre"
    },
    {
      "PERIODO":"OCTUBRE ",
      "FECHA": " de Octubre"
    },
    {
      "PERIODO":"NOVIEMBRE ",
      "FECHA": " de Noviembre"
    },
    {
      "PERIODO":"DICIEMBRE ",
      "FECHA": " de Diciembre"
    },
  ]

  constructor(
   private activateRoute: ActivatedRoute,
   private cronoService: CronoServiceService,
   private modalController: ModalController,
    private saveDataService: SaveDataService
  ) {
   }

  ngOnInit() {
    this.savedRuc=false;
    this.mainFunction();
  }

  ionViewDidEnter(){
    this.mainFunction();
    this.editFechaAll();
    this.editPeriodoAll();
  }
  
  getRUCDetail(){
    this.activateRoute.paramMap.subscribe(params => {
      const id = params.get('idRuc')
      this.getSpecificRuc(id);
      this.changeDataLoaded();
      this.rucs=this.fechas;
      });
  }

  //Change dataLoaded to true afther 20 seconds
  changeDataLoaded(){
    setTimeout(() => {
      this.dataLoaded = true;
    }, 1000);
  }

  async getSpecificRuc(id:any){
    this.rucHere = await this.saveDataService.getItem(id);
    this.rucNumber = id;
    this.savedRuc = true;
    if(this.rucHere==null){
      this.rucHere = id;
      this.rucNumber = id;
      this.savedRuc = false;
    }
    console.log(this.rucHere);
  }

  async mainFunction(){
    await this.getRUCDetail();
    if(this.dataLoaded==true){
      await this.editFechaAll();
      await this.editPeriodoAll();
    }
  }

  async openModal(){
    const modal = await this.modalController.create({
      component: ModalSavePage,
      cssClass: 'my-modal-class'
    });
    return await modal.present();
  }

  //Function to plus a string into anothor string
  plusString(str1,str2){
    return str1+str2;
  }

  //Function to get the year we are in
  getYear(){
    var date = new Date();
    var year = date.getFullYear();
    return year;
  }

  //Function to use plusString function into all PERIODO values of fechas array
  editPeriodoAll(){
    for(let i=0;i<this.fechas.length;i++){
      this.fechas[i].PERIODO=this.plusString(this.fechas[i].PERIODO, + `${this.getYear()}`);
    }
  }

  //Function to get the last digit of rucHERE.ruc
  getLastDigit(){
    if(this.rucHere.rucNumber){
      var ruc = this.rucHere.rucNumber;
      var lastDigit = ruc.substring(10,11);
      console.log(lastDigit);
      return lastDigit;
    }else{
      var ruc = this.rucHere;
      var lastDigit = ruc.substring(10,11);
      console.log(lastDigit);
      return lastDigit;
    }
  }

  //Function to us plusString function into all FECHA values of fechas array depending on the last digit of rucHERE.ruc
  editFechaAll(){
    this.getLastDigit();
    if(this.getLastDigit()=="1"){
      this.fechas[0].FECHA=this.plusString('16', " de Enero");
      this.fechas[1].FECHA=this.plusString('15', " de Febrero");
      this.fechas[2].FECHA=this.plusString('14', " de Marzo");
      this.fechas[3].FECHA=this.plusString('13', " de Abril");
      this.fechas[4].FECHA=this.plusString('12', " de Mayo");
      this.fechas[5].FECHA=this.plusString('11', " de Junio");
      this.fechas[6].FECHA=this.plusString('10', " de Julio");
      this.fechas[7].FECHA=this.plusString('09', " de Agosto");
      this.fechas[8].FECHA=this.plusString('08', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('07', " de Octubre");
      this.fechas[10].FECHA=this.plusString('06', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('05', " de Diciembre");
    }
    else if(this.getLastDigit()=="2"){
      this.fechas[0].FECHA=this.plusString('15', " de Enero");
      this.fechas[1].FECHA=this.plusString('14', " de Febrero");
      this.fechas[2].FECHA=this.plusString('13', " de Marzo");
      this.fechas[3].FECHA=this.plusString('12', " de Abril");
      this.fechas[4].FECHA=this.plusString('11', " de Mayo");
      this.fechas[5].FECHA=this.plusString('10', " de Junio");
      this.fechas[6].FECHA=this.plusString('09', " de Julio");
      this.fechas[7].FECHA=this.plusString('08', " de Agosto");
      this.fechas[8].FECHA=this.plusString('07', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('06', " de Octubre");
      this.fechas[10].FECHA=this.plusString('05', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('04', " de Diciembre");
    }
    else if(this.getLastDigit()=="3"){
      this.fechas[0].FECHA=this.plusString('14', " de Enero");
      this.fechas[1].FECHA=this.plusString('13', " de Febrero");
      this.fechas[2].FECHA=this.plusString('12', " de Marzo");
      this.fechas[3].FECHA=this.plusString('11', " de Abril");
      this.fechas[4].FECHA=this.plusString('10', " de Mayo");
      this.fechas[5].FECHA=this.plusString('09', " de Junio");
      this.fechas[6].FECHA=this.plusString('08', " de Julio");
      this.fechas[7].FECHA=this.plusString('07', " de Agosto");
      this.fechas[8].FECHA=this.plusString('06', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('05', " de Octubre");
      this.fechas[10].FECHA=this.plusString('04', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('03', " de Diciembre");
    }
    else if(this.getLastDigit()=="4"){
      this.fechas[0].FECHA=this.plusString('13', " de Enero");
      this.fechas[1].FECHA=this.plusString('12', " de Febrero");
      this.fechas[2].FECHA=this.plusString('11', " de Marzo");
      this.fechas[3].FECHA=this.plusString('10', " de Abril");
      this.fechas[4].FECHA=this.plusString('09', " de Mayo");
      this.fechas[5].FECHA=this.plusString('08', " de Junio");
      this.fechas[6].FECHA=this.plusString('07', " de Julio");
      this.fechas[7].FECHA=this.plusString('06', " de Agosto");
      this.fechas[8].FECHA=this.plusString('05', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('04', " de Octubre");
      this.fechas[10].FECHA=this.plusString('03', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('02', " de Diciembre");
    }
    else if(this.getLastDigit()=="5"){
      this.fechas[0].FECHA=this.plusString('12', " de Enero");
      this.fechas[1].FECHA=this.plusString('11', " de Febrero");
      this.fechas[2].FECHA=this.plusString('10', " de Marzo");
      this.fechas[3].FECHA=this.plusString('09', " de Abril");
      this.fechas[4].FECHA=this.plusString('08', " de Mayo");
      this.fechas[5].FECHA=this.plusString('07', " de Junio");
      this.fechas[6].FECHA=this.plusString('06', " de Julio");
      this.fechas[7].FECHA=this.plusString('05', " de Agosto");
      this.fechas[8].FECHA=this.plusString('04', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('03', " de Octubre");
      this.fechas[10].FECHA=this.plusString('02', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('01', " de Diciembre");
    }
    else if(this.getLastDigit()=="6"){
      this.fechas[0].FECHA=this.plusString('11', " de Enero");
      this.fechas[1].FECHA=this.plusString('10', " de Febrero");
      this.fechas[2].FECHA=this.plusString('09', " de Marzo");
      this.fechas[3].FECHA=this.plusString('08', " de Abril");
      this.fechas[4].FECHA=this.plusString('07', " de Mayo");
      this.fechas[5].FECHA=this.plusString('06', " de Junio");
      this.fechas[6].FECHA=this.plusString('05', " de Julio");
      this.fechas[7].FECHA=this.plusString('04', " de Agosto");
      this.fechas[8].FECHA=this.plusString('03', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('02', " de Octubre");
      this.fechas[10].FECHA=this.plusString('01', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('00', " de Diciembre");
    }
    else if(this.getLastDigit()=="7"){
      this.fechas[0].FECHA=this.plusString('10', " de Enero");
      this.fechas[1].FECHA=this.plusString('09', " de Febrero");
      this.fechas[2].FECHA=this.plusString('08', " de Marzo");
      this.fechas[3].FECHA=this.plusString('07', " de Abril");
      this.fechas[4].FECHA=this.plusString('06', " de Mayo");
      this.fechas[5].FECHA=this.plusString('05', " de Junio");
      this.fechas[6].FECHA=this.plusString('04', " de Julio");
      this.fechas[7].FECHA=this.plusString('03', " de Agosto");
      this.fechas[8].FECHA=this.plusString('02', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('01', " de Octubre");
      this.fechas[10].FECHA=this.plusString('00', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('99', " de Diciembre");
    }
    else if(this.getLastDigit()=="8"){
      this.fechas[0].FECHA=this.plusString('09', " de Enero");
      this.fechas[1].FECHA=this.plusString('08', " de Febrero");
      this.fechas[2].FECHA=this.plusString('07', " de Marzo");
      this.fechas[3].FECHA=this.plusString('06', " de Abril");
      this.fechas[4].FECHA=this.plusString('05', " de Mayo");
      this.fechas[5].FECHA=this.plusString('04', " de Junio");
      this.fechas[6].FECHA=this.plusString('03', " de Julio");
      this.fechas[7].FECHA=this.plusString('02', " de Agosto");
      this.fechas[8].FECHA=this.plusString('01', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('00', " de Octubre");
      this.fechas[10].FECHA=this.plusString('99', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('98', " de Diciembre");
    }
    else if(this.getLastDigit()=="9"){
      this.fechas[0].FECHA=this.plusString('08', " de Enero");
      this.fechas[1].FECHA=this.plusString('07', " de Febrero");
      this.fechas[2].FECHA=this.plusString('06', " de Marzo");
      this.fechas[3].FECHA=this.plusString('05', " de Abril");
      this.fechas[4].FECHA=this.plusString('04', " de Mayo");
      this.fechas[5].FECHA=this.plusString('03', " de Junio");
      this.fechas[6].FECHA=this.plusString('02', " de Julio");
      this.fechas[7].FECHA=this.plusString('01', " de Agosto");
      this.fechas[8].FECHA=this.plusString('00', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('99', " de Octubre");
      this.fechas[10].FECHA=this.plusString('98', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('97', " de Diciembre");
    }
    else if(this.getLastDigit()=="0"){
      this.fechas[0].FECHA=this.plusString('07', " de Enero");
      this.fechas[1].FECHA=this.plusString('06', " de Febrero");
      this.fechas[2].FECHA=this.plusString('05', " de Marzo");
      this.fechas[3].FECHA=this.plusString('04', " de Abril");
      this.fechas[4].FECHA=this.plusString('03', " de Mayo");
      this.fechas[5].FECHA=this.plusString('02', " de Junio");
      this.fechas[6].FECHA=this.plusString('01', " de Julio");
      this.fechas[7].FECHA=this.plusString('00', " de Agosto");
      this.fechas[8].FECHA=this.plusString('99', " de Setiembre");
      this.fechas[9].FECHA=this.plusString('98', " de Octubre");
      this.fechas[10].FECHA=this.plusString('97', " de Noviembre");
      this.fechas[11].FECHA=this.plusString('96', " de Diciembre");
    }
  }
}
