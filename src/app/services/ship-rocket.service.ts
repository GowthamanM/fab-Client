import { HttpBackend, HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class ShipRocketService {


  apiUrl:string;
  private httpClient: HttpClient;

  constructor(
    private credentials:CredentialService,
    private http:HttpClient,
    private httpBackend:HttpBackend
  ) {
    this.apiUrl = this.credentials.shipRocketApi;
    this.httpClient = new HttpClient(httpBackend);
  }

  public generateOAuthToken(){
    let requestBody:any = {
      "email": "gowthamancode@gmail.com",
      "password": "admin@fabrae"
    }

    return this.httpClient.post(this.apiUrl+"auth/login",requestBody);
  }

  public saveOrder(token:any,requestBody:any) {
    console.log('token :: '+ token);
    
    const headers =  new HttpHeaders({ 
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
   })
    return this.httpClient.post(this.apiUrl+"orders/create/adhoc",requestBody,{headers:headers});
  }

}
