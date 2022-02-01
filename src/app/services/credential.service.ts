import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {



  apiUrl:string;
  countryStateApi:string;
  shipRocketApi:string;
  headerDict:any;
  uid:any;
  productData:any;

  userLoggedIn = false;

  userName = "Gowthaman";
  userNameInitial = '';

  constructor(private http:HttpClient) {

    this.headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'null'
    }
    this.setUserNameInitial();
    this.apiUrl = "https://backend.fabrae.com/";
    this.countryStateApi = "https://countriesnow.space/api/v0.1/";
    this.shipRocketApi = "https://apiv2.shiprocket.in/v1/external/";
  }

  setUserNameInitial() {
    // this.http.get(this.apiUrl+"users"+)
  }


  logOut() {
    this.userLoggedIn = false;
  }
}
