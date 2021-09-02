import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  apiUrl:string;

  constructor(
    private http:HttpClient,
    private credentials:CredentialService,
    private authService:AuthService
  ) {
    this.apiUrl = this.credentials.apiUrl;
  }

  isQuizTaken(){
    
    return this.http.get(this.apiUrl+"check/touchquiz/"+this.authService.getUid());
  }

}
