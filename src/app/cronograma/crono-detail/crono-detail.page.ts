import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CronoServiceService } from 'src/app/services/crono-service.service';
import { ModalSavePage } from '../modal-save/modal-save.page';
import { RUC } from '../ruc.model';
import { SaveDataService } from 'src/app/services/save-data.service';
import { LoadingController } from '@ionic/angular';

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
      "FECHA": " de Abril"
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
    private modalController: ModalController,
    private saveDataService: SaveDataService,
    private loadingController: LoadingController
  ) {
   }

  ngOnInit() {
    this.savedRuc=false;
    this.mainFunction();
    this.presentLoading();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Porfavor espere...',
      duration: 1500
    });
    await loading.present();
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
      cssClass: 'my-modal-class',
      componentProps: {
        'rucNumber': this.rucNumber,
      }
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
    if(this.getLastDigit()=="0"){
      this.fechas[0].FECHA=this.plusString('14', " de Febrero");
      this.fechas[1].FECHA=this.plusString('14', " de Marzo");
      this.fechas[2].FECHA=this.plusString('18', " de Abril");
      this.fechas[3].FECHA=this.plusString('13', " de Mayo");
      this.fechas[4].FECHA=this.plusString('14', " de Junio");
      this.fechas[5].FECHA=this.plusString('14', " de Julio");
      this.fechas[6].FECHA=this.plusString('12', " de Agosto");
      this.fechas[7].FECHA=this.plusString('14', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('14', " de Octubre");
      this.fechas[9].FECHA=this.plusString('15', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('15', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('13', " de Enero");
    }
    else if(this.getLastDigit()=="2"){
      this.fechas[0].FECHA=this.plusString('16', " de Febrero");
      this.fechas[1].FECHA=this.plusString('16', " de Marzo");
      this.fechas[2].FECHA=this.plusString('20', " de Abril");
      this.fechas[3].FECHA=this.plusString('17', " de Mayo");
      this.fechas[4].FECHA=this.plusString('16', " de Junio");
      this.fechas[5].FECHA=this.plusString('18', " de Julio");
      this.fechas[6].FECHA=this.plusString('16', " de Agosto");
      this.fechas[7].FECHA=this.plusString('16', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('18', " de Octubre");
      this.fechas[9].FECHA=this.plusString('17', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('19', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('17', " de Enero");
    }
    else if(this.getLastDigit()=="3"){
      this.fechas[0].FECHA=this.plusString('16', " de Febrero");
      this.fechas[1].FECHA=this.plusString('16', " de Marzo");
      this.fechas[2].FECHA=this.plusString('20', " de Abril");
      this.fechas[3].FECHA=this.plusString('17', " de Mayo");
      this.fechas[4].FECHA=this.plusString('16', " de Junio");
      this.fechas[5].FECHA=this.plusString('18', " de Julio");
      this.fechas[6].FECHA=this.plusString('16', " de Agosto");
      this.fechas[7].FECHA=this.plusString('16', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('18', " de Octubre");
      this.fechas[9].FECHA=this.plusString('17', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('19', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('17', " de Enero");
    }
    else if(this.getLastDigit()=="4"){
      this.fechas[0].FECHA=this.plusString('17', " de Febrero");
      this.fechas[1].FECHA=this.plusString('17', " de Marzo");
      this.fechas[2].FECHA=this.plusString('21', " de Abril");
      this.fechas[3].FECHA=this.plusString('18', " de Mayo");
      this.fechas[4].FECHA=this.plusString('17', " de Junio");
      this.fechas[5].FECHA=this.plusString('19', " de Julio");
      this.fechas[6].FECHA=this.plusString('17', " de Agosto");
      this.fechas[7].FECHA=this.plusString('19', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('19', " de Octubre");
      this.fechas[9].FECHA=this.plusString('18', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('20', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('18', " de Enero");
    }
    else if(this.getLastDigit()=="5"){
      this.fechas[0].FECHA=this.plusString('17', " de Febrero");
      this.fechas[1].FECHA=this.plusString('17', " de Marzo");
      this.fechas[2].FECHA=this.plusString('21', " de Abril");
      this.fechas[3].FECHA=this.plusString('18', " de Mayo");
      this.fechas[4].FECHA=this.plusString('17', " de Junio");
      this.fechas[5].FECHA=this.plusString('19', " de Julio");
      this.fechas[6].FECHA=this.plusString('17', " de Agosto");
      this.fechas[7].FECHA=this.plusString('19', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('19', " de Octubre");
      this.fechas[9].FECHA=this.plusString('18', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('20', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('18', " de Enero");
    }
    else if(this.getLastDigit()=="6"){
      this.fechas[0].FECHA=this.plusString('18', " de Febrero");
      this.fechas[1].FECHA=this.plusString('18', " de Marzo");
      this.fechas[2].FECHA=this.plusString('22', " de Abril");
      this.fechas[3].FECHA=this.plusString('19', " de Mayo");
      this.fechas[4].FECHA=this.plusString('20', " de Junio");
      this.fechas[5].FECHA=this.plusString('20', " de Julio");
      this.fechas[6].FECHA=this.plusString('18', " de Agosto");
      this.fechas[7].FECHA=this.plusString('20', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('20', " de Octubre");
      this.fechas[9].FECHA=this.plusString('21', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('21', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('19', " de Enero");
    }
    else if(this.getLastDigit()=="7"){
      this.fechas[0].FECHA=this.plusString('18', " de Febrero");
      this.fechas[1].FECHA=this.plusString('18', " de Marzo");
      this.fechas[2].FECHA=this.plusString('22', " de Abril");
      this.fechas[3].FECHA=this.plusString('19', " de Mayo");
      this.fechas[4].FECHA=this.plusString('20', " de Junio");
      this.fechas[5].FECHA=this.plusString('20', " de Julio");
      this.fechas[6].FECHA=this.plusString('18', " de Agosto");
      this.fechas[7].FECHA=this.plusString('20', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('20', " de Octubre");
      this.fechas[9].FECHA=this.plusString('21', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('21', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('19', " de Enero");
    }
    else if(this.getLastDigit()=="8"){
      this.fechas[0].FECHA=this.plusString('21', " de Febrero");
      this.fechas[1].FECHA=this.plusString('21', " de Marzo");
      this.fechas[2].FECHA=this.plusString('25', " de Abril");
      this.fechas[3].FECHA=this.plusString('20', " de Mayo");
      this.fechas[4].FECHA=this.plusString('21', " de Junio");
      this.fechas[5].FECHA=this.plusString('21', " de Julio");
      this.fechas[6].FECHA=this.plusString('19', " de Agosto");
      this.fechas[7].FECHA=this.plusString('21', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('21', " de Octubre");
      this.fechas[9].FECHA=this.plusString('22', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('22', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('20', " de Enero");
    }
    else if(this.getLastDigit()=="9"){
      this.fechas[0].FECHA=this.plusString('21', " de Febrero");
      this.fechas[1].FECHA=this.plusString('21', " de Marzo");
      this.fechas[2].FECHA=this.plusString('25', " de Abril");
      this.fechas[3].FECHA=this.plusString('20', " de Mayo");
      this.fechas[4].FECHA=this.plusString('21', " de Junio");
      this.fechas[5].FECHA=this.plusString('21', " de Julio");
      this.fechas[6].FECHA=this.plusString('19', " de Agosto");
      this.fechas[7].FECHA=this.plusString('21', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('21', " de Octubre");
      this.fechas[9].FECHA=this.plusString('22', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('22', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('20', " de Enero");
    }
    else if(this.getLastDigit()=="1"){
      this.fechas[0].FECHA=this.plusString('15', " de Febrero");
      this.fechas[1].FECHA=this.plusString('15', " de Marzo");
      this.fechas[2].FECHA=this.plusString('19', " de Abril");
      this.fechas[3].FECHA=this.plusString('16', " de Mayo");
      this.fechas[4].FECHA=this.plusString('15', " de Junio");
      this.fechas[5].FECHA=this.plusString('15', " de Julio");
      this.fechas[6].FECHA=this.plusString('15', " de Agosto");
      this.fechas[7].FECHA=this.plusString('15', " de Setiembre");
      this.fechas[8].FECHA=this.plusString('17', " de Octubre");
      this.fechas[9].FECHA=this.plusString('16', " de Noviembre");
      this.fechas[10].FECHA=this.plusString('16', " de Diciembre");
      this.fechas[11].FECHA=this.plusString('16', " de Enero");
    }
    //Aqui se detiene el loading
  }
}
