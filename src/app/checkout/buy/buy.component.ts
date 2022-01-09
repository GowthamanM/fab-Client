import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.scss']
})
export class BuyComponent implements OnInit {
  data:any = [];
  subTotal:any = 0;
  total = 0;


  public prdQuantity = 1;

  constructor(
    private userService:UserService,
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
      this.userService.getUserData().subscribe(data=>{
        if(data.User.hasOwnProperty("relatedTo")){
          this.data = data.User.relatedTo.cart;
          for(let i=0;i<this.data.length;i++){
            console.log(this.data[i]);

            this.subTotal += parseInt(this.data[i].price);
          }
          this.total= this.subTotal+50;

        }
      })
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
