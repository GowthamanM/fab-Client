import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root',
})
export class MaleQuizService {
  selectionArray: any = [];
  selectedQuiz: any = [];
  maleData: any = {};
  shirtAns: any = ['', '', '', '', '', '', ''];
  pantAns: any = ['', '', '', '', '', ''];
  innerwearAns: any = ['', '', ''];
  tshrtAns: any = ['', '', '', '', '', '', '', ''];
  shortsAns: any = ['', '', '', '', '', '', '', ''];
  blazerAns: any = ['', '', '', '', '', ''];
  footwearAns: any = ['', ''];
  uid: any;

  apiUrl: string;
  constructor(
    private http: HttpClient,
    private credentials: CredentialService,
    private authService: AuthService
  ) {
    this.apiUrl = this.credentials.apiUrl;
    this.authService.decodeToken().subscribe((data) => {
      this.uid = JSON.parse(JSON.stringify(data)).payload.id;
      console.log(this.uid);
    });
  }

  Shirt: any = [
    ['Shirt', 'Size (Chest)', ['39', '40', '41', '42', '43','Not Specific']],
    ['Shirt', 'Size', ['S', 'M', 'L', 'XL', 'XXL','Not Specific']],
    [
      'Shirt',
      'Fit',
      [
        ['Skinny', 'skinny'],
        ['Slim', 'slim'],
        ['Regular', 'regular'],
        ['Boot cut', 'bootCut'],
        ['Flared', 'flared'],
        ['Jogger', 'jogger'],
        ['Relaxed fit', 'relaxedFit'],
        ['Straight', 'straight'],
        ['Super skinny fit', 'superSkinnyFit'],
        ['Tappered fit', 'tapperedFit'],
        ['Not Specific','notSpecific']
      ],
    ],
    [
      'Shirt',
      'Price',
      [
        'Below 500',
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 4000',
        '4000 - 5000',
        'More than 5000',
        'Not Specific'
      ],
    ],
    [
      'Shirt',
      'Pattern',
      [
        ['Solid', 'solid'],
        ['Printed', 'printed'],
        ['Checked', 'checked'],
        ['Stripes', 'stripes'],
        ['Not Specific','notSpecific']
      ],
    ],
    [
      'Shirt',
      'Your Preference',
      [
        ['Slim', 'slim'],
        ['Regular', 'regular'],
        ['Not Specific','notSpecific']
      ],
    ],
    [
      'Shirt',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific','notSpecific']
      ],
    ],
    [
      'Shirt',
      'Collar',
      [
        ['Band Collar', 'bandCollar'],
        ['Built-up Collar', 'buildUpCollar'],
        ['Button-Down Collar', 'buttonDownCollar'],
        ['Club Collar', 'clubCollar'],
        ['Collar Less', 'collarLess'],
        ['Cuban Collar', 'cubanCollar'],
        ['Cutaway Collar', 'cutawayCollar'],
        ['Hood', 'hood'],
        ['Mandarin Collar', 'mandarinCollar'],
        ['Peter Pan Collar', 'peterPanCollar'],
        ['Slim Collar', 'slimCollar'],
        ['Spread Collar', 'spreadCollar'],
        ['Wingtip Collar', 'wingtipCollar'],
        ['Not Specific', 'notSpecific']
      ],
    ],
    [
      'Shirt',
      'Fabric',
      [
        ['Cotton', 'cotton'],
        ['Cotton Linen', 'cottonLinen'],
        ['Crepe', 'crepe'],
        ['Hemp', 'hemp'],
        ['Linen', 'linen'],
        ['Liva', 'liva'],
        ['Lyocell', 'lyocell'],
        ['Modal', 'modal'],
        ['Nylon', 'nylon'],
        ['Organic Cotton', 'organicCotton'],
        ['Poly Silk', 'polySilk'],
        ['Poly Cotton', 'polyCotton'],
        ['Polyster', 'polyster'],
        ['Satin', 'satin'],
        ['Silk', 'silk'],
        ['Viscose Rayon', 'viscoseRayon'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Shirt',
      'Sleeve Length',
      [
        ['Long Sleeve', 'longSleeve'],
        ['Short Sleeve', 'shortSleeve'],
        ['Sleveless', 'sleveless'],
        ['Three-Quarter Sleeve', 'threeQuarterSleeve'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  Pant: any = [
    ['Pant', 'Size', ['28 - 30', '30 - 32', '32 - 34', '34 - 36', '36 - 38','Not Specific']],
    [
      'Pant',
      'Pattern',
      [
        ['Torn', 'torn'],
        ['Regular', 'regular'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    // Fit(Jeans)	Skinny	Slim	Regular	Boot cut	Flared	Jogger	Relaxed fit	Straight 	Super skinny fit	Tappered fit	Not Specific
    [
      'Pant',
      'Fit (Jeans)',
      [
        ['Skinny', 'skinny'],
        ['Slim', 'slim'],
        ['Regular', 'regular'],
        ['Boot cut', 'bootCut'],
        ['Flared', 'flared'],
        ['Jogger', 'jogger'],
        ['Relaxed fit', 'relaxedFit'],
        ['Straight', 'straight'],
        ['Super skinny fit', 'superSkinnyFit'],
        ['Tappered fit', 'tapperedFit'],
        ['Not specific', 'notSpecific'],
      ],
    ],
    // Fit(Torn jeans)	Skinny	Slim	Regular	Boot cut	Flared	Jogger	Relaxed fit	Straight 	Super skinny fit	Tappered fit	Not Specific
    [
      'Pant',
      'Fit (Torn Jeans)',
      [
        ['Skinny', 'skinny'],
        ['Slim', 'slim'],
        ['Regular', 'regular'],
        ['Boot cut', 'bootCut'],
        ['Flared', 'flared'],
        ['Jogger', 'jogger'],
        ['Relaxed fit', 'relaxedFit'],
        ['Straight', 'straight'],
        ['Super skinny fit', 'superSkinnyFit'],
        ['Tappered fit', 'tapperedFit'],
        ['Not specific', 'notSpecific'],
      ],
    ],
    [
      'Pant',
      'Fit (Cotton)',
      [
        ['Skinny', 'skinny'],
        ['Slim', 'slim'],
        ['Tappered', 'tappered'],
        ['Loose Fit', 'looseFit'],
        ['Skinny Fit', 'skinnyFit'],
        ['Straight Fit', 'straightFit'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Shirt',
      'Price',
      [
        'Below 500',
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 4000',
        '4000 - 5000',
        'More than 5000',
        'Not Specific'
      ],
    ],
    [
      'Shirt',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  Innerwear: any = [
    [
      'Innerwear',
      'Type',
      [
        ['Briefs', 'briefs'],
        ['Trunks', 'trunks'],
        ['Boxer briefs', 'boxerBriefs'],
        ['Inner boxers', 'innerBoxers'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Innerwear',
      'Vest',
      [
        ['Sleeve less', 'sleeveLess'],
        ['Sleeved vests', 'sleevedVests'],
        ['Gym Vests', 'gymVests'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Innerwear',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  Footwear: any = [
    ['Footwear', 'Size', ['6', '7', '8', '9', '10', '11','Not Specific']],
    [
      'Footwear',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  // Fabric	Cotton	Denim	Hemp	Linen	Nylon	Organic Cotton	Polyster	Tencel	Viscose Rayon	Not Specific
  Shorts: any = [
    ['Shorts', 'Size', ['28 - 30', '30 - 32', '32 - 34', '34 - 36', '36 - 38','Not Specific']],

    [
      'Shorts',
      'Fit',
      [
        ['Skinny', 'skinny'],
        ['Slim', 'slim'],
        ['Regular', 'regular'],
        ['Boot cut', 'bootCut'],
        ['Flared', 'flared'],
        ['Jogger', 'jogger'],
        ['Relaxed fit', 'relaxedFit'],
        ['Straight', 'straight'],
        ['Super skinny fit', 'superSkinnyFit'],
        ['Tappered fit', 'tapperedFit'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Shorts',
      'Price',
      [
        'Below 500',
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 4000',
        '4000 - 5000',
        'More than 5000',
        'Not Specific'
      ],
    ],
    [
      'Shorts',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Shorts',
      'Fabric',
      [
        ['Cotton', 'cotton'],
        ['Denim', 'denim'],
        ['Hemp', 'hemp'],
        ['Linen', 'linen'],
        ['Nylon', 'nylon'],
        ['Organic Cotton', 'organicCotton'],
        ['Polyster', 'polyster'],
        ['Tencel', 'tencel'],
        ['Viscose Rayon', 'viscoseRayon'],
        ['Not specific', 'Not Specific'],
      ],
    ],
    [
      'Shorts',
      'Length',
      [
        ['Above knee', 'aboveKnee'],
        ['Knee Length', 'kneeLength'],
        ['Below Knee', 'belowKnee'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Shorts',
      'Printed',
      [
        ['Ombre', 'ombre'],
        ['Floral', 'floral'],
        ['No Print', 'noPrint'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Shorts',
      'KnittedOrWoven',
      [
        ['Knitted', 'knitted'],
        ['Woven', 'woven'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  Blazer: any = [
    ['Blazer', 'Size (Chest)', ['39', '40', '41', '42', '43','Not Specific']],
    ['Blazer', 'Size', ['S', 'M', 'L', 'XL', 'XXL','Not Specific']],
    [
      'Blazer',
      'Fit',
      [
        ['Skinny', 'skinny'],
        ['Slim', 'slim'],
        ['Regular', 'regular'],
        ['Boot cut', 'bootCut'],
        ['Flared', 'flared'],
        ['Jogger', 'jogger'],
        ['Relaxed fit', 'relaxedFit'],
        ['Straight', 'straight'],
        ['Super skinny fit', 'superSkinnyFit'],
        ['Tappered fit', 'tapperedFit'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Blazer',
      'Price',
      [
        'Below 500',
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 4000',
        '4000 - 5000',
        'More than 5000',
        'Not Specific'
      ],
    ],
    [
      'Blazer',
      'Pattern',
      [
        ['Solid', 'solid'],
        ['Printed', 'printed'],
        ['Checked', 'checked'],
        ['Stripes', 'stripes'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
    [
      'Blazer',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  // Fabric	Bamboo	Blended	Cashmere	Cotton	Elastane	Linen	Linen Blend	Modal	Nylon	Organic Cotton 	Polyster	Polyster PU Coated	Synthetic	Viscose Rayon	Wool	Not Specific
  Tshirt: any = [
    ['Tshirt', 'Size (Chest)', ['39', '40', '41', '42', '43','Not Specific']],
    ['Tshirt', 'Size', ['S', 'M', 'L', 'XL', 'XXL','Not Specific']],
    [
      'Tshirt',
      'Price',
      [
        'Below 500',
        '1000 - 2000',
        '2000 - 3000',
        '3000 - 4000',
        '4000 - 5000',
        'More than 5000',
        'Not Specific'
      ],
    ],
    [
      'Tshirt',
      'Fabric',
      [
        ['Bamboo', 'bamboo'],
        ['Blended', 'blended'],
        ['Cashmere', 'cashmere'],
        ['Cotton', 'cotton'],
        ['Elastane', 'Elastane'],
        ['Linen', 'linen'],
        ['Linen Blend', 'linenBlend'],
        ['Modal', 'modal'],
        ['Nylon', 'nylon'],
        ['Orgainc Cotton', 'organicCottin'],
        ['Polyster', 'polyster'],
        ['Polyster PU Coated', 'polysterPUCoated'],
        ['Synthetic', 'synthetic'],
        ['Viscose Rayon Wool', 'viscoseRayonWool'],
        ['Not Specific', 'notspecific'],
      ],
    ],
    // Fit	Boxy	Compression	Loose	Regular Fit	Relaxed Fit	Slim Fit	Not Specific
    [
      'Tshirt',
      'Fit',
      [
        ['Boxy', 'boxy'],
        ['Compression', 'compression'],
        ['Loose', 'loose'],
        ['Regular Fit', 'regularFit'],
        ['Relaxed fit', 'relaxedFit'],
        ['Slim Fit', 'slimFit'],
        ['Relaxed fit', 'relaxedFit'],
        ['Not specific', 'notSpecifc'],
      ],
    ],
    // Pattern	Checked	Colour Blocked	Dyed	Printed	Self Design	Solid	Striped	Not Specific
    [
      'Tshirt',
      'Pattern',
      [
        ['Checked', 'Checked'],
        ['Color Blocked', 'colorBlocked'],
        ['Dyed', 'dyed'],
        ['Printed', 'printed'],
        ['Self Design', 'selfDesign'],
        ['Solid', 'solid'],
        ['Striped', 'striped'],
        ['Not specific', 'notSpecifc'],
      ],
    ],
    // Sleeve Length	Long Sleeve	Short Sleeve	Sleeveless	Three-Quarter Sleeve		Not Specific
    [
      'Tshirt',
      'Sleeve Length',
      [
        ['Long Sleeve', 'longSleeve'],
        ['Short Sleeve', 'shortSleeve'],
        ['Three-Quarter Sleeve', 'threeQuarterSleeve'],
        ['Sleeveless', 'sleeveless'],
        ['Not specific', 'notSpecifc'],
      ],
    ],
    [
      'Tshirt',
      'Color',
      [
        ['Black', 'black'],
        ['Blue', 'blue'],
        ['Brown', 'brown'],
        ['Green', 'green'],
        ['Grey', 'grey'],
        ['Khaki', 'khaki'],
        ['Light Blue', 'lightBlue'],
        ['Navy', 'navy'],
        ['Olive', 'olive'],
        ['Pink', 'pink'],
        ['Purple', 'purple'],
        ['Red', 'red'],
        ['Salmon', 'salmon'],
        ['White', 'white'],
        ['Yellow', 'yellow'],
        ['Not Specific', 'notSpecific'],
      ],
    ],
  ];

  allQuiz: any = [
    this.Shirt,
    this.Pant,
    this.Innerwear,
    this.Shorts,
    this.Blazer,
    this.Footwear,
    this.Tshirt,
  ];

  setSelectionArray(data: any) {
    this.selectionArray = [];
    this.selectedQuiz = [];

    this.selectionArray = data;
    // console.log(this.selectionArray);
    this.setQuiz(this.selectionArray);
  }

  setQuiz(selectionData: any) {
    selectionData.forEach((quiz: any) => {
      console.log('quiz log : ' + quiz);

      this.allQuiz.forEach((item: any) => {
        if (item[0][0] == quiz) {
          this.selectedQuiz.push(item);
        }
      });
    });
    // console.log(selectionData);
    // console.log("All Quiz");
    // console.log(this.allQuiz);
    // console.log("Selected Quiz");
    // console.log(this.selectedQuiz);
  }

  setAnswers(
    shirtData: any,
    pantData: any,
    innerwearData: any,
    shorts: any,
    blazer: any,
    footwear: any,
    tshrt: any
  ) {
    this.shirtAns = shirtData;
    this.pantAns = pantData;
    this.innerwearAns = innerwearData;
    this.shortsAns = shorts;
    this.blazerAns = blazer;
    this.footwearAns = footwear;
    this.tshrtAns = tshrt;
  }

  viewAllAnswers() {
    console.log('Shirt Answers');
    console.log(this.shirtAns);
    console.log('Pant Answers');
    console.log(this.pantAns);
    console.log('InnerWear Answers');
    console.log(this.innerwearAns);
  }

  viewAnswerAlert() {
    this.setMaleData();
    console.log(JSON.parse(JSON.stringify(this.maleData)));
  }

  setMaleData() {
    this.maleData.shirts = {};
    this.maleData.shirts.chestSize =
      this.shirtAns[0] === '' ? 'null' : this.shirtAns[0];
    this.maleData.shirts.size =
      this.shirtAns[1] === '' ? 'null' : this.shirtAns[1];
    this.maleData.shirts.fit =
      this.shirtAns[2] === '' ? 'null' : this.shirtAns[2];
    this.maleData.shirts.price =
      this.shirtAns[3] === '' ? 'null' : this.shirtAns[3];
    this.maleData.shirts.pattern =
      this.shirtAns[4] === '' ? 'null' : this.shirtAns[4];
    // this.maleData.shirts.bodyType = this.shirtAns[5] === ''?'null':this.shirtAns[5];
    this.maleData.shirts.yourShirtPreference =
      this.shirtAns[5] === '' ? 'null' : this.shirtAns[5];
    this.maleData.shirts.color =
      this.shirtAns[6] === '' ? 'null' : this.shirtAns[6];
    this.maleData.shirts.collar =
      this.shirtAns[7] === '' ? 'null' : this.shirtAns[7];
    this.maleData.shirts.fabric =
      this.shirtAns[8] === '' ? 'null' : this.shirtAns[8];
    this.maleData.shirts.sleeveLength =
      this.shirtAns[9] === '' ? 'null' : this.shirtAns[9];

    this.maleData.innerwear = {};
    this.maleData.innerwear.itype =
      this.innerwearAns[0] === '' ? 'null' : this.innerwearAns[0];
    this.maleData.innerwear.vest =
      this.innerwearAns[1] === '' ? 'null' : this.innerwearAns[1];
    this.maleData.innerwear.color =
      this.innerwearAns[2] === '' ? 'null' : this.innerwearAns[2];

    this.maleData.pants = {};
    this.maleData.pants.size =
      this.pantAns[0] === '' ? 'null' : this.pantAns[0];
    this.maleData.pants.pattern =
      this.pantAns[1] === '' ? 'null' : this.pantAns[1];
    this.maleData.pants.fitJeans = this.pantAns[2] === '' ? 'null' : this.pantAns[2];
    this.maleData.pants.fitTornJeans =
      this.pantAns[3] === '' ? 'null' : this.pantAns[3];
    this.maleData.pants.fitCotton =
      this.pantAns[4] === '' ? 'null' : this.pantAns[4];
    this.maleData.pants.price =
      this.pantAns[5] === '' ? 'null' : this.pantAns[5];
    this.maleData.pants.color =
      this.pantAns[6] === '' ? 'null' : this.pantAns[6];

    this.maleData.shorts = {};
    this.maleData.shorts.size =
      this.shortsAns[0] === '' ? 'null' : this.shortsAns[0];
    this.maleData.shorts.fit =
      this.shortsAns[1] === '' ? 'null' : this.shortsAns[1];
    this.maleData.shorts.price =
      this.shortsAns[2] === '' ? 'null' : this.shortsAns[2];
    this.maleData.shorts.color =
      this.shortsAns[3] === '' ? 'null' : this.shortsAns[3];
    this.maleData.shorts.fabric =
      this.shortsAns[4] === '' ? 'null' : this.shortsAns[4];
    this.maleData.shorts.length =
      this.shortsAns[5] === '' ? 'null' : this.shortsAns[5];
    this.maleData.shorts.printed =
      this.shortsAns[6] === '' ? 'null' : this.shortsAns[6];
    this.maleData.shorts.KnittedOrWoven =
      this.shortsAns[7] === '' ? 'null' : this.shortsAns[7];

    this.maleData.blazers = {};
    this.maleData.blazers.chestSize =
      this.blazerAns[0] === '' ? 'null' : this.blazerAns[0];
    this.maleData.blazers.size =
      this.blazerAns[1] === '' ? 'null' : this.blazerAns[1];
    this.maleData.blazers.fit =
      this.blazerAns[2] === '' ? 'null' : this.blazerAns[2];
    this.maleData.blazers.price =
      this.blazerAns[3] === '' ? 'null' : this.blazerAns[3];
    this.maleData.blazers.pattern =
      this.blazerAns[4] === '' ? 'null' : this.blazerAns[4];
    this.maleData.blazers.color =
      this.blazerAns[5] === '' ? 'null' : this.blazerAns[5];

    this.maleData.footwear = {};
    this.maleData.footwear.size =
      this.footwearAns[0] === '' ? 'null' : this.footwearAns[0];
    this.maleData.footwear.color =
      this.footwearAns[1] === '' ? 'null' : this.footwearAns[1];

    this.maleData.tShirt = {};
    this.maleData.tShirt.chestSize =
      this.tshrtAns[0] === '' ? 'null' : this.tshrtAns[0];
    this.maleData.tShirt.size =
      this.tshrtAns[1] === '' ? 'null' : this.tshrtAns[1];
    this.maleData.tShirt.price =
      this.tshrtAns[2] === '' ? 'null' : this.tshrtAns[2];
    this.maleData.tShirt.fabric =
      this.tshrtAns[3] === '' ? 'null' : this.tshrtAns[3];
    this.maleData.tShirt.fit =
      this.tshrtAns[4] === '' ? 'null' : this.tshrtAns[4];
    this.maleData.tShirt.pattern =
      this.tshrtAns[5] === '' ? 'null' : this.tshrtAns[5];
    this.maleData.tShirt.sleeveLength =
      this.tshrtAns[6] === '' ? 'null' : this.tshrtAns[6];
    this.maleData.tShirt.color =
      this.tshrtAns[7] === '' ? 'null' : this.tshrtAns[7];
  }

  setMaleCommonQuestions(data: any) {
    this.maleData.commonQuestions = data;
  }

  getUid() {}

  saveMaleData() {
    this.getUid();

    var header = {
      headers: new HttpHeaders().set(
        'Authorization',
        `bearer ${this.authService.getToken()}`
      ),
    };
    this.maleData.userId = this.uid;
    console.log(JSON.parse(JSON.stringify(this.maleData)));
    return this.http.post(
      this.apiUrl + 'mq',
      JSON.parse(JSON.stringify(this.maleData))
    );
  }

  public checkMaleQuizExist() {
    return this.http.get(this.apiUrl + 'mq/' + this.authService.getUid());
  }

  public updateMaleQuiz() {
    this.maleData.userId = this.authService.getUid();
    this.maleData.status = '200';
    return this.http.put(
      this.apiUrl + 'mq/' + this.authService.getUid(),
      JSON.parse(JSON.stringify(this.maleData))
    );
  }
}
