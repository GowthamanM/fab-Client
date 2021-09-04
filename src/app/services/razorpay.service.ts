import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class RazorpayService {

  apiUrl:string;

  constructor(
    private credentials:CredentialService,
    private http:HttpClient
  ) {
    this.apiUrl = this.credentials.apiUrl;
  }

  public basicPlanOrder(data:any):Observable<any>{
    return this.http.post(this.apiUrl+"payment/orders",data);
  }
}
