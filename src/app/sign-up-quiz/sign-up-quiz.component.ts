import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-quiz',
  templateUrl: './sign-up-quiz.component.html',
  styleUrls: ['./sign-up-quiz.component.scss']
})
export class SignUpQuizComponent implements OnInit {

  activeSelection = {
    'option1' : false
  }

  flagArray:any = [];
  selectionArray:any = [];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  getSelection() {
    this.flagArray = Object.entries(this.activeSelection);

    this.flagArray.forEach( (item:any) => {
      if(item[1] === true) {
        this.selectionArray.push(item[0]);
      }
    });
  }

}
