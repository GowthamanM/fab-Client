import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MaleQuizService } from 'src/app/services/male-quiz.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-male-result',
  templateUrl: './male-result.component.html',
  styleUrls: ['./male-result.component.scss'],
})
export class MaleResultComponent implements OnInit {
  id: number = 1;
  nextBtnActive: boolean = true;
  arrIndex: number = 0;

  selection: any = [];
  count: number = 0;

  types: any = [];

  shirtAns: any = ['', '', '', '', '', '', '', '', '', '', ''];
  pantAns: any = ['', '', '', '', ''];
  innerwearAns: any = ['', '', '', ''];
  shortsAns: any = ['', '', '', '', '', '', '', ''];
  blazerAns: any = ['', '', '', '', ''];
  footwearAns: any = [''];

  constructor(
    private activeRoute: ActivatedRoute,
    private route: Router,
    private maleQuizService: MaleQuizService,
    private fb: FormBuilder,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.selection = this.maleQuizService.selectedQuiz;
    console.log(this.selection);
    this.count = this.selection.length;
    this.types = this.maleQuizService.selectionArray;
    console.log(this.types);

    this.activeRoute.params.subscribe((routeParams) => {
      this.id = +routeParams.id;
      this.checkRouteChanges();
    });
    window.scrollTo(0, 0);
  }

