import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-precio',
  templateUrl: './calc-precio.component.html',
  styleUrls: ['./calc-precio.component.scss'],
})
export class CalcPrecioComponent implements OnInit {

  compras: string = '';
  gastos: string = '';
  ganancia1: string = '';
  igv: string = '';
  precio: string = '';
  ganancia2: string = '';

  isTouchedCompras = false;
  isTouchedGastos = false;
  isTouchedGanancia1 = false;
  isTouchedIgv = false;
  isTouchedPrecio = false;
  isTouchedGanancia2 = false;

  constructor() { }

  ngOnInit() {
    this.clearAll();
  }

  // Function to clear all the values
  clearAll() {
    this.compras = '';
    this.gastos = '';
    this.ganancia1 = '';
    this.igv = '';
    this.precio = '';
    this.ganancia2 = '';
  }

  // Update methods to match HTML naming and functionality
  getCompras(value: string) {
    this.isTouchedCompras = true;
    this.compras = value;
    this.calculatePrices();
  }

  getGastos(value: string) {
    this.isTouchedGastos = true;
    this.gastos = value;
    this.calculatePrices();
  }

  getGan1(value: string) {
    this.isTouchedGanancia1 = true;
    this.ganancia1 = value;
    this.calculatePrices();
  }

  getIgv(value: string) {
    this.isTouchedIgv = true;
    this.igv = value;
    this.calculatePrices();
  }

  getPrecio(value: string) {
    this.isTouchedPrecio = true;
    this.precio = value;
    this.calculatePrices();
  }

  getGan2(value: string) {
    this.isTouchedGanancia2 = true;
    this.ganancia2 = value;
    this.calculatePrices();
  }

  // Function to focus and unfocus inputs
  focusInputCompras(inputId: string) {
    this.resetFocus();
    this.isTouchedCompras = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInputCompras(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  focusInputGastos(inputId: string) {
    this.resetFocus();
    this.isTouchedGastos = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInputGastos(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  focusInputGan1(inputId: string) {
    this.resetFocus();
    this.isTouchedGanancia1 = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInputGan1(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  focusInputIgv(inputId: string) {
    this.resetFocus();
    this.isTouchedIgv = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInputIgv(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  focusInputPrecio(inputId: string) {
    this.resetFocus();
    this.isTouchedPrecio = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInputPrecio(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  focusInputGan2(inputId: string) {
    this.resetFocus();
    this.isTouchedGanancia2 = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInputGan2(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  // Helper function to reset focus states
  resetFocus() {
    this.isTouchedCompras = this.isTouchedGastos = this.isTouchedGanancia1 = this.isTouchedIgv = this.isTouchedPrecio = this.isTouchedGanancia2 = false;
  }

  // Placeholder for recalculating prices, needs proper implementation based on business logic
  calculatePrices() {
    // Implement your calculation logic here
  }

  // Function to reset all fields
  reset() {
    this.clearAll();
    this.resetFocus();
    ['input-venta', 'input-igv', 'input-total'].forEach(id => {
      document.getElementById(id).style.border = 'solid 1px #20368038';
    });
  }
}
