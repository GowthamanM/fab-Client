import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

  apiUrl:string;

  constructor(
    private credentials:CredentialService,
    private http:HttpClient
  ) {
    this.apiUrl = this.credentials.apiUrl;
  }

  public saveWalletRequest(data:any){
    return this.http.post(this.apiUrl+'wallet',data);
  }
}
