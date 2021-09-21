import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { KidsQuizService } from 'src/app/services/kids-quiz.service';
import { UserService } from 'src/app/services/user.service';

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

  bodysuitAns:any = ['','','',''];
  tshirtAns:any = ['','','',''];
  dressAns:any = ['','','',''];
  clothingsetAns:any = ['','','',''];
  shirtAns:any = ['','','',''];
  shortsAns:any = ['','','',''];
  kurthisAns:any = ['','','',''];

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private kidsQuizService: KidsQuizService,
    private userService:UserService,
    private fb: FormBuilder
  ) { }

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

    this.kidsQuizService.checkKidsQuizExist().subscribe(data=>{
      let respData = JSON.parse(JSON.stringify(data));
      if(respData.hasOwnProperty('message') && respData.message == 'No such data exists'){
        this.kidsQuizService.saveKidsData().subscribe(data=>{
          console.log(data);
        });
        
      }else{
        this.kidsQuizService.updateKidsQuiz().subscribe(data=>{
          console.log(data);
        });
        
      }
    });
    this.checkNavigate();
  }

  setAllData() {
    this.bodysuitAns = this.dataConversion(this.bodysuitForm.value);
    this.tshirtAns = this.dataConversion(this.tshirtForm.value);
    this.dressAns = this.dataConversion(this.dressForm.value);
    this.clothingsetAns = this.dataConversion(this.clothingsetForm.value);
    this.shirtAns = this.dataConversion(this.shirtForm.value);
    this.shortsAns = this.dataConversion(this.shortsForm.value);
    this.kurthisAns = this.dataConversion(this.kurthisForm.value);
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


  BodySuit: any = this.kidsQuizService.BodySuit;
  TShirt: any = this.kidsQuizService.TShirt;
  Dress: any = this.kidsQuizService.Dress;
  ClothingSet: any = this.kidsQuizService.ClothingSet;
  Shirt: any = this.kidsQuizService.Shirt;
  Shorts: any = this.kidsQuizService.Shorts;
  Kurthis: any = this.kidsQuizService.Kurthis;

  bodysuitForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });

  tshirtForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });

  dressForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });

  clothingsetForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });

  shirtForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });

  shortsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });

  kurthisForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
      notSpecific: ['']
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown:[''],
      green: [''],
      grey:[''],
      khaki:[''],
      lightBlue:[''],
      navy:[''],
      olive:[''],
      pink:[''],
      purple:[''],
      red: [''],
      salmon:[''],
      white:[''],
      yellow:['']
    }),
  });



  // For Converting object into our structure
  dataConversion(data: any) {
    let dt = Object.entries(data);
    dt.forEach((innerdata, i) => {
      if(typeof(innerdata[1]) == 'object') {
        innerdata[1] = this.innerObjConversion(innerdata[1]);
      }
    });
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
