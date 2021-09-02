import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class WardrobeService {

  wardrobeData:any = [];
  apiUrl:string;
  uid:any;
  data:any;
  // public data:any={};

  constructor(
    private http:HttpClient,
    private credentials:CredentialService,
    private authService:AuthService
  ) {
    this.apiUrl = this.credentials.apiUrl;
    this.authService.decodeToken().subscribe(data=>{
      this.uid = JSON.parse(JSON.stringify(data)).payload.id+"";
      console.log(this.uid);
      // this.getPreferenceByUid().subscribe(data=>{
      //   this.data = data;
      //   console.log(this.data);
        
      // });
    })
  }

  // data = {
  //   "preference": {
  //     "_id": "6129268e1964784710458292",
  //     "userId": "6128f525d759d13bc8076897",
  //     "data": [
  //       {
  //         "_id": "6129268e1964784710458293",
  //         "productLink": "https://www.myntra.com/shirts/us-polo-assn/u-s-polo-assn-men-red-tailored-fit-casual-shirt/13800698/buy",
  //         "brand": "U.S Polo",
  //         "productName": "U S Polo Assn Men Red Tailored Fit Casual Shirt",
  //         "price": "1499",
  //         "photoLink": "https://assets.myntassets.com/v1/assets/images/8319185/2019/4/15/0bff522f-f8c6-4474-ad13-08fc9c39f3981555316403535-Mast--Harbour-Women-Blue-Skinny-Fit-Mid-Rise-Clean-Look-Stre-1.jpg",
  //         "description": "Red solid opaque Casual shirt  has a button-down collar  button placket  1 patch pocket  long roll-up sleeves  curved hem",
  //         "size": "36"
  //       },
  //       {
  //         "_id": "6129268e1964784710458294",
  //         "productLink": "https://www.myntra.com/shirts/us-polo-assn/u-s-polo-assn-men-red-tailored-fit-casual-shirt/13800698/buy",
  //         "brand": "Entry 2",
  //         "productName": "U S Polo Assn Men Red Tailored Fit Casual Shirt",
  //         "price": "1499",
  //         "photoLink": "https://assets.myntassets.com/v1/assets/images/13800698/2021/7/20/5184e277-426c-4a3e-8448-03544eb766b81626784238386-US-Polo-Assn-Men-Shirts-6321626784237831-1.jpg",
  //         "description": "Red solid opaque Casual shirt  has a button-down collar  button placket  1 patch pocket  long roll-up sleeves  curved hem",
  //         "size": "36"
  //       }
  //     ],
  //     "__v": 0
  //   }
  // }


  getPreferenceByUid(id:any):Observable<any>{
    
    return this.http.get(this.apiUrl+"preference/user/"+id);
  }

  setData() {
    // this.wardrobeData = this.data.preference.data;
  }

  getData():any {
    // this.authService.decodeToken().subscribe(data=>{
    //   this.uid = JSON.parse(JSON.stringify(data)).payload.id+"";
    //   console.log(this.uid);
    //   this.getPreferenceByUid().subscribe(data=>{
    //     this.data = data;
    //     console.log('return');
    //     console.log(data);
        
    //     return data;
        
    //   });
    // })
    this.setData();
    return this.wardrobeData;
  }

  showData() {
    // console.log(this.data.preference.data);
    this.setData();
    // console.log(this.wardrobeData);
  }

  // getPr
}
