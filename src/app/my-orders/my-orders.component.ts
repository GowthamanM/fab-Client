import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.scss']
})
export class MyOrdersComponent implements OnInit {

  data:any = [
    {
      "orderId": '0000001',
      "total": "20000",
      "items": [
        {
          "_id": "61ca9303a5757e42d0ceac92",
          "productLink": "https://www.myntra.com/tops/mango/mango-blue-ribbed-flared-sleeves-top/14210804/buy",
          "brand": "MANGO",
          "productName": "Blue Ribbed Flared Sleeves Top",
          "price": "1",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/14210804/2021/6/26/e3783e87-3fb1-49c8-82ac-ec0b6ee0e94e1624686523844TopsMANGOWomenSweatersMANGOWomenSweatersMANGOWomenSweatersMA1.jpgg",
          "description": "description",
          "size": "S",
          "discountPrice": "1611",
          "relatedTo": {
            "ownProduct": "true"
          }
        },
        {
          "_id": "61ca9303a5757e42d0ceac93",
          "productLink": "https://www.myntra.com/tops/harpa/harpa-women-navy-blue-polka-dots-printed-top/13532790/buy",
          "brand": "Harpa",
          "productName": "Women Navy Blue Polka Dots Printed Top",
          "price": "699",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/productimage/2021/1/27/9b51010d-be06-498a-9990-19646a221cc01611744651702-1.jpg",
          "description": "description",
          "size": "S",
          "discountPrice": "1399",
          "relatedTo": {
            "ownProduct": "false"
          }
        },
        {
          "_id": "61ca9303a5757e42d0ceac94",
          "productLink": "https://www.myntra.com/tops/roadster/roadster-women-black--pink-abstract-printed-knitted-pleated-top/10962596/buy",
          "brand": "Roadster",
          "productName": "Women Black & Pink Abstract Printed Knitted Pleated Top",
          "price": "979",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/10962596/2020/11/4/c929a47e-4ac2-458e-82b9-30a9fc66a3121604492549351-Roadster-Women-Tops-9661604492547084-1.jpg",
          "description": "description",
          "size": "S",
          "discountPrice": "1399",
          "relatedTo": {
            "ownProduct": "true"
          }
        }
      ]
    },
    {
      "orderId": '0000002',
      "total": "20500",
      "items": [
        {
          "_id": "61ca9303a5757e42d0ceac92",
          "productLink": "https://www.myntra.com/tops/mango/mango-blue-ribbed-flared-sleeves-top/14210804/buy",
          "brand": "MANGO",
          "productName": "Blue Ribbed Flared Sleeves Top",
          "price": "1",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/14210804/2021/6/26/e3783e87-3fb1-49c8-82ac-ec0b6ee0e94e1624686523844TopsMANGOWomenSweatersMANGOWomenSweatersMANGOWomenSweatersMA1.jpgg",
          "description": "description",
          "size": "S",
          "discountPrice": "1611",
          "relatedTo": {
            "ownProduct": "true"
          }
        },
        {
          "_id": "61ca9303a5757e42d0ceac93",
          "productLink": "https://www.myntra.com/tops/harpa/harpa-women-navy-blue-polka-dots-printed-top/13532790/buy",
          "brand": "Harpa",
          "productName": "Women Navy Blue Polka Dots Printed Top",
          "price": "699",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/productimage/2021/1/27/9b51010d-be06-498a-9990-19646a221cc01611744651702-1.jpg",
          "description": "description",
          "size": "S",
          "discountPrice": "1399",
          "relatedTo": {
            "ownProduct": "false"
          }
        }
      ]
    },
    {
      "orderId": '0000003',
      "total": "50000",
      "items": [
        {
          "_id": "61ca9303a5757e42d0ceac94",
          "productLink": "https://www.myntra.com/tops/roadster/roadster-women-black--pink-abstract-printed-knitted-pleated-top/10962596/buy",
          "brand": "Roadster",
          "productName": "Women Black & Pink Abstract Printed Knitted Pleated Top",
          "price": "979",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/10962596/2020/11/4/c929a47e-4ac2-458e-82b9-30a9fc66a3121604492549351-Roadster-Women-Tops-9661604492547084-1.jpg",
          "description": "description",
          "size": "S",
          "discountPrice": "1399",
          "relatedTo": {
            "ownProduct": "true"
          }
        },
        {
          "_id": "61ca9303a5757e42d0ceac95",
          "productLink": "https://www.myntra.com/tops/herenow/herenow-women-navy-blue-printed-a-line-top/8505151/buy",
          "brand": "HERE&NOW",
          "productName": "Women Navy Blue Printed A-Line Top",
          "price": "685",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/8505151/2019/1/22/6657016f-d991-4572-905b-43e8f139702d1548161886155-HERENOW-Women-Tops-9641548161884752-1.jpg",
          "description": "description",
          "size": "S",
          "discountPrice": "1399",
          "relatedTo": {
            "ownProduct": "false"
          }
        }
      ]
    },
    {
      "orderId": '0000004',
      "total": "50000",
      "items": [
        {
          "_id": "61ca9303a5757e42d0ceac95",
          "productLink": "https://www.myntra.com/tops/herenow/herenow-women-navy-blue-printed-a-line-top/8505151/buy",
          "brand": "HERE&NOW",
          "productName": "Women Navy Blue Printed A-Line Top",
          "price": "685",
          "photoLink": "https://assets.myntassets.com/v1/assets/images/8505151/2019/1/22/6657016f-d991-4572-905b-43e8f139702d1548161886155-HERENOW-Women-Tops-9641548161884752-1.jpg",
          "description": "description",
          "size": "S",
          "discountPrice": "1399",
          "relatedTo": {
            "ownProduct": "false"
          }
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
  }
  
}
