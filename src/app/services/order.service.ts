import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  apiUrl:string;

  constructor(
    private credentials:CredentialService,
    private http:HttpClient
  ) {
    this.apiUrl = this.credentials.apiUrl;
  }

  public saveOrder(data:any){
    console.log("inside service :: ");
    console.log(data);
    
    
    return this.http.post(this.apiUrl+"orders",data);
  }
}
