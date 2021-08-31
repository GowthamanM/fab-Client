import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KidsQuizService } from 'src/app/services/kids-quiz.service';

@Component({
  selector: 'app-kids-result',
  templateUrl: './kids-result.component.html',
  styleUrls: ['./kids-result.component.scss']
})
export class KidsResultComponent implements OnInit {

  id: number = 1;
  nextBtnActive: boolean = true;
  arrIndex: number = 0;

  selection:any = [];
  count: number = 0;

  types:any = [];

  bodysuitAns:any = ['','',''];
  tshirtAns:any = ['','',''];
  dressAns:any = ['','',''];
  clothingsetAns:any = ['','',''];
  shirtAns:any = ['','',''];
  shortsAns:any = ['','',''];
  kurthisAns:any = ['','',''];

  constructor(private activeRoute: ActivatedRoute, private route: Router, private kidsQuizService: KidsQuizService) { }

  ngOnInit(): void {
    this.selection = this.kidsQuizService.selectedQuiz;
    this.count = this.selection.length;
    this.types = this.kidsQuizService.selectionArray;

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
    this.route.navigate(['quiz/kids/selection/' + nextRoute]);
    window.scrollTo(0, 0);
  }

  onSubmit() {
    this.kidsQuizService.setAnswers(this.bodysuitAns, this.tshirtAns, this.dressAns, this.clothingsetAns, this.shirtAns, this.shortsAns, this.kurthisAns);
    this.kidsQuizService.viewAnswerAlert();
    this.route.navigate(['wardrobe']);
  }

  saveAnswers(ind:any, option:any) {
    if(this.types[this.arrIndex] == "BodySuit") {
      this.bodysuitAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.bodysuitAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "TShirt") {
      this.tshirtAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.tshirtAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Dress") {
      this.dressAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.dressAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "ClothingSet") {
      this.clothingsetAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.clothingsetAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Shirt") {
      this.shirtAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.shirtAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Shorts") {
      this.shortsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.shortsAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Kurthis") {
      this.kurthisAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.kurthisAns[index] = option;
        }
      });
    }
  }


}
