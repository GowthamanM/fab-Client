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
    'Innerwear' : false,
    'Shorts'  : false,
    'Blazer' : false,
    'Footwear':false,
    'Tshirt' : false
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

  innerwear() {
    this.activeSelection.Innerwear = !this.activeSelection.Innerwear;
  }

  footwear() {
    this.activeSelection.Footwear = !this.activeSelection.Footwear;
  }

  shorts(){
    this.activeSelection.Shorts = !this.activeSelection.Shorts;
  }

  blazer(){
    this.activeSelection.Blazer = !this.activeSelection.Blazer;
  }

  tshirt(){
    this.activeSelection.Tshirt = !this.activeSelection.Tshirt;
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
