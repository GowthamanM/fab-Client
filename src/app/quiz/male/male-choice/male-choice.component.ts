import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MaleQuizService } from 'src/app/services/male-quiz.service';

@Component({
  selector: 'app-male-choice',
  templateUrl: './male-choice.component.html',
  styleUrls: ['./male-choice.component.scss']
})
export class MaleChoiceComponent implements OnInit {

  activeSelection = {
    'Shirt' : false,
    'Pant' : false,
    'Trouser' : false
  }

  flagArray:any = [];
  selectionArray:any = [];

  constructor(private route: Router, private maleQuizService: MaleQuizService) { }

  ngOnInit(): void {
  }

  shirt() {
    this.activeSelection.Shirt = !this.activeSelection.Shirt;
  }

  pant() {
    this.activeSelection.Pant = !this.activeSelection.Pant;
  }

  trouser() {
    this.activeSelection.Trouser = !this.activeSelection.Trouser;
  }

  getSelection() {
    this.flagArray = Object.entries(this.activeSelection);

    this.flagArray.forEach( (item:any) => {
      if(item[1] === true) {
        this.selectionArray.push(item[0]);
      }
    });
  }

  goNext() {
    this.getSelection();
    // console.log(this.selectionArray);
    this.maleQuizService.setSelectionArray(this.selectionArray);
    this.route.navigate(['quiz/male/selection/1']);
  }
}
