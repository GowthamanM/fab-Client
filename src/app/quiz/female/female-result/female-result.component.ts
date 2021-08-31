import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FemaleQuizService } from 'src/app/services/female-quiz.service';

@Component({
  selector: 'app-female-result',
  templateUrl: './female-result.component.html',
  styleUrls: ['./female-result.component.scss']
})
export class FemaleResultComponent implements OnInit {

  id: number = 1;
  nextBtnActive: boolean = true;
  arrIndex: number = 0;

  selection:any = [];
  count: number = 0;

  types:any = [];

  topsAns:any = ['','',''];
  kurthisAns:any = ['','',''];
  sareeAns:any = ['',''];
  jacketsAns:any = ['','',''];
  blazzersAns:any = ['','',''];
  lehangaAns:any = ['','','',''];
  sweatshirtsAns:any = ['','',''];
  sweatersAns:any = ['','',''];
  leggingsAns:any = ['','','',''];
  jeansAns:any = ['','','',''];
  jeggingsAns:any = ['','','',''];
  skirtAns:any = ['','','','','',''];
  trousersAns:any = ['','','','','','','',''];
  flatsFootAns: any = ['','','','','','','','','',''];
  casualFootAns:any = ['','','','','','',''];
  heelsFootAns:any = ['','','','','','','','','','','',''];
  sportswearAns:any = [''];
  innerwearAns:any = ['',''];

  constructor(private activeRoute: ActivatedRoute, private route: Router, private femaleQuizService: FemaleQuizService) { }

  ngOnInit(): void {
    this.selection = this.femaleQuizService.selectedQuiz;
    this.count = this.selection.length;
    this.types = this.femaleQuizService.selectionArray;

    this.activeRoute.params.subscribe(routeParams => {
      this.id = +routeParams.id;
      this.checkRouteChanges();
    });
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
    this.route.navigate(['quiz/female/selection/' + nextRoute]);
  }

  onSubmit() {
    this.femaleQuizService.setAnswers(this.topsAns, this.kurthisAns, this.sareeAns, this.jacketsAns, this.blazzersAns, this.lehangaAns, this.sweatshirtsAns, this.sweatersAns, this.leggingsAns, this.jeansAns, this.jeggingsAns, this.skirtAns, this.trousersAns, this.flatsFootAns, this.casualFootAns, this.heelsFootAns, this.sportswearAns, this.innerwearAns);
    this.femaleQuizService.viewAnswerAlert();
    this.route.navigate(['wardrobe']);
  }

  saveAnswers(ind:any, option:any) {
    if(this.types[this.arrIndex] == "Tops") {
      this.topsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.topsAns[index] = option;
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
    else if(this.types[this.arrIndex] == "Saree") {
      this.sareeAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.sareeAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Jackets") {
      this.jacketsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.jacketsAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Blazers") {
      this.blazzersAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.blazzersAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Lehanga") {
      this.lehangaAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.lehangaAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Sweatshirts") {
      this.sweatshirtsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.sweatshirtsAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Sweaters") {
      this.sweatersAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.sweatersAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Leggings") {
      this.leggingsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.leggingsAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Jeans") {
      this.jeansAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.jeansAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Jeggings") {
      this.jeggingsAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.jeggingsAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Skirts") {
      this.skirtAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.skirtAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Trousers") {
      this.trousersAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.trousersAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "FlatsFoot") {
      this.flatsFootAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.flatsFootAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "CasualFoot") {
      this.casualFootAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.casualFootAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "HeelsFoot") {
      this.heelsFootAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.heelsFootAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "Sportswear") {
      this.sportswearAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.sportswearAns[index] = option;
        }
      });
    }
    else if(this.types[this.arrIndex] == "InnerWear") {
      this.innerwearAns.forEach( (items:any, index:any) => {
        if(index == ind) {
          this.innerwearAns[index] = option;
        }
      });
    }
  }


}
