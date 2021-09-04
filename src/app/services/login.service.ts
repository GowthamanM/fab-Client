import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  apiUrl:string;
  payload:any;

  constructor(
    private credential:CredentialService,
    private http:HttpClient,
    private authService:AuthService
  ) {
    this.apiUrl = this.credential.apiUrl;
  }

  userLogin(data:any){
    return this.http.post(this.apiUrl+"auth/login",data,{observe: 'response'});
  }

  googleUserLogin(data:any){
    return this.http.post(this.apiUrl+"auth/google/login",data,{observe:'response'});
  }
}
