import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from '../services/credential.service';

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
    if(localStorage.getItem('authStatus') === "true")
      return true;
    return false;
  }

}
