import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  

  apiUrl:string;
  headerDict:any;

  userLoggedIn = false;

  userName = "Gowthaman";
  userNameInitial = '';

  constructor() {
    this.headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Authorization': 'null'
    }
    this.setUserNameInitial();
    this.apiUrl = "http://backend.fabrae.com/";
  }

  setUserNameInitial() {
    this.userNameInitial = this.userName[0];
  }


  logOut() {
    this.userLoggedIn = false;
  }
}
