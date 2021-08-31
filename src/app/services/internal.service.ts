import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InternalService {

  userData:any = {};

  constructor() { }


  changeToSignUpModel(data:any):any{
    this.userData.email = data.email;
    this.userData.fullName = data.userName;
    this.userData.password = data.password;
    this.userData.gender = data.gender;
    this.userData.dob = data.dob;
    this.userData.address = {};
    this.userData.address.doorNo = data.doorNo;
    this.userData.address.streetName = data.streetName;
    this.userData.address.city = data.city;
    this.userData.address.state = data.state;
    this.userData.address.pincode = data.pincode;
    this.userData.contactno = data.phoneno;
    return JSON.parse(JSON.stringify(this.userData));
  }
}
