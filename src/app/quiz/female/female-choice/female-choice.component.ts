import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FemaleQuizService } from 'src/app/services/female-quiz.service';

@Component({
  selector: 'app-female-choice',
  templateUrl: './female-choice.component.html',
  styleUrls: ['./female-choice.component.scss']
})
export class FemaleChoiceComponent implements OnInit {

  activeSelection = {
    'Tops': false,
    'Kurthis': false,
    'Saree': false,
    'Jackets': false,
    'Blazers': false,
    'Lehanga': false,
    'Sweatshirts': false,
    'Sweaters': false,
    'Leggings': false,
    'Jeans': false,
    'Jeggings': false,
    'Skirts': false,
    'Trousers': false,
    'FlatsFoot': false,
    'CasualFoot': false,
    'HeelsFoot': false,
    'Sportswear': false,
    'InnerWear': false,
  }



  flagArray:any = [];
  selectionArray:any = [];

  constructor(private route: Router, private femaleQuizService: FemaleQuizService) { }

  ngOnInit(): void {
  }

  m1() {
    this.activeSelection.Tops = !this.activeSelection.Tops;
  }

  m2() {
    this.activeSelection.Kurthis = !this.activeSelection.Kurthis;
  }

  m3() {
    this.activeSelection.Saree = !this.activeSelection.Saree;
  }

  m4() {
    this.activeSelection.Jackets = !this.activeSelection.Jackets;
  }

  m5() {
    this.activeSelection.Blazers = !this.activeSelection.Blazers;
  }

  m6() {
    this.activeSelection.Lehanga = !this.activeSelection.Lehanga;
  }

  m7() {
    this.activeSelection.Sweatshirts = !this.activeSelection.Sweatshirts;
  }

  m8() {
    this.activeSelection.Sweaters = !this.activeSelection.Sweaters;
  }

  m9() {
    this.activeSelection.Leggings = !this.activeSelection.Leggings;
  }

  m10() {
    this.activeSelection.Jeans = !this.activeSelection.Jeans;
  }

  m11() {
    this.activeSelection.Jeggings = !this.activeSelection.Jeggings;
  }

  m12() {
    this.activeSelection.Skirts = !this.activeSelection.Skirts;
  }

  m13() {
    this.activeSelection.Trousers = !this.activeSelection.Trousers;
  }

  m14() {
    this.activeSelection.FlatsFoot = !this.activeSelection.FlatsFoot;
  }

  m15() {
    this.activeSelection.CasualFoot = !this.activeSelection.CasualFoot;
  }

  m16() {
    this.activeSelection.HeelsFoot = !this.activeSelection.HeelsFoot;
  }

  m17() {
    this.activeSelection.Sportswear = !this.activeSelection.Sportswear;
  }

  m18() {
    this.activeSelection.InnerWear = !this.activeSelection.InnerWear;
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
    this.femaleQuizService.setSelectionArray(this.selectionArray);
    this.route.navigate(['quiz/female/selection/1']);
  }

}
