import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  data = [
    {
      "_id": "616f89f7703a5a0012aa7f72",
      "productLink": "https://www.myntra.com/tops/mango/mango-blue-ribbed-flared-sleeves-top/14210804/buy",
      "brand": "MANGO",
      "productName": "Blue Ribbed Flared Sleeves Top",
      "price": "1790",
      "photoLink": "https://assets.myntassets.com/v1/assets/images/14210804/2021/6/26/e3783e87-3fb1-49c8-82ac-ec0b6ee0e94e1624686523844TopsMANGOWomenSweatersMANGOWomenSweatersMANGOWomenSweatersMA1.jpgg",
      "description": "description",
      "size": "S",
      "discountPrice": "1611"
    },
    {
      "_id": "616f89f7703a5a0012aa7f73",
      "productLink": "https://www.myntra.com/tops/harpa/harpa-women-navy-blue-polka-dots-printed-top/13532790/buy",
      "brand": "Harpa",
      "productName": "Women Navy Blue Polka Dots Printed Top",
      "price": "699",
      "photoLink": "https://assets.myntassets.com/v1/assets/images/productimage/2021/1/27/9b51010d-be06-498a-9990-19646a221cc01611744651702-1.jpg",
      "description": "description",
      "size": "S",
      "discountPrice": "1399"
    },
    {
      "_id": "616f89f7703a5a0012aa7f74",
      "productLink": "https://www.myntra.com/tops/roadster/roadster-women-black--pink-abstract-printed-knitted-pleated-top/10962596/buy",
      "brand": "Roadster",
      "productName": "Women Black & Pink Abstract Printed Knitted Pleated Top TOp & Pink Abstract Printed Knitted Pleated T",
      "price": "979",
      "photoLink": "https://assets.myntassets.com/v1/assets/images/10962596/2020/11/4/c929a47e-4ac2-458e-82b9-30a9fc66a3121604492549351-Roadster-Women-Tops-9661604492547084-1.jpg",
      "description": "description",
      "size": "S",
      "discountPrice": "1399"
    }
  ];

  public prdQuantity = 1;

  constructor() {
    console.log(this.data);
  }

  ngOnInit(): void {
  }

  removeProduct(product: any) {

  }

}
