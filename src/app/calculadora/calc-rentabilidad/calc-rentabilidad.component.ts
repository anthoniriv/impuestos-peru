import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc-rentabilidad',
  templateUrl: './calc-rentabilidad.component.html',
  styleUrls: ['./calc-rentabilidad.component.scss'],
})
export class CalcRentabilidadComponent implements OnInit {

  venta: string = '';
  igv: string = '';
  total: string = '';

  isTouchedVenta = false;
  isTouchedIgv = false;
  isTouchedTotal = false;

  constructor() { }

  ngOnInit() {
    this.clearAll();
  }

  // Function to clear all the values
  clearAll() {
    this.venta = '';
    this.igv = '';
    this.total = '';
  }

  // Get Data Functions
  getVenta(valor: string) {
    this.isTouchedVenta = true;
    this.venta = valor;
    if (valor.trim() !== '') {
      this.calcTotal();
    } else {
      this.clearAll();
    }
  }

  getIgv(valor: string) {
    this.isTouchedIgv = true;
    this.igv = valor;
    if (valor.trim() !== '') {
      this.calcTotal();
    } else {
      this.clearAll();
    }
  }

  getTotal(valor: string) {
    this.isTouchedTotal = true;
    this.total = valor;
    // Conditional to check if venta is not empty and calculate base
    if (valor.trim() !== '') {
      this.calcularValorBase();
    } else {
      this.clearAll();
    }
  }

  // Change Color Functions
  focusInput(inputId: string) {
    this.resetFocus();
    this[`isTouched${inputId.charAt(0).toUpperCase() + inputId.slice(1)}`] = true;
    document.getElementById(inputId).style.border = 'solid 2px #203680';
  }

  unfocusInput(inputId: string) {
    document.getElementById(inputId).style.border = 'solid 1px #20368038';
  }

  resetFocus() {
    this.isTouchedVenta = this.isTouchedIgv = this.isTouchedTotal = false;
  }

  // Calculator Functions
  calcTotal() {
    if (this.venta.trim() !== '' && this.igv.trim() !== '') {
      const ventaFloat = parseFloat(this.venta);
      const igvFloat = parseFloat(this.igv) / 100;
      const total = ventaFloat / (1 - igvFloat);
      this.total = this.round(total).toString();
    }
  }

  calcularValorBase() {
    if (this.total.trim() !== '' && this.igv.trim() !== '') {
      const totalFloat = parseFloat(this.total);
      const igvFloat = parseFloat(this.igv) / 100;
      const venta = totalFloat * (1 - igvFloat);
      this.venta = this.round(venta).toString();
    }
  }

  // Function to round the values without using toFixed
  round(value: number) {
    return Math.round(value * 100) / 100;
  }

  // Function to reset
  reset() {
    this.clearAll();
    this.resetFocus();
    ['input-venta', 'input-igv', 'input-total'].forEach(id => {
      document.getElementById(id).style.border = 'solid 1px #20368038';
    });
  }
}
