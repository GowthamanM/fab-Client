import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonQuizService {

  constructor() {
    this.userSelected = "";
  }

  userSelected: any;


}
