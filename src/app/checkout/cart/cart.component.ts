import { Component, OnInit } from '@angular/core';
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


  public prdQuantity = 1;

  constructor(
    private userService:UserService
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

}
