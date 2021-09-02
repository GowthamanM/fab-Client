import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  

  apiUrl:string;
  headerDict:any;
  uid:any;

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
    this.apiUrl = "http://localhost:8000/";
  }

  setUserNameInitial() {
    // this.http.get(this.apiUrl+"users"+)
  }


  logOut() {
    this.userLoggedIn = false;
  }
}
