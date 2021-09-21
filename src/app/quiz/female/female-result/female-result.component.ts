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
  skirtsAns:any = ['','','','','','',''];
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
    this.femaleQuizService.setAnswers(this.topsAns, this.kurthisAns, this.sareeAns, this.jacketsAns, this.blazzersAns, this.lehangaAns, this.sweatshirtsAns, this.sweatersAns, this.leggingsAns, this.jeansAns, this.jeggingsAns, this.skirtsAns, this.trousersAns, this.flatsFootAns, this.casualFootAns, this.heelsFootAns, this.sportswearAns, this.innerwearAns);
    this.femaleQuizService.setFemaleData();
    
    this.femaleQuizService.checkFemaleQuizExist().subscribe(data=>{
      let respData = JSON.parse(JSON.stringify(data));
      if(respData.hasOwnProperty('message') && respData.message == 'No such data exists'){
        this.femaleQuizService.saveFemaleData().subscribe(data=>{
          console.log(data);
          
        });
        
      }else{
        this.femaleQuizService.updateFemaleQuiz().subscribe(data=>{
          console.log(data);
        });
        
      }
    });

    
    this.checkNavigate();
  }

  setAllData() {
    this.topsAns = this.dataConversion(this.topsForm.value);
    this.kurthisAns = this.dataConversion(this.kurthisForm.value);
    this.sareeAns = this.dataConversion(this.sareeForm.value);
    this.jacketsAns = this.dataConversion(this.jacketsForm.value);
    this.blazzersAns = this.dataConversion(this.blazzersForm.value);
    this.lehangaAns = this.dataConversion(this.lehangaForm.value);
    this.sweatshirtsAns = this.dataConversion(this.sweatshirtsForm.value);
    this.sweatersAns = this.dataConversion(this.sweatersForm.value);
    this.leggingsAns = this.dataConversion(this.leggingsForm.value);
    this.jeansAns = this.dataConversion(this.jeansForm.value);
    this.jeggingsAns = this.dataConversion(this.jeggingsForm.value);
    this.skirtsAns = this.dataConversion(this.skirtsForm.value);
    this.trousersAns = this.dataConversion(this.trousersForm.value);
    this.flatsFootAns = this.dataConversion(this.flatsFootForm.value);
    this.casualFootAns = this.dataConversion(this.casualFootForm.value);
    this.heelsFootAns = this.dataConversion(this.heelsFootForm.value);
    this.sportswearAns = this.dataConversion(this.sportswearForm.value);
    this.innerwearAns = this.dataConversion(this.innerwearForm.value);
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


  Tops: any = this.femaleQuizService.Tops;
  Kurthis: any = this.femaleQuizService.Kurthis;
  Saree:any = this.femaleQuizService.Saree;
  Jackets:any = this.femaleQuizService.Jackets;
  Blazers:any = this.femaleQuizService.Blazers;
  Lehanga:any = this.femaleQuizService.Lehanga;
  Sweatshirts:any = this.femaleQuizService.Sweatshirts;
  Sweaters:any = this.femaleQuizService.Sweaters;
  Leggings:any = this.femaleQuizService.Leggings;
  Jeans:any = this.femaleQuizService.Jeans;
  Jeggings:any = this.femaleQuizService.Jeggings;
  Skirts:any = this.femaleQuizService.Skirts;
  Trousers:any = this.femaleQuizService.Trousers;
  FlatsFoot:any = this.femaleQuizService.FlatsFoot;
  CasualFoot:any = this.femaleQuizService.CasualFoot;
  HeelsFoot:any = this.femaleQuizService.HeelsFoot;
  Sportswear:any = this.femaleQuizService.Sportswear;
  InnerWear:any = this.femaleQuizService.InnerWear;

  topsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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
      stripes: ['']
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

  sareeForm = this.fb.group({
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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

  jacketsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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

  blazzersForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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

  lehangaForm = this.fb.group({
    type: this.fb.group({
      stitched: [''],
      unstitched: [''],
      semiStitched: ['']
    }),
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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

  sweatshirtsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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

  sweatersForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
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

  leggingsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
    }),
    fabricType: this.fb.group({
      acrylic: [''],
      model: [''],
      cotton: [''],
      elastane: [''],
      nylon: [''],
      organicCotton: [''],
      synthetic: [''],
      viscoseRayon: ['']
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

  jeansForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
    }),
    waistRise: this.fb.group({
      highRaise: [''],
      midRaise: [''],
      lowRaise: ['']
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

  jeggingsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
    }),
    fabricType: this.fb.group({
      acrylic: [''],
      model: [''],
      cotton: [''],
      elastane: [''],
      nylon: [''],
      organicCotton: [''],
      synthetic: [''],
      viscoseRayon: ['']
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

  skirtsForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
    }),
    fabric: this.fb.group({
      cottonBlend: [''],
      linen: [''],
      liva: [''],
      modal: [''],
      nylon: [''],
      polySilk: [''],
      polyester: [''],
      pureSilk: [''],
      pureCotton: [''],
      silkBlend: [''],
      viscoseRayon: ['']
    }),
    fabricType: this.fb.group({
      chiffon: [''],
      crepe: [''],
      georgette: [''],
      jacquard: [''],
      linen: [''],
      liva: [''],
      net: [''],
      satin: [''],
      velvet: ['']
    }),
    skirtType: this.fb.group({
      knitted: [''],
      woven: [''],
      notSpecific: [''],
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

  trousersForm = this.fb.group({
    size: [''],
    price: [''],
    pattern: this.fb.group({
      solid: [''],
      printed: [''],
      checked: [''],
      stripes: ['']
    }),
    fit: this.fb.group({
      flared: [''],
      looseFit: [''],
      momFit: [''],
      regularFit: [''],
      skinnyFit: [''],
      slimFit: [''],
      straightFit: [''],
      taperedFit: [''],
      notSpecific: ['']
    }),
    fabric: this.fb.group({
      cotton: [''],
      denim: [''],
      linen: [''],
      liva: [''],
      livaeco: [''],
      modal: [''],
      nylon: [''],
      organic: [''],
      polysilk: [''],
      polyester: [''],
      silk: [''],
      viscose: [''],
      rayon: [''],
      wool: ['']
    }),
    trouserType: this.fb.group({
      antiFit: [''],
      bootcut: [''],
      cargos: [''],
      chinos: [''],
      cigerreteTrousers: [''],
      culottes: [''],
      dropCrotchTrousers: [''],
      formalTrousers: [''],
      jodpuris: [''],
      joggers: [''],
      parallelTrousers: [''],
      pegTrousers: [''],
      regularTrousers: [''],
      notSpecific: ['']
    }),
    typeOfPleat: this.fb.group({
      flatFront: [''],
      pleated: [''],
    }),
    waistRise: this.fb.group({
      highRaise: [''],
      midRaise: [''],
      lowRaise: ['']
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

  flatsFootForm = this.fb.group({
    ankleHeight: this.fb.group({
      highTop: [''],
      midTop: [''],
      regular: [''],
      notSpecific: ['']
    }),
    fastening: this.fb.group({
      ankleLoop: [''],
      backstrap: [''],
      buckle: [''],
      laceUps: [''],
      noBackStrap: [''],
      slipOn: [''],
      velcro: [''],
      zip: [''],
      notSpecific: [''],
    }),
    material: this.fb.group({
      canvas: [''],
      fabric: [''],
      fauxFur: [''],
      lace: [''],
      leather: [''],
      mesh: [''],
      pu: [''],
      plastic: [''],
      rubber: [''],
      suede: [''],
      synthetic: [''],
      syntheticPatent: [''],
      syntheticSuede: [''],
      velvet: [''],
      notSpecific: ['']
    }),
    occasion: this.fb.group({
      casual: [''],
      ethnic: [''],
      party: [''],
      work: [''],
      notSpecific: ['']
    }),
    ornamentation: this.fb.group({
      bows: [''],
      buckles: [''],
      embroidered: [''],
      ethinicEmbellished: [''],
      laserCuts: [''],
      other: [''],
      tassels: [''],
      westernEmbellished: [''],
      notSpecific: ['']
    }),
    pattern: this.fb.group({
      colourBlocked: [''],
      embellished: [''],
      printed: [''],
      solid: [''],
      striped: [''],
      textured: [''],
      wovenDesign: [''],
      notSpecific: ['']
    }),
    size: [''],
    soleMaterial: this.fb.group({
      croslite: [''],
      eva: [''],
      leather: [''],
      neolite: [''],
      pu: [''],
      pvc: [''],
      phylon: [''],
      resin: [''],
      rubber: [''],
      synthetic: [''],
      tpr: [''],
      tpu: [''],
      tUnit: [''],
      notSpecific: ['']
    }),
    toeShape: this.fb.group({
      openToe: [''],
      peepToe: [''],
      pointedToe: [''],
      roundToe: [''],
      squareToe: [''],
      notSpecific: ['']
    }),
    type: this.fb.group({
      ballerinas: [''],
      gladiators: [''],
      mojaris: [''],
      mules: [''],
      oneToeFlats: [''],
      openToeFlats: [''],
      tStrapFlats: [''],
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

  casualFootForm = this.fb.group({
    ankleHeight: this.fb.group({
      highTop: [''],
      midTop: [''],
      regular: [''],
      notSpecific: ['']
    }),
    fastening: this.fb.group({
      ankleLoop: [''],
      backstrap: [''],
      buckle: [''],
      laceUps: [''],
      noBackStrap: [''],
      slipOn: [''],
      velcro: [''],
      zip: [''],
      notSpecific: [''],
    }),
    material: this.fb.group({
      canvas: [''],
      fabric: [''],
      fauxFur: [''],
      lace: [''],
      leather: [''],
      mesh: [''],
      pu: [''],
      plastic: [''],
      rubber: [''],
      suede: [''],
      synthetic: [''],
      syntheticPatent: [''],
      syntheticSuede: [''],
      velvet: [''],
      notSpecific: ['']
    }),
    pattern: this.fb.group({
      colourBlocked: [''],
      embellished: [''],
      printed: [''],
      solid: [''],
      striped: [''],
      textured: [''],
      wovenDesign: [''],
      notSpecific: ['']
    }),
    size: [''],
    toeShape: this.fb.group({
      openToe: [''],
      peepToe: [''],
      pointedToe: [''],
      roundToe: [''],
      squareToe: [''],
      notSpecific: ['']
    }),
    type: this.fb.group({
      boatShoes: [''],
      brogues: [''],
      clogs: [''],
      derbys: [''],
      drivingShoes: [''],
      espadrilles: [''],
      flatBoots: [''],
      flatForms: [''],
      loafers: [''],
      mojaris: [''],
      monks: [''],
      muleSneakers: [''],
      mules: [''],
      oxfords: [''],
      skateShoes: [''],
      slipOnSneakers: [''],
      sneakers: [''],
      treckingShoes: [''],
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

  heelsFootForm = this.fb.group({
    ankleHeight: this.fb.group({
      highTop: [''],
      midTop: [''],
      regular: [''],
      notSpecific: ['']
    }),
    fastening: this.fb.group({
      ankleLoop: [''],
      backstrap: [''],
      closedBack: [''],
      laceUps: [''],
      openBackStrap: [''],
      notSpecific: [''],
    }),
    heelHight: [''],
    heelType: this.fb.group({
      block: [''],
      comfort: [''],
      flatForm: [''],
      kitten: [''],
      platform: [''],
      slim: [''],
      stiletoo: [''],
      wedge: [''],
      notSpecific: ['']
    }),
    material: this.fb.group({
      canvas: [''],
      fabric: [''],
      fauxFur: [''],
      lace: [''],
      leather: [''],
      mesh: [''],
      pu: [''],
      plastic: [''],
      rubber: [''],
      suede: [''],
      synthetic: [''],
      syntheticPatent: [''],
      syntheticSuede: [''],
      velvet: [''],
      notSpecific: ['']
    }),
    occasion: this.fb.group({
      casual: [''],
      ethnic: [''],
      party: [''],
      work: [''],
      notSpecific: ['']
    }),
    ornamentation: this.fb.group({
      bows: [''],
      buckles: [''],
      embroidered: [''],
      ethinicEmbellished: [''],
      laserCuts: [''],
      other: [''],
      tassels: [''],
      westernEmbellished: [''],
      notSpecific: ['']
    }),
    pattern: this.fb.group({
      colourBlocked: [''],
      embellished: [''],
      printed: [''],
      solid: [''],
      striped: [''],
      textured: [''],
      wovenDesign: [''],
      notSpecific: ['']
    }),
    size: [''],
    soleMaterial: this.fb.group({
      croslite: [''],
      eva: [''],
      leather: [''],
      neolite: [''],
      pu: [''],
      pvc: [''],
      phylon: [''],
      resin: [''],
      rubber: [''],
      synthetic: [''],
      tpr: [''],
      tpu: [''],
      tUnit: [''],
      notSpecific: ['']
    }),
    toeShape: this.fb.group({
      openToe: [''],
      peepToe: [''],
      pointedToe: [''],
      roundToe: [''],
      squareToe: [''],
      notSpecific: ['']
    }),
    type: this.fb.group({
      sandals: [''],
      pumps: [''],
      heeledBoots: [''],
      gladiators: [''],
      mules: [''],
      peepToes: [''],
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

  sportswearForm = this.fb.group({
    type: this.fb.group({
      tops: [''],
      capris: [''],
      shorts: [''],
      sweatShirts: [''],
      tShirts: [''],
      tracksuits: ['']
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

  innerwearForm = this.fb.group({
    type: this.fb.group({
      brassuire: [''],
      panties: [''],
      lingereSet: [''],
      camisoles: [''],
      shapeWear: [''],
      thermalTops: [''],
      thermalBottoms: [''],
      slips: [''],
      babyDoll: ['']
    }),
    size: [''],
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
