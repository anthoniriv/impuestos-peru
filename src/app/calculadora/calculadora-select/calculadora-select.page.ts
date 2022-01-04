import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora-select',
  templateUrl: './calculadora-select.page.html',
  styleUrls: ['./calculadora-select.page.scss'],
})
export class CalculadoraSelectPage implements OnInit {

  categorias:boolean = false;
  tipotercera:boolean = false;
  disabled:boolean = false;

  constructor() { }

  ngOnInit() {
  }

  categoria_cambiada($event){
    this.categorias = $event.detail.checked;
    console.log(this.categorias);
  }

  tipo_tercera_cambiada($event){
    this.tipotercera = $event.detail.checked;
    this.disabled = this.tipotercera;
    console.log(this.tipotercera);
  }
}
