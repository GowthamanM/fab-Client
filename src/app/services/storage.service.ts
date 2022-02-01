import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  userCartProducts:any;
  paymentTrigger:boolean=false;

  constructor() { }

  changeTrigger(){
    this.paymentTrigger = true;
  }
}
