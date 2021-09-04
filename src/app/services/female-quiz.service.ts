import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class FemaleQuizService {


  femaleData:any = {};
  apiUrl:string;
  uid:any;

  selectionArray:any = [];
  selectedQuiz:any = [];

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

  constructor(private credentials:CredentialService,
    private authService:AuthService,
    private http:HttpClient) {
    this.apiUrl = this.credentials.apiUrl;
      this.authService.decodeToken().subscribe(data=>{
        this.uid = JSON.parse(JSON.stringify(data)).payload.id;
        console.log(this.uid);
      })
  }

  Tops:any = [
    [
      'Tops','Size', ['XS','S','M','L','XL','XXL','XXXL','XXXXL']
    ],
    [
      'Tops','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Tops','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Kurthis:any = [
    [
      'Kurthis','Size', ['XS','S','M','L','XL','XXL','XXXL','XXXXL']
    ],
    [
      'Kurthis','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Kurthis','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Saree:any = [
    [
      'Saree','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Saree','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Jackets:any = [
    [
      'Jackets','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Jackets','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Jackets','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Blazers:any = [
    [
      'Blazers','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Blazers','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Blazers','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Lehanga:any = [
    [
      'Lehanga','Type', ['Stitched','Unstitched','Semi Stitched']
    ],
    [
      'Lehanga','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Lehanga','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Lehanga','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Sweatshirts:any = [
    [
      'Sweatshirts','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Sweatshirts','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Sweatshirts','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Sweaters:any = [
    [
      'Sweaters','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Sweaters','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Sweaters','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  Leggings:any = [
    [
      'Leggings','Size', ['S','M','L','XL','XXL','XXXL']
    ],
    [
      'Leggings','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Leggings','Pattern', ['Solid','Printed','Checked','Stripes']
    ],
    [
      'Leggings','Fabric Type', ['Acrylic','Model','Cotton','Elastane','Nylon', 'Organic Cotton','Synthetic','Viscose Rayon']
    ],
  ];

  Jeans:any = [
    [
      'Jeans','Size', ['S','M','L','XL','XXL','XXXL']
    ],
    [
      'Jeans','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Jeans','Pattern', ['Solid','Printed','Checked','Stripes']
    ],
    [
      'Jeans','Waist Rise', ['High Raise','Mid Raise','Low Raise']
    ],
  ];

  Jeggings:any = [
    [
      'Jeggings','Size', ['S','M','L','XL','XXL','XXXL']
    ],
    [
      'Jeggings','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Jeggings','Pattern', ['Solid','Printed','Checked','Stripes']
    ],
    [
      'Jeggings','Fabric Type', ['Acrylic','Model','Cotton','Elastane','Nylon', 'Organic Cotton','Synthetic','Viscose Rayon']
    ],
  ];

  Skirts:any = [
    [
      'Skirts','Size', ['26-28','28-30','30-32','32-34','34-36','36-38']
    ],
    [
      'Skirts','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Skirts','Pattern', ['Solid','Printed','Checked','Stripes']
    ],
    [
      'Skirts','Fabric', ['Cotton Blend','Linen','Liva','Modal','Nylon', 'Poly silk','Polyester','Pure silk','Pure Cotton','silk Blend','Viscouse Rayon']
    ],
    [
      'Skirts','Fabric Type', ['chiffon','crepe',	'georgette',	'jacquard',	'linen',	'liva',	'net', 'satin',	'velvet']
    ],
    [
      'Skirts','Skirt Type', ['Knitted','woven',	'Not Specific']
    ],
  ];

  Trousers:any = [
    [
      'Trousers','Size', ['26-28','28-30','30-32','32-34','34-36','36-38']
    ],
    [
      'Trousers','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Trousers','Pattern', ['Solid','Printed','Checked','Stripes']
    ],
    [
      'Trousers','Fit', ['Flared',	'Loose fit',	'Mom fit',	'Regular fit',	'Skinny fit',	'Slim fit',	'Straight fit',	'Tapered fit',	'Not specific']
    ],
    [
      'Trousers','Fabric', ['cotton',	'denim',	'linen',	'liva',	'livaeco',	'modal',	'nylon',	'organic', 'cotton',	'polysilk',	'polyester',	'silk',	'viscose', 'rayon',	'wool']
    ],
    [
      'Trousers','Trouser Type', ['Anti fit',	'bootcut',	'cargos',	'chinos',	'cigerrete trousers',	'culottes',	'drop crotch trousers',	'formal trousers',	'jodpuris',	'joggers',	'parallel trousers',	'peg trousers',	'regular trousers', 'not specific']
    ],
    [
      'Trousers','Type of Pleat', ['Flat Front','Pleated']
    ],
    [
      'Trousers','Waist Rise', ['High Raise','Mid Raise','Low Raise']
    ]
  ];

  FlatsFoot:any = [
    [
      'FlatsFoot','Ankle height', ['High-top',	'Mid-top',	'Regular',	'Not specific']
    ],
    [
      'FlatsFoot','Fastening and back detail', ['Ankle loop',	'Backstrap',	'Buckle',	'Lace-ups',	'No back strap',	'Slip-on',	'Velcro',	'Zip',	'Not specific']
    ],
    [
      'FlatsFoot','Material', ['Canvas',	'Fabric',	'Faux fur',	'Lace',	'leather',	'Mesh',	'PU',	'Plastic',	'Rubber',	'Suede',	'Synthetic',	'Synthetic Patent',	'Synthetic suede',	'Velvet',	'Not specific']
    ],
    [
      'FlatsFoot','Occasion', ['Casual',	'Ethnic',	'Party',	'Work',	'Not specific']
    ],
    [
      'FlatsFoot','Ornamentation', ['Bows',	'Buckles',	'embroidered',	'Ethinic-embellished',	'Laser cuts',	'other',	'tassels',	'western-embellished',	'Not specific']
    ],
    [
      'FlatsFoot','Pattern', ['Colour blocked',	'Embellished',	'Printed',	'Solid',	'Striped',	'Textured',	'Woven design',	'Not specific']
    ],
    [
      'FlatsFoot','Size', ['Euro 15','UK-9.5']
    ],
    [
      'FlatsFoot','Sole Material', ['croslite',	'Eva',	'Leather',	'Neolite',	'PU',	'PVC',	'Phylon',	'Resin',	'Rubber',	'Synthetic',	'TPR',	'TPU',	'Tunit',	'Not specific']
    ],
    [
      'FlatsFoot','Toe shape', ['Open Toe',	'Peep Toe',	'Pointed Toe',	'Round Toe',	'Square Toe',	'Not specific']
    ],
    [
      'FlatsFoot','Type', ['Ballerinas',	'Gladiators',	'Mojaris',	'Mules',	'One toe Flats',	'Open toe flats',	'T-strap flats',	'Not specific']
    ],
  ];

  CasualFoot:any = [
    [
      'CasualFoot','Ankle height', ['High-top',	'Mid-top',	'Regular',	'Not specific']
    ],
    [
      'CasualFoot','Fastening and back detail', ['Buckle',	'Lace-ups',	'Slip-on',	'Elcro',	'Zip',	'Not specific']
    ],
    [
      'CasualFoot','Material', ['Canvas',	'Fabric',	'Faux fur',	'Lace',	'leather',	'Mesh',	'PU',	'Plastic',	'Rubber',	'Suede',	'Synthetic',	'Synthetic Patent',	'Synthetic suede',	'Not specific']
    ],
    [
      'CasualFoot','Pattern', ['Colour blocked',	'Embellished',	'Printed',	'Solid',	'Striped',	'Textured',	'Woven design',	'Not specific']
    ],
    [
      'CasualFoot','Shoe Width', ['Euro 15','UK-9.5']
    ],
    [
      'CasualFoot','Toe shape', ['Open Toe',	'Peep Toe',	'Pointed Toe',	'Round Toe',	'Square Toe',	'Not specific']
    ],
    [
      'CasualFoot','Type', ['Boat Shoes',	'Brogues',	'Clogs',	'Derbys',	'Driving shoes',	'Espadrilles',	'Flat boots',	'Flat forms',	'Loafers',	'Mojaris',	'Monks',	 'Mule sneakers',	'Mules', 	'Oxfords',	'Skate Shoes',	'slip-on sneakers',	'sneakers',	'Trecking Shoes',	'Not specific']
    ],
  ];

  HeelsFoot:any = [
    [
      'HeelsFoot','Ankle height', ['High-top',	'Mid-top',	'Regular',	'Not specific']
    ],
    [
      'HeelsFoot','Fastening and back detail', ['Ankle loop',	'Backstrap',	'Closed Back',	'Lace-ups',	'Open back strap',	'Not specific']
    ],
    [
      'HeelsFoot','Heel Height (inches)', ['1',	'1.5',	'2',	'2.5',	'3',	'3.5',	'4',	'4.5',	'5',	'5.5',	'6',	'Not specific']
    ],
    [
      'HeelsFoot','Heel Type', ['Block',	'Comfort',	'Flatform',	'Kitten',	'Platform',	'Slim',	'Stiletoo',	'Wedge',	'Not specific']
    ],
    [
      'HeelsFoot','Material', ['Canvas',	'Fabric',	'Faux fur',	'Lace',	'leather',	'Mesh',	'PU',	'Plastic',	'Rubber',	'Suede',	'Synthetic',	'Synthetic Patent',	'Synthetic suede',	'Velvet',	'Not specific']
    ],
    [
      'HeelsFoot','Occasion', ['Casual',	'Ethnic',	'Party',	'Work',	'Not specific']
    ],
    [
      'HeelsFoot','Ornamentation', ['Bows',	'Buckles',	'embroidered',	'Ethinic-embellished',	'Laser cuts',	'other',	'tassels',	'western-embellished',	'Not specific']
    ],
    [
      'HeelsFoot','Pattern', ['Colour blocked',	'Embellished',	'Printed',	'Solid',	'Striped',	'Textured',	'Woven design',	'Not specific']
    ],
    [
      'HeelsFoot','Size', ['UK2',	'UK2.5',	'UK3',	'UK3.5',	'UK4',	'UK5',	'UK6',	'UK6.5',	'UK7',	'UK7.5',	'UK8',	'EURO33',	'EURO33.5',	'EURO34',	'EURO34.5',	'EURO36',	'EURO36.5',	'EURO37',	'EURO37.5',	'EURO38',	'EURO38.5',	'EURO39',	'EURO39.5',	'EURO40',	'EURO40.5']
    ],
    [
      'HeelsFoot','Sole Material', ['croslite',	'Eva',	'Leather',	'Neolite',	'PU',	'PVC',	'Phylon',	'Resin',	'Rubber',	'Synthetic',	'TPR',	'TPU',	'Tunit',	'Not specific']
    ],
    [
      'HeelsFoot','Toe shape', ['Open Toe',	'Peep Toe',	'Pointed Toe',	'Round Toe',	'Square Toe',	'Not specific']
    ],
    [
      'HeelsFoot','Type', ['Sandals',	'Pumps',	'Heeled boots',	'Gladiators',	'Mules',	'Peep toes',	'Not specific']
    ],
  ];

  Sportswear:any = [
    [
      'Sportswear','Type', ['Tops',	'Capris',	'shorts',	'Sweatshirts',	't shirts',	'tracksuits']
    ]
  ];

  InnerWear:any = [
    [
      'InnerWear','Type', ['brassuire',	'panties',	'Lingere set',	'camisoles',	'shape wear',	'thermal tops',	'thermal bottoms',	'slips',	'Baby doll']
    ],
    [
      'InnerWear','Size', ['32B to 40C',	's to XXL',	'S to L',	's to XXL',	's to XXL',	'XS to XXL',	'S to XL',	'S to L']
    ]
  ];

  allQuiz:any = [this.Tops, this.Kurthis, this.Saree, this.Jackets, this.Blazers, this.Lehanga, this.Sweatshirts, this.Sweaters, this.Leggings, this.Jeans, this.Jeggings, this.Skirts, this.Trousers, this.FlatsFoot, this.CasualFoot, this.HeelsFoot, this.Sportswear, this.InnerWear];

  setSelectionArray(data:any) {
    this.selectionArray = [];
    this.selectedQuiz = [];

    this.selectionArray = data;
    // console.log(this.selectionArray);
    this.setQuiz(this.selectionArray);
  }

  setQuiz(selectionData:any) {
    selectionData.forEach( (quiz:any) => {
      this.allQuiz.forEach( (item:any) => {
        if(item[0][0] == quiz) {
          this.selectedQuiz.push(item)
        }
      });
    });
    // console.log(selectionData);
    // console.log("All Quiz");
    // console.log(this.allQuiz);
    // console.log("Selected Quiz");
    // console.log(this.selectedQuiz);
  }

  setAnswers(topData:any, kurthisData:any, sareeData:any, jacketsData:any, blazzersData:any, lehangaData:any, sweatshirtsData:any, sweatersData:any, leggingsData:any, jeansData:any, jeggingsData:any, skirtData:any, trousersData:any, flatsFootData:any, casualFootData:any, heelsFootData:any, sportswearData:any, innerwearData:any) {
    this.topsAns = topData;
    this.kurthisAns = kurthisData;
    this.sareeAns = sareeData;
    this.jacketsAns = jacketsData;
    this.blazzersAns = blazzersData;
    this.lehangaAns = lehangaData;
    this.sweatshirtsAns = sweatshirtsData;
    this.sweatersAns = sweatersData;
    this.leggingsAns = leggingsData;
    this.jeansAns = jeansData;
    this.jeggingsAns = jeggingsData;
    this.skirtAns = skirtData;
    this.trousersAns = trousersData;
    this.flatsFootAns = flatsFootData;
    this.casualFootAns = casualFootData;
    this.heelsFootAns = heelsFootData;
    this.sportswearAns = sportswearData;
    this.innerwearAns = innerwearData;
  }

  viewAnswerAlert() {
    let message = ` All Data
    Top Answers : ${this.topsAns},
    Kurthi Answers : ${this.kurthisAns},
    Saree Answers : ${this.sareeAns},
    Inner Answers : ${this.innerwearAns}.
    `;
    alert(message);
  }

  setFemaleData(){
    this.femaleData.tops = {};
    this.femaleData.tops.size = this.topsAns[0] === ''?'null':this.topsAns[0];
    this.femaleData.tops.price = this.topsAns[1] === ''?'null':this.topsAns[1];
    this.femaleData.tops.pattern = this.topsAns[2] === ''?'null':this.topsAns[2];


    this.femaleData.kurthis = {};
    this.femaleData.kurthis.size = this.kurthisAns[0] === ''?'null':this.kurthisAns[0];
    this.femaleData.kurthis.price = this.kurthisAns[1] === ''?'null':this.kurthisAns[1];
    this.femaleData.kurthis.pattern = this.kurthisAns[2] === ''?'null':this.kurthisAns[2];

    this.femaleData.saree = {};
    this.femaleData.saree.price = this.topsAns[0] === ''?'null':this.topsAns[0];
    this.femaleData.saree.pattern = this.topsAns[1] === ''?'null':this.topsAns[1];


    this.femaleData.jackets = {};
    this.femaleData.jackets.size = this.jacketsAns[0] === ''?'null':this.jacketsAns[0];
    this.femaleData.jackets.price = this.jacketsAns[1] === ''?'null':this.jacketsAns[1];
    this.femaleData.jackets.pattern = this.jacketsAns[2] === ''?'null':this.jacketsAns[2];

    this.femaleData.blazersAndWhiteCoats = {};
    this.femaleData.blazersAndWhiteCoats.size = this.blazzersAns[0] === ''?'null':this.blazzersAns[0];
    this.femaleData.blazersAndWhiteCoats.price = this.blazzersAns[1] === ''?'null':this.blazzersAns[1];
    this.femaleData.blazersAndWhiteCoats.pattern = this.blazzersAns[2] === ''?'null':this.blazzersAns[2];

    this.femaleData.lehanga = {};
    this.femaleData.lehanga.type = this.lehangaAns[0] === ''?'null':this.lehangaAns[0];
    this.femaleData.lehanga.size = this.lehangaAns[1] === ''?'null':this.lehangaAns[1];
    this.femaleData.lehanga.price = this.lehangaAns[2] === ''?'null':this.lehangaAns[2];
    this.femaleData.lehanga.pattern = this.lehangaAns[3] === ''?'null':this.lehangaAns[3];

    this.femaleData.sweatShirts = {};
    this.femaleData.sweatShirts.size = this.sweatshirtsAns[0] === ''?'null':this.sweatshirtsAns[0];
    this.femaleData.sweatShirts.price = this.sweatshirtsAns[1] === ''?'null':this.sweatshirtsAns[1];
    this.femaleData.sweatShirts.pattern = this.sweatshirtsAns[2] === ''?'null':this.sweatshirtsAns[2];

    this.femaleData.sweaters = {};
    this.femaleData.sweaters.size = this.sweatersAns[0] === ''?'null':this.sweatersAns[0];
    this.femaleData.sweaters.price = this.sweatersAns[1] === ''?'null':this.sweatersAns[1];
    this.femaleData.sweaters.pattern = this.sweatersAns[2] === ''?'null':this.sweatersAns[2];

    this.femaleData.leggings = {};
    this.femaleData.leggings.size = this.leggingsAns[0] === ''?'null':this.leggingsAns[0];
    this.femaleData.leggings.price = this.leggingsAns[1] === ''?'null':this.leggingsAns[1];
    this.femaleData.leggings.pattern = this.leggingsAns[2] === ''?'null':this.leggingsAns[2];
    this.femaleData.leggings.fabricType = this.leggingsAns[3] === ''?'null':this.leggingsAns[3];

    this.femaleData.jeans = {};
    this.femaleData.jeans.size = this.jeansAns[0] === ''?'null':this.jeansAns[0];
    this.femaleData.jeans.price = this.jeansAns[1] === ''?'null':this.jeansAns[1];
    this.femaleData.jeans.pattern = this.jeansAns[2] === ''?'null':this.jeansAns[2];
    this.femaleData.jeans.waistRaise = this.jeansAns[3] === ''?'null':this.jeansAns[3];

    this.femaleData.jeggings = {};
    this.femaleData.jeggings.size = this.jeggingsAns[0] === ''?'null':this.jeggingsAns[0];
    this.femaleData.jeggings.price = this.jeggingsAns[1] === ''?'null':this.jeggingsAns[1];
    this.femaleData.jeggings.pattern = this.jeggingsAns[2] === ''?'null':this.jeggingsAns[2];
    this.femaleData.jeggings.fabricType = this.jeggingsAns[3] === ''?'null':this.jeggingsAns[3];

    this.femaleData.skirts = {};
    this.femaleData.skirts.size = this.skirtAns[0] === ''?'null':this.skirtAns[0];
    this.femaleData.skirts.price = this.skirtAns[1] === ''?'null':this.skirtAns[1];
    this.femaleData.skirts.pattern = this.skirtAns[2] === ''?'null':this.skirtAns[2];
    this.femaleData.skirts.fabric = this.skirtAns[3] === ''?'null':this.skirtAns[3];
    this.femaleData.skirts.fabricType = this.skirtAns[4] === ''?'null':this.skirtAns[4];
    this.femaleData.skirts.skirtType = this.skirtAns[5] === ''?'null':this.skirtAns[5];

    this.femaleData.trousers = {};
    this.femaleData.trousers.size = this.trousersAns[0] === ''?'null':this.trousersAns[0];
    this.femaleData.trousers.price = this.trousersAns[1] === ''?'null':this.trousersAns[1];
    this.femaleData.trousers.pattern = this.trousersAns[2] === ''?'null':this.trousersAns[2];
    this.femaleData.trousers.fit = this.trousersAns[3] === ''?'null':this.trousersAns[3];
    this.femaleData.trousers.fabric = this.trousersAns[4] === ''?'null':this.trousersAns[4];
    this.femaleData.trousers.trouserType = this.trousersAns[5] === ''?'null':this.trousersAns[5];
    this.femaleData.trousers.typeOfPleat = this.trousersAns[6] === ''?'null':this.trousersAns[6];
    this.femaleData.trousers.waistRaise = this.trousersAns[7] === ''?'null':this.trousersAns[7];

    this.femaleData.sportswear = {};
    this.femaleData.sportswear.type = this.sportswearAns[0] === ''?'null':this.sportswearAns[0];

    this.femaleData.innerwear = {};
    this.femaleData.innerwear.type = this.innerwearAns[0] === ''?'null':this.innerwearAns[0];
    this.femaleData.innerwear.size = this.innerwearAns[1] === ''?'null':this.innerwearAns[1];

  }

  setFemaleCommonQuestions(data:any){
    this.femaleData.commonQuestions = data; 

  }

  saveFemaleData(){

    var header = {
      headers: new HttpHeaders()
      // .set('Authorization',  `bearer ${(this.authService.getToken())}`)
      .set('Content-Type','application/json')
    }
    this.femaleData.userId = this.uid;
    console.log(JSON.parse(JSON.stringify(this.femaleData)));
    return this.http.post(this.apiUrl+"fq",JSON.parse(JSON.stringify(this.femaleData)),header);
  }

}
