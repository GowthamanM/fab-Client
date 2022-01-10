import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CredentialService } from 'src/app/services/credential.service';
import { WardrobeService } from 'src/app/services/wardrobe.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data:any = [];
  prodId:any = '';

  product:any = [];
  productData:any={};
  isOwnProduct:boolean = false;
  userData:any = {};

  constructor(
    private wardrobeService: WardrobeService, 
    private route: Router, 
    private activeRoute: ActivatedRoute,
    private credentials:CredentialService,
    private userService: UserService) { }

  ngOnInit(): void {
    this.data = this.wardrobeService.getData();
    console.log(this.data);

    this.productData = this.credentials.productData;
    if(this.productData.relatedTo.ownProduct == 'true'){
      this.isOwnProduct = true;
    }
    console.log(this.productData);
    
    window.scrollTo(0, 0);
  }

  getSpecificProd() {
    this.data.forEach( (item:any)=> {
      if(item._id == this.prodId) {
        this.product.push(item);
      }
    });
    console.log(this.product);
  }

  addToCart(){
    this.userService.getUserData().subscribe(data=>{
      console.log(data);
      this.userData = JSON.parse(JSON.stringify(data));
      let relatedTo:any = {};
      relatedTo.cart = [];
      if(this.userData.User.hasOwnProperty("relatedTo")){
        relatedTo = this.userData.User.relatedTo;
        relatedTo.cart.push(this.productData);
        console.log(relatedTo);
        this.userService.userUpdate(JSON.parse(JSON.stringify({"relatedTo":relatedTo}))).subscribe(data=>{
          console.log(data);
        });
      }else{
        
        relatedTo.cart.push(this.productData);
        console.log(relatedTo);
        this.userService.userUpdate(JSON.parse(JSON.stringify({"relatedTo":relatedTo}))).subscribe(data=>{
          console.log(data);
        });
      }
    });
  }

  goToBuy(){
    let orderArray:any = [];
    orderArray.push(this.productData);
    let encode = encodeURIComponent(JSON.stringify(orderArray));
    this.route.navigateByUrl("/checkout/buy?order=" + encode);
  }

}
