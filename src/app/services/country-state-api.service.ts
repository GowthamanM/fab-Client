import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class CountryStateApiService {

  apiUrl : string;

  constructor(
    private credentials:CredentialService,
    private http : HttpClient
  ) {
    this.apiUrl = this.credentials.countryStateApi;
  }

  public getStates(){
    let body = JSON.parse(JSON.stringify({'country':'india'}));
    return this.http.post(this.apiUrl+"countries/states",body);
  }

  public getCities(state:any) {

    let body:any = {};
    body.country = "india";
    body.state = state;   
    return this.http.post("https://countriesnow.space/api/v0.1/countries/state/cities",body);
  }

}
