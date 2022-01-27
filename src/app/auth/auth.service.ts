import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from '../services/credential.service';
import {Jwt} from 'jsonwebtoken';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiUrl:string;

  constructor(private http:HttpClient,
    private credentials:CredentialService) {
    this.apiUrl = credentials.apiUrl;
  }

  getToken(){
    return localStorage.getItem('userToken');
  }

  getAuthStatus():boolean{
    if(localStorage.getItem('authStatus') == 'true'){
      return true;
    }else{
      return false;
    }
  }

  authCheck(){ 
    return this.http.get(this.apiUrl+'auth/checkauth/');
  }
  

  getUid():any{
    return localStorage.getItem('uid');
  }

  decodeToken(){
    return this.http.get(this.apiUrl+"decode");
  }

  logoutSession(){
    localStorage.setItem('authStatus','false');
    localStorage.setItem('userToken','null');
    localStorage.setItem('uid','null');
  }

}
