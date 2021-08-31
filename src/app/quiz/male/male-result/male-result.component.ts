import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MaleQuizService } from 'src/app/services/male-quiz.service';

@Component({
  selector: 'app-male-result',
  templateUrl: './male-result.component.html',
  styleUrls: ['./male-result.component.scss']
})
export class MaleResultComponent implements OnInit {

  id: number = 1;
  nextBtnActive: boolean = true;
  arrIndex: number = 0;

  selection:any = [];
  count: number = 0;

  types:any = [];

  shirtAns:any = ['','','','','','','',''];
  pantAns:any = ['','','','',''];
  innerwearAns:any = ['','','',''];
  shortsAns:any = ['','','','',''];
  blazerAns:any = ['','','','',''];
  footwearAns:any = [''];

  constructor(private activeRoute: ActivatedRoute, private route: Router, private maleQuizService: MaleQuizService) { }

  ngOnInit(): void {
    this.selection = this.maleQuizService.selectedQuiz;
    this.count = this.selection.length;
    this.types = this.maleQuizService.selectionArray;

    this.activeRoute.params.subscribe(routeParams => {
      this.id = +routeParams.id;
      this.checkRouteChanges();
    });
    window.scrollTo(0, 0);
  }

  checkRouteChanges() {
    this.arrIndex = this.id - 1;

    if(this.id == this.count) {
      this.nextBtnActive = false;
    }
    else if(this.id > this.count) {
      this.route.navigate(['page-not-found']);
    }
    else {
      this.nextBtnActive = true;
    }
  }

  goNext() {
    let currentRoute = this.id;
    let nextRoute = currentRoute + 1;
    this.route.navigate(['quiz/male/selection/' + nextRoute]);
    window.scrollTo(0, 0);
  }

  onSubmit() {
    this.maleQuizService.setAnswers(this.shirtAns, this.pantAns, this.innerwearAns ,this.shortsAns,this.blazerAns,this.footwearAns);
    this.maleQuizService.viewAnswerAlert();
    this.maleQuizService.saveMaleData().subscribe(data=>{
      console.log(data);
    })
    this.route.navigate(['wardrobe']);
  }

  saveAnswers(ind:any, option:any) {
    if(this.types[this.arrIndex] == "Shirt") {
      this.shirtAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.shirtAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Pant") {
      this.pantAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.pantAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Innerwear") {
      this.innerwearAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.innerwearAns[index] = option;
        }
      });
    }else if(this.types[this.arrIndex] == "Shorts") {
      this.shortsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.shortsAns[index] = option;
        }
      });
    }else if(this.types[this.arrIndex] == "Blazer") {
      this.blazerAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.blazerAns[index] = option;
        }
      });
    }else if(this.types[this.arrIndex] == "Footwear") {
      this.footwearAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.footwearAns[index] = option;
        }
      });
    }

  }

}
