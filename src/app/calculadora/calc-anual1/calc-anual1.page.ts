import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-anual1',
  templateUrl: './calc-anual1.page.html',
  styleUrls: ['./calc-anual1.page.scss'],
})
export class CalcAnual1Page implements OnInit {

  venta:any;
  igv:any;
  total:any;

  compras:any;
  igv_compras:any;
  creditofiscal:any;
  total_compras:any;

  credito_mesanterior:any;
  total_mesanteriorTot:any;

  igv_pagar:any;
  renta_factor:any;
  detracion:any;

  selected:any;
  regimen:any;
  RER:any;
  RMT:any;
  RG:any;

  isTouchedVenta:boolean = false;
  isTouchedIgv:boolean = false;
  isTouchedTotal:boolean = false;

  isTouchedCompras:boolean = false;
  isTouchedCredt:boolean = false;
  isTouchedtotal_mesanteriorTot:boolean = false;

  options =  [
    {
      "regimen": "Régimen Especial de Renta"
    },
    {
      "regimen": "Régimen MYPE Tributario"
    },
    {
      "regimen": "Régimen General"
    }
  ];
  constructor() { }

  ngOnInit() {
    this.clearAll();
  }

  //

  clearAll(){
    this.venta="";
    this.igv="";
    this.total="";
    this.compras="";
    this.creditofiscal="";
    this.total_compras="";
    this.credito_mesanterior="";
    this.total_mesanteriorTot="";
  }

  getVenta(valor:any) {
    if(this.isTouchedVenta=true){
      console.log("Estoy calculando en venta");
      this.venta = parseFloat(valor);
      this.calcIgv();
      this.calcTotal();
      //Conditional to check if venta is NaN
      if(isNaN(this.venta)){
        this.igv = "";
        this.total = "";
        this.venta = "";
      }
      console.log(this.venta);
    }
  }

  getCompra(valor:any) {
    if(this.isTouchedCompras=true){
      console.log("Estoy calculando en compras");
      this.compras = parseFloat(valor);
      // this.calcCredito();
      this.calcTotalCompras();
      this.calcIgvPagar();
      //Conditional to check if venta is NaN
      if(isNaN(this.compras)){
        this.creditofiscal = "";
        this.total_compras = "";
        this.compras = "";
      }
      console.log(this.compras);
    }
  }

  getCredtMes(valor:any) {
    if(this.isTouchedCredt=true){
      console.log("Estoy calculando en credmes");
      this.credito_mesanterior = parseFloat(valor);
      this.calcIgvPagar();
      this.calcTotalMesAnterior1();
      if(isNaN(this.credito_mesanterior)){
        this.credito_mesanterior = "";
        this.total_mesanteriorTot = "";
      }
      console.log(this.credito_mesanterior);
    }
  }

  calcTotalMesAnterior1(){
    if(this.isTouchedCredt=true){
      console.log('Total numero mes anterior')
      var numTotal = (this.credito_mesanterior*100)/18;
      numTotal = numTotal + this.credito_mesanterior;
      numTotal=this.round(numTotal);
      this.total_mesanteriorTot = numTotal;
      console.log(this.total_mesanteriorTot);
    }
  }

  calcTotalMesAnterior2(valor:any){
    if(this.isTouchedtotal_mesanteriorTot=true){
      console.log('Total numero mes anterior')
      this.total_mesanteriorTot = parseFloat(valor);
      var numIGV = this.total_mesanteriorTot*0.18;
      numIGV=this.round(numIGV);
      this.credito_mesanterior = numIGV;
      this.calcIgvPagar();
      if(isNaN(this.total_mesanteriorTot)){
        this.credito_mesanterior = "";
        this.total_mesanteriorTot = "";
      }
      console.log(this.credito_mesanterior);
    }
  }
  getIgv(valor:any) {
    if(this.isTouchedIgv=true){
      console.log("Estoy calculando en igv");
      this.igv = parseFloat(valor);
      this.calcularValorBase2();
      this.calcTotal();
      //Conditional to check if venta is NaN
      if(isNaN(this.igv)){
        this.venta = "";
        this.total = "";
        this.igv = "";
      }
      console.log(this.igv);
    }
  }

