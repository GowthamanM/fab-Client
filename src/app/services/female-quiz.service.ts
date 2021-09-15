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
      'Tops','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Tops','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Kurthis:any = [
    [
      'Kurthis','Size', ['XS','S','M','L','XL','XXL','XXXL','XXXXL']
    ],
    [
      'Kurthis','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Kurthis','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Kurthis','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Saree:any = [
    [
      'Saree','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Saree','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Saree','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Jackets:any = [
    [
      'Jackets','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Jackets','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Jackets','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Jackets','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Blazers:any = [
    [
      'Blazers','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Blazers','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Blazers','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Blazers','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Lehanga:any = [
    [
      'Lehanga','Type', [['Stitched','stitched'],['Unstitched','unstitched'],['Semi Stitched','semiStitched']]
    ],
    [
      'Lehanga','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Lehanga','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Lehanga','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Lehanga','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Sweatshirts:any = [
    [
      'Sweatshirts','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Sweatshirts','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Sweatshirts','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Sweatshirts','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Sweaters:any = [
    [
      'Sweaters','Size', ['XS','S','M','L','XL','XXL']
    ],
    [
      'Sweaters','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Sweaters','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Sweaters','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Leggings:any = [
    [
      'Leggings','Size', ['S','M','L','XL','XXL','XXXL']
    ],
    [
      'Leggings','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Leggings','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Leggings','Fabric Type', [['Acrylic','acrylic'],['Model','model'],['Cotton','cotton'],['Elastane','elastane'],['Nylon','nylon'],['Organic Cotton','organicCotton'],['Synthetic','synthetic'],['Viscose Rayon','viscoseRayon']]
    ],
    [
      'Leggings','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
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
      'Jeans','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Jeans','Waist Rise', [['High Raise','highRaise'],['Mid Raise','midRaise'],['Low Raise','lowRaise']]
    ],
    [
      'Jeans','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
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
      'Jeggings','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Jeggings','Fabric Type', [['Acrylic','acrylic'],['Model','model'],['Cotton','cotton'],['Elastane','elastane'],['Nylon','nylon'],['Organic Cotton','organicCotton'],['Synthetic','synthetic'],['Viscose Rayon','viscoseRayon']]
    ],
    [
      'Jeggings','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
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
      'Skirts','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Skirts','Fabric', [['Cotton Blend','cottonBlend'],['Linen','linen'],['Liva','liva'],['Modal','modal'],['Nylon','nylon'], ['Poly silk','polySilk'],['Polyester','polyester'],['Pure silk','pureSilk'],['Pure Cotton','pureCotton'],['Silk Blend','silkBlend'],['Viscouse Rayon','viscoseRayon']]
    ],
    [
      'Skirts','Fabric Type', [['Chiffon','chiffon'],['Crepe','crepe'],	['Georgette','georgette'],	['Jacquard','jacquard'],	['Linen','linen'],	['Liva','liva'],	['Net','net'], ['Satin','satin'],	['Velvet','velvet']]
    ],
    [
      'Skirts','Skirt Type', [['Knitted','knitted'],['woven','woven'],	['Not Specific','notSpecific']]
    ],
    [
      'Skirts','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
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
      'Trousers','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes']]
    ],
    [
      'Trousers','Fit', [['Flared','flared'],	['Loose fit','looseFit'],	['Mom fit','momFit'],	['Regular fit','regularFit'],	['Skinny fit','skinnyFit'],	['Slim fit','slimFit'],	['Straight fit','straightFit'],	['Tapered fit','taperedFit'],	['Not specific','notSpecific']]
    ],
    [
      'Trousers','Fabric', [['cotton','cotton'],	['denim','denim'],	['linen','linen'],	['liva','liva'],	['livaeco','livaeco'],	['modal','modal'],	['nylon','nylon'],	['organic','organic'],	['polysilk','polysilk'],	['polyester','polyester'],	['silk','silk'],	['viscose','viscose'], ['rayon','rayon'],	['wool','wool']]
    ],
    [
      'Trousers','Trouser Type', [['Anti fit','antiFit'],	['bootcut','bootcut'],	['cargos','cargos'],	['chinos','chinos'],	['cigerrete trousers','cigerreteTrousers'],	['culottes','culottes'],	['drop crotch trousers','dropCrotchTrousers'],	['formal trousers','formalTrousers'],	['jodpuris','jodpuris'],	['joggers','joggers'],	['parallel trousers','parallelTrousers'],	['peg trousers','pegTrousers'],	['regular trousers','regularTrousers'], ['not specific','notSpecific']]
    ],
    [
      'Trousers','Type of Pleat', [['Flat Front','flatFront'],['Pleated','pleated']]
    ],
    [
      'Trousers','Waist Rise', [['High Raise','highRaise'],['Mid Raise','midRaise'],['Low Raise','lowRaise']]
    ],
    [
      'Trousers','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  FlatsFoot:any = [
    [
      'FlatsFoot','Ankle height', [['High-top','highTop'],	['Mid-top','midTop'],	['Regular','regular'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Fastening and back detail', [['Ankle loop','ankleLoop'],	['Backstrap','backstrap'],	['Buckle','buckle'],	['Lace-ups','laceUps'],	['No back strap','noBackStrap'],	['Slip-on','slipOn'],	['Velcro','velcro'],	['Zip','zip'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Material', [['Canvas','canvas'],	['Fabric','fabric'],	['Faux fur','fauxFur'],	['Lace','lace'],	['Leather','leather'],	['Mesh','mesh'],	['PU','pu'],	['Plastic','plastic'],	['Rubber','rubber'],	['Suede','suede'],	['Synthetic','synthetic'],	['Synthetic Patent','syntheticPatent'],	['Synthetic Suede','syntheticSuede'],	['Velvet','velvet'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Occasion', [['Casual','casual'],	['Ethnic','ethnic'],	['Party','party'],	['Work','work'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Ornamentation', [['Bows','bows'],	['Buckles','buckles'],	['Embroidered','embroidered'],	['Ethinic-embellished','ethinicEmbellished'],	['Laser cuts','laserCuts'],	['other','other'],	['Tassels','tassels'],	['western-embellished','westernEmbellished'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Pattern', [['Colour blocked','colourBlocked'],	['Embellished','embellished'],	['Printed','printed'],	['Solid','solid'],	['Striped','striped'],	['Textured','textured'],	['Woven design','wovenDesign'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Size', ['Euro 15','UK-9.5']
    ],
    [
      'FlatsFoot','Sole Material', [['croslite','croslite'],	['Eva','eva'],	['Leather','leather'],	['Neolite','neolite'],	['PU','pu'],	['PVC','pvc'],	['Phylon','phylon'],	['Resin','resin'],	['Rubber','rubber'],	['Synthetic','synthetic'],	['TPR','tpr'],	['TPU','tpu'],	['Tunit','tUnit'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Toe shape', [['Open Toe','openToe'],	['Peep Toe','peepToe'],	['Pointed Toe','pointedToe'],	['Round Toe','roundToe'],	['Square Toe','squareToe'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Type', [['Ballerinas','ballerinas'],	['Gladiators','gladiators'],	['Mojaris','mojaris'],	['Mules','mules'],	['One toe Flats','oneToeFlats'],	['Open toe flats','openToeFlats'],	['T-strap flats','tStrapFlats'],	['Not specific','notSpecific']]
    ],
    [
      'FlatsFoot','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  CasualFoot:any = [
    [
      'CasualFoot','Ankle height', [['High-top','highTop'],	['Mid-top','midTop'],	['Regular','regular'],	['Not specific','notSpecific']]
    ],
    [
      'CasualFoot','Fastening and back detail', [['Ankle loop','ankleLoop'],	['Backstrap','backstrap'],	['Buckle','buckle'],	['Lace-ups','laceUps'],	['No back strap','noBackStrap'],	['Slip-on','slipOn'],	['Velcro','velcro'],	['Zip','zip'],	['Not specific','notSpecific']]
    ],
    [
      'CasualFoot','Material', [['Canvas','canvas'],	['Fabric','fabric'],	['Faux fur','fauxFur'],	['Lace','lace'],	['Leather','leather'],	['Mesh','mesh'],	['PU','pu'],	['Plastic','plastic'],	['Rubber','rubber'],	['Suede','suede'],	['Synthetic','synthetic'],	['Synthetic Patent','syntheticPatent'],	['Synthetic Suede','syntheticSuede'],	['Velvet','velvet'],	['Not specific','notSpecific']]
    ],
    [
      'CasualFoot','Pattern', [['Colour blocked','colourBlocked'],	['Embellished','embellished'],	['Printed','printed'],	['Solid','solid'],	['Striped','striped'],	['Textured','textured'],	['Woven design','wovenDesign'],	['Not specific','notSpecific']]
    ],
    [
      'CasualFoot','Size', ['Euro 15','UK-9.5']
    ],
    [
      'CasualFoot','Toe shape', [['Open Toe','openToe'],	['Peep Toe','peepToe'],	['Pointed Toe','pointedToe'],	['Round Toe','roundToe'],	['Square Toe','squareToe'],	['Not specific','notSpecific']]
    ],
    [
      'CasualFoot','Type', [['Boat Shoes','boatShoes'],	['Brogues','brogues'],	['Clogs','clogs'],	['Derbys','derbys'],	['Driving shoes','drivingShoes'],	['Espadrilles','espadrilles'],	['Flat boots','flatBoots'],	['Flat forms','flatForms'],	['Loafers','loafers'],	['Mojaris','mojaris'],	['Monks','monks'],	 ['Mule sneakers','muleSneakers'],	['Mules','mules'], 	['Oxfords','oxfords'],	['Skate Shoes','skateShoes'],	['slip-on sneakers','slipOnSneakers'],	['sneakers','sneakers'],	['Trecking Shoes','treckingShoes'],	['Not specific','notSpecific']]
    ],
    [
      'CasualFoot','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  HeelsFoot:any = [
    [
      'HeelsFoot','Ankle height', [['High-top','highTop'],	['Mid-top','midTop'],	['Regular','regular'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Fastening and back detail', [['Ankle loop','ankleLoop'],	['Backstrap','backstrap'], ['Closed Back','closedBack'],	['Lace-ups','laceUps'],	['Open back strap','openBackStrap'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Heel Height (inches)', ['1',	'1.5',	'2',	'2.5',	'3',	'3.5',	'4',	'4.5',	'5',	'5.5',	'6',	'Not specific']
    ],
    [
      'HeelsFoot','Heel Type', [['Block','block'],	['Comfort','comfort'],	['Flatform','flatForm'],	['Kitten','kitten'],	['Platform','platform'],	['Slim','slim'],	['Stiletoo','stiletoo'],	['Wedge','wedge'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Material', [['Canvas','canvas'],	['Fabric','fabric'],	['Faux fur','fauxFur'],	['Lace','lace'],	['Leather','leather'],	['Mesh','mesh'],	['PU','pu'],	['Plastic','plastic'],	['Rubber','rubber'],	['Suede','suede'],	['Synthetic','synthetic'],	['Synthetic Patent','syntheticPatent'],	['Synthetic Suede','syntheticSuede'],	['Velvet','velvet'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Occasion', [['Casual','casual'],	['Ethnic','ethnic'],	['Party','party'],	['Work','work'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Ornamentation', [['Bows','bows'],	['Buckles','buckles'],	['Embroidered','embroidered'],	['Ethinic-embellished','ethinicEmbellished'],	['Laser cuts','laserCuts'],	['other','other'],	['Tassels','tassels'],	['western-embellished','westernEmbellished'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Pattern', [['Colour blocked','colourBlocked'],	['Embellished','embellished'],	['Printed','printed'],	['Solid','solid'],	['Striped','striped'],	['Textured','textured'],	['Woven design','wovenDesign'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Size', ['UK2',	'UK2.5',	'UK3',	'UK3.5',	'UK4',	'UK5',	'UK6',	'UK6.5',	'UK7',	'UK7.5',	'UK8',	'EURO33',	'EURO33.5',	'EURO34',	'EURO34.5',	'EURO36',	'EURO36.5',	'EURO37',	'EURO37.5',	'EURO38',	'EURO38.5',	'EURO39',	'EURO39.5',	'EURO40',	'EURO40.5']
    ],
    [
      'HeelsFoot','Sole Material', [['croslite','croslite'],	['Eva','eva'],	['Leather','leather'],	['Neolite','neolite'],	['PU','pu'],	['PVC','pvc'],	['Phylon','phylon'],	['Resin','resin'],	['Rubber','rubber'],	['Synthetic','synthetic'],	['TPR','tpr'],	['TPU','tpu'],	['Tunit','tUnit'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Toe shape', [['Open Toe','openToe'],	['Peep Toe','peepToe'],	['Pointed Toe','pointedToe'],	['Round Toe','roundToe'],	['Square Toe','squareToe'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Type', [['Sandals','sandals'],	['Pumps','pumps'],	['Heeled boots','heeledBoots'],	['Gladiators','gladiators'],	['Mules','mules'],	['Peep toes','peepToes'],	['Not specific','notSpecific']]
    ],
    [
      'HeelsFoot','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  Sportswear:any = [
    [
      'Sportswear','Type', [['Tops','tops'],	['Capris','capris'],	['Shorts','shorts'],	['Sweatshirts','sweatShirts'],	['T-shirts','tShirts'],	['Tracksuits','tracksuits']]
    ],
    [
      'Sportswear','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
  ];

  InnerWear:any = [
    [
      'InnerWear','Type', [['Brassuire','brassuire'],	['Panties','panties'],	['Lingere set','lingereSet'],	['Camisoles','camisoles'],	['shape wear','shapeWear'],	['thermal tops','thermalTops'],	['thermal bottoms','thermalBottoms'],	['Slips','slips'],	['Baby doll','babyDoll']]
    ],
    [
      'InnerWear','Size', ['32B to 40C',	's to XXL',	'S to L',	's to XXL',	's to XXL',	'XS to XXL',	'S to XL',	'S to L']
    ],
    [
      'InnerWear','Color', [['Red','red'],['Blue','blue'],['Green','green'],['Black','black']]
    ],
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
    this.femaleData.tops.color = this.topsAns[3] === ''?'null':this.topsAns[3];


    this.femaleData.kurthis = {};
    this.femaleData.kurthis.size = this.kurthisAns[0] === ''?'null':this.kurthisAns[0];
    this.femaleData.kurthis.price = this.kurthisAns[1] === ''?'null':this.kurthisAns[1];
    this.femaleData.kurthis.pattern = this.kurthisAns[2] === ''?'null':this.kurthisAns[2];
    this.femaleData.kurthis.color = this.kurthisAns[3] === ''?'null':this.kurthisAns[3];

    this.femaleData.saree = {};
    this.femaleData.saree.price = this.topsAns[0] === ''?'null':this.topsAns[0];
    this.femaleData.saree.pattern = this.topsAns[1] === ''?'null':this.topsAns[1];
    this.femaleData.saree.color = this.topsAns[2] === ''?'null':this.topsAns[2];

    this.femaleData.jackets = {};
    this.femaleData.jackets.size = this.jacketsAns[0] === ''?'null':this.jacketsAns[0];
    this.femaleData.jackets.price = this.jacketsAns[1] === ''?'null':this.jacketsAns[1];
    this.femaleData.jackets.pattern = this.jacketsAns[2] === ''?'null':this.jacketsAns[2];
    this.femaleData.jackets.color = this.jacketsAns[3] === ''?'null':this.jacketsAns[3];

    this.femaleData.blazersAndWhiteCoats = {};
    this.femaleData.blazersAndWhiteCoats.size = this.blazzersAns[0] === ''?'null':this.blazzersAns[0];
    this.femaleData.blazersAndWhiteCoats.price = this.blazzersAns[1] === ''?'null':this.blazzersAns[1];
    this.femaleData.blazersAndWhiteCoats.pattern = this.blazzersAns[2] === ''?'null':this.blazzersAns[2];
    this.femaleData.blazersAndWhiteCoats.color = this.blazzersAns[3] === ''?'null':this.blazzersAns[3];

    this.femaleData.lehanga = {};
    this.femaleData.lehanga.type = this.lehangaAns[0] === ''?'null':this.lehangaAns[0];
    this.femaleData.lehanga.size = this.lehangaAns[1] === ''?'null':this.lehangaAns[1];
    this.femaleData.lehanga.price = this.lehangaAns[2] === ''?'null':this.lehangaAns[2];
    this.femaleData.lehanga.pattern = this.lehangaAns[3] === ''?'null':this.lehangaAns[3];
    this.femaleData.lehanga.color = this.lehangaAns[4] === ''?'null':this.lehangaAns[4];

    this.femaleData.sweatShirts = {};
    this.femaleData.sweatShirts.size = this.sweatshirtsAns[0] === ''?'null':this.sweatshirtsAns[0];
    this.femaleData.sweatShirts.price = this.sweatshirtsAns[1] === ''?'null':this.sweatshirtsAns[1];
    this.femaleData.sweatShirts.pattern = this.sweatshirtsAns[2] === ''?'null':this.sweatshirtsAns[2];
    this.femaleData.sweatShirts.color = this.sweatshirtsAns[3] === ''?'null':this.sweatshirtsAns[3];

    this.femaleData.sweaters = {};
    this.femaleData.sweaters.size = this.sweatersAns[0] === ''?'null':this.sweatersAns[0];
    this.femaleData.sweaters.price = this.sweatersAns[1] === ''?'null':this.sweatersAns[1];
    this.femaleData.sweaters.pattern = this.sweatersAns[2] === ''?'null':this.sweatersAns[2];
    this.femaleData.sweaters.color = this.sweatersAns[3] === ''?'null':this.sweatersAns[3];

    this.femaleData.leggings = {};
    this.femaleData.leggings.size = this.leggingsAns[0] === ''?'null':this.leggingsAns[0];
    this.femaleData.leggings.price = this.leggingsAns[1] === ''?'null':this.leggingsAns[1];
    this.femaleData.leggings.pattern = this.leggingsAns[2] === ''?'null':this.leggingsAns[2];
    this.femaleData.leggings.fabricType = this.leggingsAns[3] === ''?'null':this.leggingsAns[3];
    this.femaleData.leggings.color = this.leggingsAns[4] === ''?'null':this.leggingsAns[4];

    this.femaleData.jeans = {};
    this.femaleData.jeans.size = this.jeansAns[0] === ''?'null':this.jeansAns[0];
    this.femaleData.jeans.price = this.jeansAns[1] === ''?'null':this.jeansAns[1];
    this.femaleData.jeans.pattern = this.jeansAns[2] === ''?'null':this.jeansAns[2];
    this.femaleData.jeans.waistRaise = this.jeansAns[3] === ''?'null':this.jeansAns[3];
    this.femaleData.jeans.color = this.jeansAns[4] === ''?'null':this.jeansAns[4];

    this.femaleData.jeggings = {};
    this.femaleData.jeggings.size = this.jeggingsAns[0] === ''?'null':this.jeggingsAns[0];
    this.femaleData.jeggings.price = this.jeggingsAns[1] === ''?'null':this.jeggingsAns[1];
    this.femaleData.jeggings.pattern = this.jeggingsAns[2] === ''?'null':this.jeggingsAns[2];
    this.femaleData.jeggings.fabricType = this.jeggingsAns[3] === ''?'null':this.jeggingsAns[3];
    this.femaleData.jeggings.color = this.jeggingsAns[4] === ''?'null':this.jeggingsAns[4];

    this.femaleData.skirts = {};
    this.femaleData.skirts.size = this.skirtAns[0] === ''?'null':this.skirtAns[0];
    this.femaleData.skirts.price = this.skirtAns[1] === ''?'null':this.skirtAns[1];
    this.femaleData.skirts.pattern = this.skirtAns[2] === ''?'null':this.skirtAns[2];
    this.femaleData.skirts.fabric = this.skirtAns[3] === ''?'null':this.skirtAns[3];
    this.femaleData.skirts.fabricType = this.skirtAns[4] === ''?'null':this.skirtAns[4];
    this.femaleData.skirts.skirtType = this.skirtAns[5] === ''?'null':this.skirtAns[5];
    this.femaleData.skirts.color = this.skirtAns[6] === ''?'null':this.skirtAns[6];

    this.femaleData.trousers = {};
    this.femaleData.trousers.size = this.trousersAns[0] === ''?'null':this.trousersAns[0];
    this.femaleData.trousers.price = this.trousersAns[1] === ''?'null':this.trousersAns[1];
    this.femaleData.trousers.pattern = this.trousersAns[2] === ''?'null':this.trousersAns[2];
    this.femaleData.trousers.fit = this.trousersAns[3] === ''?'null':this.trousersAns[3];
    this.femaleData.trousers.fabric = this.trousersAns[4] === ''?'null':this.trousersAns[4];
    this.femaleData.trousers.trouserType = this.trousersAns[5] === ''?'null':this.trousersAns[5];
    this.femaleData.trousers.typeOfPleat = this.trousersAns[6] === ''?'null':this.trousersAns[6];
    this.femaleData.trousers.waistRaise = this.trousersAns[7] === ''?'null':this.trousersAns[7];
    this.femaleData.trousers.color = this.trousersAns[8] === ''?'null':this.trousersAns[8];

    this.femaleData.sportswear = {};
    this.femaleData.sportswear.type = this.sportswearAns[0] === ''?'null':this.sportswearAns[0];
    this.femaleData.sportswear.color = this.sportswearAns[1] === ''?'null':this.sportswearAns[1];

    this.femaleData.innerwear = {};
    this.femaleData.innerwear.type = this.innerwearAns[0] === ''?'null':this.innerwearAns[0];
    this.femaleData.innerwear.size = this.innerwearAns[1] === ''?'null':this.innerwearAns[1];
    this.femaleData.innerwear.color = this.innerwearAns[2] === ''?'null':this.innerwearAns[2];

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
