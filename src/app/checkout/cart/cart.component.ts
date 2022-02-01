import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  data:any = [];
  subTotal:any = 0;
  total = 0;
  shippingCharges:any = 0;


  public prdQuantity = 1;

  constructor(
    private userService:UserService,
    private storageService:StorageService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
      this.userService.getUserData().subscribe(data=>{
        if(data.User.hasOwnProperty("relatedTo")){
          this.data = data.User.relatedTo.cart;
          for(let i=0;i<this.data.length;i++){
            this.subTotal += parseInt(this.data[i].price);
          }
          if(this.data.length > 0) {
            this.shippingCharges=0;
          }
          this.total= this.subTotal+ this.shippingCharges;
        }
      })
  }

  calculateAmount() { 
    this.subTotal = 0;
    for(let i=0;i<this.data.length;i++){
      this.subTotal += parseInt(this.data[i].price);
    }
    if(this.data.length > 0) {
      this.shippingCharges = 50;
    } else {
      this.shippingCharges = 0;
    }
    this.total= this.subTotal+ this.shippingCharges;
  }

  removeProduct(product: any) {
    let index = this.data.findIndex(function(item:any,i:any){
      return item.productName === product
    });
    this.data.splice(index,1);
    let relatedTo:any = {};
    relatedTo.cart = this.data;
    console.log(JSON.parse(JSON.stringify({"relatedTo":relatedTo})));
    this.userService.userUpdate(JSON.parse(JSON.stringify({"relatedTo":relatedTo}))).subscribe();
    this.calculateAmount();
  }

  goToBuy(){
    console.log(this.data);
    
    let encode = encodeURIComponent(JSON.stringify(this.data));
    this.router.navigateByUrl("/checkout/buy?order="+encode+"&cart=true");   
  }

  goToWardrobe(){
    this.router.navigateByUrl("/wardrobe")
  }

}
