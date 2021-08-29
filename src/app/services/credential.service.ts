import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CredentialService {

  userLoggedIn = true;

  userName = "Gowthaman";
  userNameInitial = '';

  constructor() {
    this.setUserNameInitial();
  }

  setUserNameInitial() {
    this.userNameInitial = this.userName[0];
  }


  logOut() {
    this.userLoggedIn = false;
  }
}
