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
    return this.http.post(this.apiUrl+"orders",data);
  }

  public getUserOrders(data:any) {
    return this.http.get(this.apiUrl+"orders/user?userid="+data);
  }
}
