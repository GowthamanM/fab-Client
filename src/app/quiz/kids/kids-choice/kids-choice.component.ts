import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KidsQuizService } from 'src/app/services/kids-quiz.service';

@Component({
  selector: 'app-kids-choice',
  templateUrl: './kids-choice.component.html',
  styleUrls: ['./kids-choice.component.scss']
})
export class KidsChoiceComponent implements OnInit {

  activeSelection = {
    'BodySuit': false,
    'TShirt': false,
    'Dress': false,
    'ClothingSet': false,
    'Shirt': false,
    'Shorts': false,
    'Kurthis': false,
  }

  flagArray:any = [];
  selectionArray:any = [];

  constructor(private route: Router, private kidsQuizService: KidsQuizService) { }

  ngOnInit(): void {
  }

  m1() {
    this.activeSelection.BodySuit = !this.activeSelection.BodySuit;
  }

  m2() {
    this.activeSelection.TShirt = !this.activeSelection.TShirt;
  }

  m3() {
    this.activeSelection.Dress = !this.activeSelection.Dress;
  }

  m4() {
    this.activeSelection.ClothingSet = !this.activeSelection.ClothingSet;
  }

  m5() {
    this.activeSelection.Shirt = !this.activeSelection.Shirt;
  }

  m6() {
    this.activeSelection.Shorts = !this.activeSelection.Shorts;
  }

  m7() {
    this.activeSelection.Kurthis = !this.activeSelection.Kurthis;
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
    this.kidsQuizService.setSelectionArray(this.selectionArray);
    this.route.navigate(['quiz/kids/selection/1']);
  }


}
