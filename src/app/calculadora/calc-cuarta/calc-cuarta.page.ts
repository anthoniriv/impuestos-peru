import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-cuarta',
  templateUrl: './calc-cuarta.page.html',
  styleUrls: ['./calc-cuarta.page.scss'],
})
export class CalcCuartaPage implements OnInit {
  
  venta:any;
  igv:any;
  total:any;

  isTouchedVenta:boolean = false;
  isTouchedIgv:boolean = false;
  isTouchedTotal:boolean = false;

  constructor() { }

  ngOnInit() {
    this.clearAll();
  }
  //Use clearall function to clear all the values in the calculator
  
  //Function to clear all the values
  clearAll(){
    this.venta="";
    this.igv="";
    this.total="";
  }

  //Get Data Functions

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
  //Calculator Functions
  calcIgv(){
    var igv = this.venta * 0.08;
    igv = this.round(igv);
    this.igv = igv;
  }

  calcTotal(){
    var total = this.venta - this.igv;
    this.total = total.toString();
    // this.total = this.venta += this.igv;
  }
  
  calcularValorBase(){
    var valorBase = this.total*1.08;
    valorBase = this.round(valorBase);
    this.venta = valorBase.toString();
  }

  //Function to round the values witouth using toFixed
  round(value:any){
    return Math.round(value * 100) / 100;
  }

  calcularValorBase2(){
    var valorBase=100*this.igv/8;
    valorBase=this.round(valorBase);
    this.venta=valorBase;
  }


}
