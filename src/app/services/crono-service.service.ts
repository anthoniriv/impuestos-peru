import { Injectable } from '@angular/core';
import { RUC } from '../cronograma/ruc.model';

@Injectable({
  providedIn: 'root'
})
export class CronoServiceService {

  private rucSaved: RUC[]=[
    {
      rucNumber: '20602708731',
      rucName: 'JUAN PEREZ',
    }
  ]

  constructor() { }

  getRUCS(){
    return [...this.rucSaved];
  }

  getRucHere(rucID: string){
    return{
      ...this.rucSaved.find(ruc =>{
        return ruc.rucNumber === rucID;
      })
    }
  }

  deleteRUC(rucID:string){
    this.rucSaved=this.rucSaved.filter(ruc =>{
      return ruc.rucNumber !== rucID;
      });
  }
}