  getTotal(valor:any) {
    if(this.isTouchedTotal=true){
      console.log("Estoy calculando en total");
      this.total = parseFloat(valor);
      this.calcularValorBase();
      this.calcIgv();
      //Conditional to check if venta is NaN
      if(isNaN(this.total)){
        this.venta = "";
        this.igv = "";
        this.total = "";
      }
      console.log(this.total);
    }
  }
  //Change Color Functions
  focusInputVenta(input:any){
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
    this.isTouchedVenta = true;
    console.log(`${this.isTouchedVenta} es verdadero ahora`);
    document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  focusInputIgv(input:any){
    this.isTouchedIgv = true;
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    console.log(`${this.isTouchedIgv} es verdadero ahora`);
    document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  focusInputTotal(input:any){
    this.isTouchedTotal = true;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    console.log(`${this.isTouchedTotal} es verdadero ahora`);
    document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  focusInputCompras(input:any){
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedCompras = true;
    console.log(`${this.isTouchedTotal} es verdadero ahora`);
    document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  focusInputCredt(input:any){
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedCompras = false;
    this.isTouchedCredt = true;
    document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  focusInputCredtTot(input:any){
    this.isTouchedTotal = false;
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedCompras = false;
    this.isTouchedCredt = false;
    this.isTouchedtotal_mesanteriorTot = true;
    document.getElementById(`${input}`).style.border = "solid 2px #203680";
  }

  unfocusInputVenta(input:any){
    this.isTouchedVenta = false;
    console.log(`${this.isTouchedVenta} es falso ahora`);
    document.getElementById(`${input}`).style.border = "solid 1px #20368038";
  }

  unfocusInputIgv(input:any){
    this.isTouchedIgv = false;
    console.log(`${this.isTouchedVenta} es falso ahora`);
    document.getElementById(`${input}`).style.border = "solid 1px #20368038";
  }
  unfocusInputTotal(input:any){
    this.isTouchedTotal = false;
    console.log(`${this.isTouchedVenta} es falso ahora`);
    document.getElementById(`${input}`).style.border = "solid 1px #20368038";
  }
  unfocusInputCompras(input:any){
    this.isTouchedCompras = false;
    console.log(`${this.isTouchedVenta} es falso ahora`);
    document.getElementById(`${input}`).style.border = "solid 1px #20368038";
  }
  unfocusInputCredt(input:any){
    this.isTouchedCredt = false;
    document.getElementById(`${input}`).style.border = "solid 1px #20368038";
  }

  unfocusInputCredtTot(input:any){
    this.total_mesanteriorTot = false;
    document.getElementById(`${input}`).style.border = "solid 1px #20368038";
  }

  //Calculator Functions
  calcIgv(){
    var igv = this.venta * 0.18;
    igv = this.round(igv);
    this.igv = igv;
  }

  calcCredito(){
    console.log('❤❤❤')
    var credito = this.compras * 0.18;
    credito = this.round(credito);
    this.creditofiscal = credito;
  }

  calcTotal(){
    var total = this.venta + this.igv;
    this.total = total.toString();
    // this.total = this.venta += this.igv;
  }

  calcTotalCompras(){
    var comprasTotal = this.compras / 1.18;
    var creditoFiscal1 = comprasTotal * 0.18;
    this.creditofiscal = this.round(creditoFiscal1);
    comprasTotal = this.round(comprasTotal);
    this.total_compras = comprasTotal.toString();
    // this.total = this.venta += this.igv;
  }

  calcularValorBase(){
    var valorBase = this.total/1.18;
    valorBase = this.round(valorBase);
    this.venta = valorBase.toString();
  }

  calcIgvPagar(){
    var igv_pagar= this.igv-this.creditofiscal;
    if(isNaN(this.credito_mesanterior)){
      igv_pagar = this.round(igv_pagar);
      this.igv_pagar = igv_pagar.toString();
    }else{
      var igv_pagar = this.igv-this.creditofiscal-this.credito_mesanterior;
      igv_pagar = this.round(igv_pagar);
      this.igv_pagar = igv_pagar.toString();
    }
  }
  //Function to round the values witouth using toFixed
  round(value:any){
    return Math.round(value * 100) / 100;
  }

  calcularValorBase2(){
    var valorBase=100*this.igv/18;
    valorBase=this.round(valorBase);
    this.venta=valorBase;
  }

  reiniciar(){
    this.venta = "";
    this.igv = "";
    this.total = "";
    this.compras = "";
    this.creditofiscal = "";
    this.total_compras = "";
    this.igv_pagar = "";
    this.credito_mesanterior = "";
    this.total_mesanteriorTot = "";
    this.isTouchedVenta = false;
    this.isTouchedIgv = false;
    this.isTouchedTotal = false;
    this.isTouchedCompras = false;
    this.isTouchedCredt = false;
    this.isTouchedtotal_mesanteriorTot = false;
    this.selected = "default";
  }

  //get the 1.5 of a value
  get1_5(){
    var valor = this.venta * 0.015;
    valor = this.round(valor);
    return valor;
  }

  get1(){
    var valor = this.venta * 0.01;
    valor = this.round(valor);
    return valor;
  }

  regimenChange($event) {
    this.selected= $event.target.value;
    console.log(this.selected);
    if(this.selected == "RER"){
      this.regimen = this.get1_5();
    }
    if(this.selected == "RMT"){
      this.regimen = this. get1();
    }
    if(this.selected == "RG"){
      this.regimen = this.get1_5();
    }
    if(this.selected == "default"){
      this.regimen = "";
    }

  }
}
