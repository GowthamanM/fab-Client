import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  apiurl:string;

  constructor(private http:HttpClient,
    private credentials:CredentialService) {
      this.apiurl = this.credentials.apiUrl;
    }
  
    addUser(data:any){
      return this.http.post(this.apiurl+"auth/signup",data,{observe: 'response'});
    }

    addGoogleUser(data:any){
      return this.http.post(this.apiurl+"auth/google/signup",data,{observe:'response'});
    }

}