  checkRouteChanges() {
    this.arrIndex = this.id - 1;

    if (this.id == this.count) {
      this.nextBtnActive = false;
    } else if (this.id > this.count) {
      this.route.navigate(['page-not-found']);
    } else {
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
    console.log(this.shortsForm.value);

    this.maleQuizService.setAnswers(
      this.shirtAns,
      this.pantAns,
      this.innerwearAns,
      this.shortsAns,
      this.blazerAns,
      this.footwearAns
    );
    this.maleQuizService.viewAnswerAlert();

    this.maleQuizService.checkMaleQuizExist().subscribe((data) => {
      let respData = JSON.parse(JSON.stringify(data));
      if (
        respData.hasOwnProperty('message') &&
        respData.message == 'No such data exists'
      ) {
        this.maleQuizService.saveMaleData().subscribe((data) => {
          console.log(data);
        });
      } else {
        this.maleQuizService.updateMaleQuiz().subscribe((data) => {
          console.log(data);
        });
      }
    });
    this.checkNavigate();
  }

  setAllData() {
    this.shirtAns = this.dataConversion(this.shirtForm.value);
    this.pantAns = this.dataConversion(this.pantForm.value);
    this.shortsAns = this.dataConversion(this.shortsForm.value);
    this.blazerAns = this.dataConversion(this.blazerForm.value);
    this.innerwearAns = this.dataConversion(this.innerwearForm.value);
    this.footwearAns = this.dataConversion(this.footwearForm.value);
    this.onSubmit();
  }

  checkNavigate() {
    this.userService.getUserData().subscribe((data) => {
      if (data.User.isSubscribed === true) {
        this.route.navigate(['wardrobe']);
      } else {
        this.route.navigate(['not-subscribed']);
      }
    });
  }

  Shirt: any = this.maleQuizService.Shirt;
  Pant: any = this.maleQuizService.Pant;
  Shorts: any = this.maleQuizService.Shorts;
  Blazer: any = this.maleQuizService.Blazer;
  Innerwear: any = this.maleQuizService.Innerwear;
  Footwear: any = this.maleQuizService.Footwear;

  shirtForm = this.fb.group({
    chestSize: [''],
    size: [''],
    fit: this.fb.group({
      skinny: [''],
      slim: [''],
      regular: [''],
      bootCut: [''],
      flared: [''],
      jogger: [''],
      relaxedFit: [''],
      straight: [''],
      superSkinnyFit: [''],
      tapperedFit: [''],
    }),
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
    }),
    preference: this.fb.group({
      slim: [''],
      regular: [''],
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown: [''],
      green: [''],
      grey: [''],
      khaki: [''],
      lightBlue: [''],
      navy: [''],
      olive: [''],
      pink: [''],
      purple: [''],
      red: [''],
      salmon: [''],
      white: [''],
      yellow: [''],
    }),
    collar: this.fb.group({
      bandCollar: [''],
      buildUpCollar: [''],
      buttonDownCollar: [''],
      clubCollar: [''],
      collarLess: [''],
      cubanCollar: [''],
      cutawayCollar: [''],
      hood: [''],
      mandarinCollar: [''],
      peterPanCollar: [''],
      slimCollar: [''],
      spreadCollar: [''],
      wingtipCollar: [''],
      notSpecific: [''],
    }),
    fabric: this.fb.group({
      cotton: [''],
      cottonLinen: [''],
      crepe: [''],
      hemp: [''],
      linen: [''],
      liva: [''],
      lyocell: [''],
      model: [''],
      nylon: [''],
      organicCotton: [''],
      polySilk: [''],
      polyCotton: [''],
      polyster: [''],
      satin: [''],
      silk: [''],
      viscoseRayon: [''],
      notSpecific: [''],
    }),
    sleevelength: this.fb.group({
      longSleeve: [''],
      shotSleeve: [''],
      sleeveless: [''],
      threeQuaterSleeve: [''],
      notSpecific: [''],
    }),
  });

  pantForm = this.fb.group({
    size: [''],
    pattern: this.fb.group({
      torn: [''],
      regular: [''],
    }),
    fitJeans: this.fb.group({
      skinny: [''],
      slim: [''],
      regular: [''],
      bootCut: [''],
      flared: [''],
      jogger: [''],
      relaxedFit: [''],
      straight: [''],
      superSkinnyFit: [''],
      tapperedFit: [''],
      notSpecific: [''],
    }),
    fitTornJeans: this.fb.group({
      skinny: [''],
      slim: [''],
      regular: [''],
      bootCut: [''],
      flared: [''],
      jogger: [''],
      relaxedFit: [''],
      straight: [''],
      superSkinnyFit: [''],
      tapperedFit: [''],
      notSpecific: [''],
    }),
    fitCotton: this.fb.group({
      regular: [''],
      slim: [''],
      tappered: [''],
      looseFit: [''],
      skinnyFit: [''],
      straightFit: [''],
    }),
    price: [''],
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown: [''],
      green: [''],
      grey: [''],
      khaki: [''],
      lightBlue: [''],
      navy: [''],
      olive: [''],
      pink: [''],
      purple: [''],
      red: [''],
      salmon: [''],
      white: [''],
      yellow: [''],
    }),
  });

  shortsForm = this.fb.group({
    size: [''],

    fit: this.fb.group({
      skinny: [''],
      slim: [''],
      regular: [''],
      bootCut: [''],
      flared: [''],
      jogger: [''],
      relaxedFit: [''],
      straight: [''],
      superSkinnyFit: [''],
      tapperedFit: [''],
    }),
    price: [''],
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown: [''],
      green: [''],
      grey: [''],
      khaki: [''],
      lightBlue: [''],
      navy: [''],
      olive: [''],
      pink: [''],
      purple: [''],
      red: [''],
      salmon: [''],
      white: [''],
      yellow: [''],
    }),
    // Fabric	Cotton	Denim	Hemp	Linen	Nylon	Organic Cotton	Polyster	Tencel	Viscose Rayon	Not Specific
    fabric: this.fb.group({
      cotton: [''],
      denim: [''],
      hemp: [''],
      linen: [''],
      Nylon: [''],
      orgaincCotton: [''],
      polyster: [''],
      tencel: [''],
      viscoseRayon: [''],
      notspecific: [''],
    }),
    // Above Knee	Knee Length	Below Knee	Not Specific
    length: this.fb.group({
      aboveKnee: [''],
      kneeLength: [''],
      belowKnee: [''],
      notSpecific: [''],
    }),
    printed: this.fb.group({
      ombre: [''],
      floral: [''],
      noPrint: [''],
      notspecific: [''],
    }),
    knittedOrWoven: this.fb.group({
      knitted: [''],
      woven: [''],
      notSpecific: [''],
    }),
  });

  blazerForm = this.fb.group({
    chestSize: [''],
    size: [''],
    fit: this.fb.group({
      skinny: [''],
      slim: [''],
      regular: [''],
      bootCut: [''],
      flared: [''],
      jogger: [''],
      relaxedFit: [''],
      straight: [''],
      superSkinnyFit: [''],
      tapperedFit: [''],
    }),
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: [''],
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown: [''],
      green: [''],
      grey: [''],
      khaki: [''],
      lightBlue: [''],
      navy: [''],
      olive: [''],
      pink: [''],
      purple: [''],
      red: [''],
      salmon: [''],
      white: [''],
      yellow: [''],
    }),
  });

  tShirtForm = this.fb.group({
    chestSize: [''],
    size: [''],
    price: [''],
    fabric: this.fb.group({
      bamboo: [''],
      blended: [''],
      cashmere: [''],
      cotton: [''],
      elastane: [''],
      linen: [''],
      linenBlend: [''],
      modal: [''],
      Nylon: [''],
      organicCotton: [''],
      polyster: [''],
      polysterPUCoated: [''],
      Synthetic: [''],
      viscoseRayonWool: [''],
      notSpecific: [''],
    }),
    fit: this.fb.group({
      boxy: [''],
      compression: [''],
      loose: [''],
      regularFit: [''],
      relaxedFit: [''],
      slimFit: [''],
      notSpecific: [''],
    }),
    pattern: this.fb.group({
      checked: [''],
      colorBlocked: [''],
      dyed: [''],
      printed: [''],
      selfDesign: [''],
      solid: [''],
      striped: [''],
      notSpecific: [''],
    }),
    sleeveLength: this.fb.group({
      longSleeve: [''],
      shortSleeve: [''],
      threeQuarterSleeve: [''],
      sleeveless: [''],
      notSpecific: [''],
    }),
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown: [''],
      green: [''],
      grey: [''],
      khaki: [''],
      lightBlue: [''],
      navy: [''],
      olive: [''],
      pink: [''],
      purple: [''],
      red: [''],
      salmon: [''],
      white: [''],
      yellow: [''],
    }),
  });

  innerwearForm = this.fb.group({
    type: this.fb.group({
      briefs: [''],
      trunks: [''],
      boxerBriefs: [''],
      innerBoxers: [''],
    }),
    vest: this.fb.group({
      sleeveLess: [''],
      sleevedVests: [''],
      gymVests: [''],
    }),
    color: this.fb.group({
      red: [''],
      blue: [''],
      green: [''],
      black: [''],
    }),
  });

  footwearForm = this.fb.group({
    size: [''],
    color: this.fb.group({
      black: [''],
      blue: [''],
      brown: [''],
      green: [''],
      grey: [''],
      khaki: [''],
      lightBlue: [''],
      navy: [''],
      olive: [''],
      pink: [''],
      purple: [''],
      red: [''],
      salmon: [''],
      white: [''],
      yellow: [''],
    }),
  });

  // For Converting object into our structure
  dataConversion(data: any) {
    let dt = Object.entries(data);
    dt.forEach((innerdata, i) => {
      if (typeof innerdata[1] == 'object') {
        innerdata[1] = this.innerObjConversion(innerdata[1]);
      }
    });
    let resultData: any = [];
    dt.forEach((item) => {
      resultData.push(item[1]);
    });
    return resultData;
  }

  innerObjConversion(data: any) {
    let result: any = [];
    let dt = Object.entries(data);
    dt.forEach((item, i) => {
      if (item[1] == true) {
        result.push(item[0]);
      }
    });
    return result;
  }
}
