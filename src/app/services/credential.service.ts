import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {


  apiUrl:string;

  userLoggedIn = false;

  userName = "Gowthaman";
  userNameInitial = '';

  constructor() {
    this.setUserNameInitial();
    this.apiUrl = "http://localhost:8000/";
  }

  setUserNameInitial() {
    this.userNameInitial = this.userName[0];
  }


  logOut() {
    this.userLoggedIn = false;
  }
}
