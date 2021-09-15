import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  apiUrl:string;

  constructor(
    private credentials:CredentialService,
    private http:HttpClient
  ) {
    this.apiUrl = credentials.apiUrl;
  }

  sendResetLink(email:any){
    return this.http.get(this.apiUrl+'auth/resetpassword?email='+email);
  }

  updatePassword(token:any,password:any){
    return  this.http.put(this.apiUrl+'auth/updatepassword/?token='+token,password);
  }
}
