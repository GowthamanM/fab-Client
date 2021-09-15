import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FemaleQuizService } from 'src/app/services/female-quiz.service';
import { UserService } from 'src/app/services/user.service';

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

  topsAns:any = ['','','',''];
  kurthisAns:any = ['','','',''];
  sareeAns:any = ['','',''];
  jacketsAns:any = ['','','',''];
  blazzersAns:any = ['','','',''];
  lehangaAns:any = ['','','','',''];
  sweatshirtsAns:any = ['','','',''];
  sweatersAns:any = ['','','',''];
  leggingsAns:any = ['','','','',''];
  jeansAns:any = ['','','','',''];
  jeggingsAns:any = ['','','','',''];
  skirtAns:any = ['','','','','','',''];
  trousersAns:any = ['','','','','','','','',''];
  flatsFootAns: any = ['','','','','','','','','','',''];
  casualFootAns:any = ['','','','','','','',''];
  heelsFootAns:any = ['','','','','','','','','','','','',''];
  sportswearAns:any = ['',''];
  innerwearAns:any = ['','',''];

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private femaleQuizService: FemaleQuizService,
    private fb: FormBuilder,
    private userService:UserService
  ) { }

  ngOnInit(): void {
    this.selection = this.femaleQuizService.selectedQuiz;
    this.count = this.selection.length;
    this.types = this.femaleQuizService.selectionArray;

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
    this.route.navigate(['quiz/female/selection/' + nextRoute]);
    window.scrollTo(0, 0);
  }

  onSubmit() {
    // this.femaleQuizService.setAnswers(this.topsAns, this.kurthisAns, this.sareeAns, this.jacketsAns, this.blazzersAns, this.lehangaAns, this.sweatshirtsAns, this.sweatersAns, this.leggingsAns, this.jeansAns, this.jeggingsAns, this.skirtAns, this.trousersAns, this.flatsFootAns, this.casualFootAns, this.heelsFootAns, this.sportswearAns, this.innerwearAns);
    // this.femaleQuizService.setFemaleData();
    // this.femaleQuizService.saveFemaleData().subscribe();
    // this.checkNavigate();
  }

  setAllData() {
    this.topsAns = this.dataConversion(this.shirtForm.value);
    this.kurthisAns = this.dataConversion(this.shirtForm.value);
    this.sareeAns = this.dataConversion(this.shirtForm.value);
    this.jacketsAns = this.dataConversion(this.shirtForm.value);
    this.blazzersAns = this.dataConversion(this.shirtForm.value);
    this.lehangaAns = this.dataConversion(this.shirtForm.value);
    this.sweatshirtsAns = this.dataConversion(this.shirtForm.value);
    this.sweatersAns = this.dataConversion(this.shirtForm.value);
    this.leggingsAns = this.dataConversion(this.shirtForm.value);
    this.jeansAns = this.dataConversion(this.shirtForm.value);
    this.jeggingsAns = this.dataConversion(this.shirtForm.value);
    this.skirtAns = this.dataConversion(this.shirtForm.value);
    this.trousersAns = this.dataConversion(this.shirtForm.value);
    this.flatsFootAns = this.dataConversion(this.shirtForm.value);
    this.casualFootAns = this.dataConversion(this.shirtForm.value);
    this.heelsFootAns = this.dataConversion(this.shirtForm.value);
    this.sportswearAns = this.dataConversion(this.shirtForm.value);
    this.innerwearAns = this.dataConversion(this.shirtForm.value);
    this.onSubmit();
  }

  checkNavigate(){
    this.userService.getUserData().subscribe(data=>{
      if(data.User.isSubscribed === true){
        this.route.navigate(['wardrobe']);
      }else{
        this.route.navigate(['not-subscribed']);
      }
    })
  }

  // For Converting object into our structure
  dataConversion(data: any) {
    let dt = Object.entries(data);
    dt.forEach((innerdata, i) => {
      if(typeof(innerdata[1]) == 'object') {
        innerdata[1] = this.innerObjConversion(innerdata[1]);
      }
    });
    console.log(dt);
    let resultData:any = [];
    dt.forEach(item => {
      resultData.push(item[1]);
    });
    return resultData;
  }

  innerObjConversion(data: any)  {
    let result:any = [];
    let dt = Object.entries(data);
    dt.forEach((item, i) => {
      if(item[1] == true) {
        result.push(item[0]);
      }
    });
    return result;
  }
}
