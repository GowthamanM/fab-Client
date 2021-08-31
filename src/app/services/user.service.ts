import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiUrl:String;

  constructor(
    private http:HttpClient,
    private credentials:CredentialService
  ) {
    this.apiUrl = this.credentials.apiUrl;
  }
}
