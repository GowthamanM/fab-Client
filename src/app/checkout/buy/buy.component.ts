import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  data:any = [];
  subTotal:any = 0;
  shippingCharges:any = 0;
  total = 0;


  public prdQuantity = 1;

  constructor(
    private userService:UserService,
    private fb: FormBuilder,
    private storageService:StorageService,
    private route:ActivatedRoute
  ) {
  }

  ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if(this.isJson(params.order)) {
          this.data = JSON.parse(params.order);
          for(let i=0;i<this.data.length;i++){

            this.subTotal += parseInt(this.data[i].price);
          }
          if(this.data.length > 0){
            this.shippingCharges = 50;
          }
          this.total= this.subTotal + this.shippingCharges;
        }
      })
      
  }

  isJson(orderParam:any) : boolean { 
    try {
      JSON.parse(orderParam);
    } catch (e) {
      return false;
    }
    return true;
  }

  removeProduct(product: any) {

  }

  deliveryForm = this.fb.group({
    inputName: [''],
    inputEmail: [''],
    inputAddress: [''],
    inputCity: [''],
    inputState: [''],
    inputZip: [''],
    inputPhone: [''],
    inputCountry: [''],
  });

  showData() {
    console.log(this.deliveryForm);
  }

  paynow() {
    
  }
}
