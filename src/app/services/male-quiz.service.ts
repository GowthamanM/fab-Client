import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class MaleQuizService {

  selectionArray:any = [];
  selectedQuiz:any = [];
  maleData:any = {};
  shirtAns:any = ['','','','',''];
  pantAns:any = ['','','','',''];
  innerwearAns:any = ['','','',''];
  shortsAns:any = ['','','','',''];
  blazerAns:any = [];
  footwearAns:any = [];
  uid:any;

  apiUrl:string;
  constructor(private http:HttpClient,
    private credentials:CredentialService,
    private authService:AuthService) {
      this.apiUrl = this.credentials.apiUrl;
      this.authService.decodeToken().subscribe(data=>{
        this.uid = JSON.parse(JSON.stringify(data)).payload.id;
        console.log(this.uid);
      }) 
    }

  Shirt:any = [
    [
      'Shirt','Size (Chest)', ['39','40','41','42','43']
    ],
    [
      'Shirt','Size', ['S','M','L','XL','XXL']
    ],
    [
      
      'Shirt','Fit', ['Skinny'	,'Slim'	,'Regular'	,'Boot cut'	,'Flared'	,'Jogger'	,'Relaxecd fit'	,'Straight' 	,'Super skinny fit'	,'Tappered fit']
    ],
    [
      'Shirt','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000']
    ],
    [
      'Shirt','Pattern', ['Solid','Printed','Checked','Stripes']
    ],
    [
      'Shirt','Body Type', ['Slim','Average','Athletic','Husky']
    ],
    [
      'Shirt','Your Preference', ['Slim','Regular']
    ],
    [
      'Shirt','Color', ['Red','Blue','Green','Black']
    ],
  ];

  Pant:any = [
    [
      'Pant','Size', ['28 - 30','30 - 32','32 - 34','34 - 36','36 - 38']
    ],
    [
      'Pant','Pattern', ['Torn','Regular']
    ],
    [
      'Pant','Fit', ['Skinny','Slim','Regular','Boot cut','Flared','Jogger','Relaxed fit','Straight','Super skinny fit','Tappered fit']
    ],
    [
      'Pant','Cotton', ['Regular','Slim','Tappered','Relaxed fit','Straight','Super skinny fit']
    ],
    [
      'Shirt','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000']
    ]
  ];

  Innerwear:any = [
    [
      'Innerwear','Type', ['Briefs','Trunks','Boxer briefs','Inner boxers']
    ],
    [
      'Innerwear','Vest', ['Sleeve less','Sleeved vests','Gym Vests']
    ]
  ];

  Footwear:any = [
    [
      'Footwear','Size', ['6','7','8','9','10','11']
    ]
  ];

  Shorts:any = [
    [
      'Shorts','Size', ['28 - 30','30 - 32','32 - 34','34 - 36','36 - 38']
    ],
    [
      'Shorts','Pattern', ['Torn','Regular']
    ],
    [
      'Shorts','Fit', ['Skinny','Slim','Regular','Boot cut','Flared','Jogger','Relaxed fit','Straight','Super skinny fit','Tappered fit']
    ],
    [
      'Shorts','Cotton', ['Regular','Slim','Tappered','Relaxed fit','Straight','Super skinny fit']
    ],
    [
      'Shorts','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000']
    ]
  ];

  Blazer:any = [
    [
      'Blazer','Size (Chest)', ['39','40','41','42','43']
    ],
    [
      'Blazer','Size', ['S','M','L','XL','XXL']
    ],
    [
      'Blazer','Fit', ['Skinny'	,'Slim'	,'Regular'	,'Boot cut'	,'Flared'	,'Jogger'	,'Relaxecd fit'	,'Straight' 	,'Super skinny fit'	,'Tappered fit']
    ],
    [
      'Blazer','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000']
    ],
    [
      'Blazer','Pattern', ['Solid','Printed','Checked','Stripes']
    ]
  ];

  allQuiz:any = [this.Shirt, this.Pant, this.Innerwear, this.Shorts, this.Blazer, this.Footwear];

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

  setAnswers(shirtData:any, pantData:any, innerwearData:any, shorts:any ,blazer:any,footwear:any) {
    this.shirtAns = shirtData;
    this.pantAns = pantData;
    this.innerwearAns = innerwearData;
    this.shortsAns = shorts;
    this.blazerAns = blazer;
    this.footwearAns = footwear;
  }

  viewAllAnswers() {
    console.log("Shirt Answers");
    console.log(this.shirtAns);
    console.log("Pant Answers");
    console.log(this.pantAns);
    console.log("InnerWear Answers");
    console.log(this.innerwearAns);
  }

  viewAnswerAlert() {
    this.setMaleData(); 
    console.log(JSON.parse(JSON.stringify(this.maleData)));
  }

  setMaleData(){
    this.maleData.shirts = {};
    this.maleData.shirts.chestSize = this.shirtAns[0] === ''?'null':this.shirtAns[0];
    this.maleData.shirts.size = this.shirtAns[1] === ''?'null':this.shirtAns[1];
    this.maleData.shirts.fit = this.shirtAns[2] === ''?'null':this.shirtAns[2];
    this.maleData.shirts.price = this.shirtAns[3] === ''?'null':this.shirtAns[3];
    this.maleData.shirts.pattern = this.shirtAns[4] === ''?'null':this.shirtAns[4];
    this.maleData.shirts.bodyType = this.shirtAns[5] === ''?'null':this.shirtAns[5];
    this.maleData.shirts.yourShirtPreference = this.shirtAns[6] === ''?'null':this.shirtAns[6];
    this.maleData.color = this.shirtAns[7] === ''?'null':this.shirtAns[7];

    this.maleData.innerwear={};
    this.maleData.innerwear.itype = this.innerwearAns[0] === ''?'null':this.innerwearAns[0];
    this.maleData.innerwear.vest = this.innerwearAns[1] === ''?'null':this.innerwearAns[1];

    this.maleData.pants = {};
    this.maleData.pants.size = this.pantAns[0] === ''?'null':this.pantAns[0]; 
    this.maleData.pants.pattern = this.pantAns[1] === ''?'null':this.pantAns[1]; 
    this.maleData.pants.fit = this.pantAns[2] === ''?'null':this.pantAns[2]; 
    this.maleData.pants.cotton = this.pantAns[3] === ''?'null':this.pantAns[3]; 
    this.maleData.pants.price = this.pantAns[4] === ''?'null':this.pantAns[4];

    this.maleData.shorts = {};
    this.maleData.shorts.size = this.shortsAns[0] === ''?'null':this.shortsAns[0]; 
    this.maleData.shorts.pattern = this.shortsAns[1] === ''?'null':this.shortsAns[1]; 
    this.maleData.shorts.fit = this.shortsAns[2] === ''?'null':this.shortsAns[2]; 
    this.maleData.shorts.cotton = this.shortsAns[3] === ''?'null':this.shortsAns[3]; 
    this.maleData.shorts.price = this.shortsAns[4] === ''?'null':this.shortsAns[4]; 

    this.maleData.blazers = {};
    this.maleData.blazers.chestSize = this.blazerAns[0] === ''?'null':this.blazerAns[0];
    this.maleData.blazers.size = this.blazerAns[1] === ''?'null':this.blazerAns[1];
    this.maleData.blazers.fit = this.blazerAns[2] === ''?'null':this.blazerAns[2];
    this.maleData.blazers.price = this.blazerAns[3] === ''?'null':this.blazerAns[3];
    this.maleData.blazers.pattern = this.blazerAns[4] === ''?'null':this.blazerAns[4];

    this.maleData.footwear={};
    this.maleData.footwear.size = this.footwearAns[0] === ''?'null':this.footwearAns[0];

  }
  
  setMaleCommonQuestions(data:any){
    this.maleData.commonQuestions = data; 

  }

  getUid(){

    
  }




  saveMaleData(){
    this.getUid();
    
    var header = {
      headers: new HttpHeaders()
      .set('Authorization',  `bearer ${(this.authService.getToken())}`)
    } 
    this.maleData.userId = this.uid;
    console.log(JSON.parse(JSON.stringify(this.maleData)));
    return this.http.post(this.apiUrl+"mq",JSON.parse(JSON.stringify(this.maleData)));
  }
}
