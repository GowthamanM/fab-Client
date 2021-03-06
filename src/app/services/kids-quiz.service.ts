import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from './credential.service';

@Injectable({
  providedIn: 'root'
})
export class KidsQuizService {

  selectionArray:any = [];
  selectedQuiz:any = [];

  uid:any;
  apiUrl:string;
  kidsData:any = {};

  bodysuitAns:any = ['','','',''];
  tshirtAns:any = ['','','',''];
  dressAns:any = ['','','',''];
  clothingsetAns:any = ['','','',''];
  shirtAns:any = ['','','',''];
  shortsAns:any = ['','','',''];
  kurthisAns:any = ['','','',''];

  constructor(private credentials:CredentialService,
    private authService:AuthService,
    private http:HttpClient) {
    this.apiUrl = this.credentials.apiUrl;
      this.authService.decodeToken().subscribe(data=>{
        this.uid = JSON.parse(JSON.stringify(data)).payload.id;
        console.log(this.uid);
      })
  }

  BodySuit:any = [
    [
      'BodySuit','Size', ['New Born', '9-12 months']
    ],
    [
      'BodySuit','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'BodySuit','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'BodySuit','Color',[['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  TShirt:any = [
    [
      'TShirt','Size', ['6-12 months', '6-7 years']
    ],
    [
      'TShirt','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'TShirt','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'TShirt','Color', [['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  Dress:any = [
    [
      'Dress','Size', ['6-12 months', '24-36 months']
    ],
    [
      'Dress','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'Dress','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'Dress','Color', [['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  ClothingSet:any = [
    [
      'ClothingSet','Size', ['New Born', '3-4 years']
    ],
    [
      'ClothingSet','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'ClothingSet','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'ClothingSet','Color', [['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  Shirt:any = [
    [
      'Shirt','Size', ['0-6 months', '3-4 years']
    ],
    [
      'Shirt','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'Shirt','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'Shirt','Color', [['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  Shorts:any = [
    [
      'Shorts','Size', ['0-6 months', '3-4 years']
    ],
    [
      'Shorts','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'Shorts','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'Shorts','Color', [['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  Kurthis:any = [
    [
      'Kurthis','Size', ['3-6 months', '13-14 years']
    ],
    [
      'Kurthis','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not Specific']
    ],
    [
      'Kurthis','Pattern', [['Solid','solid'],['Printed','printed'],['Checked','checked'],['Stripes','stripes'],['Not Specific','notSpecific']]
    ],
    [
      'Kurthis','Color', [['Black','black'],['Blue','blue'],['Brown','brown'],['Green','green'],['Grey','grey'],['Khaki','khaki'],
      ['Light Blue','light blue'],['Navy','navy'],['Olive','olive'],['Pink','pink'],['Purple','purple'],['Red','red'],['Salmon','salmon'],['White','white'],['Yellow','yellow'],['Not Specific','notSpecific']]
    ]
  ];

  allQuiz:any = [this.BodySuit, this.TShirt, this.Dress, this.ClothingSet, this.Shirt, this.Shorts, this.Kurthis];

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

  setAnswers(bodysuitData:any, tshirtData:any, dressData:any, clothingsetData:any, shirtData:any, shortData:any, kurthiData:any) {
    this.bodysuitAns = bodysuitData;
    this.tshirtAns = tshirtData;
    this.dressAns = dressData;
    this.clothingsetAns = clothingsetData;
    this.shirtAns = shirtData;
    this.shortsAns = shortData;
    this.kurthisAns = kurthiData;
    this.setKidsData();
  }

  viewAnswerAlert() {
    let message = ` All Data
    Body Suit Answers : ${this.bodysuitAns},
    T shirt Answers : ${this.tshirtAns},
    Shorts Answers : ${this.shortsAns},
    Kurthi Answers : ${this.kurthisAns}.
    `;
    alert(message);
  }

  setKidsData(){

    this.kidsData.bodySuit = {};
    this.kidsData.bodySuit.size = this.bodysuitAns[0] === ''?'null':this.bodysuitAns[0];
    this.kidsData.bodySuit.price = this.bodysuitAns[1] === ''?'null':this.bodysuitAns[1];
    this.kidsData.bodySuit.pattern = this.bodysuitAns[2] === ''?'null':this.bodysuitAns[2];
    this.kidsData.bodySuit.color = this.bodysuitAns[3] === ''?'null':this.bodysuitAns[3];

    this.kidsData.tshirts = {};
    this.kidsData.tshirts.size = this.tshirtAns[0] === ''?'null':this.tshirtAns[0];
    this.kidsData.tshirts.price = this.tshirtAns[1] === ''?'null':this.tshirtAns[1];
    this.kidsData.tshirts.pattern = this.tshirtAns[2] === ''?'null':this.tshirtAns[2];
    this.kidsData.tshirts.color = this.tshirtAns[3] === ''?'null':this.tshirtAns[3];

    this.kidsData.dress = {};
    this.kidsData.dress.size = this.dressAns[0] === ''?'null':this.dressAns[0];
    this.kidsData.dress.price = this.dressAns[1] === ''?'null':this.dressAns[1];
    this.kidsData.dress.pattern = this.dressAns[2] === ''?'null':this.dressAns[2];
    this.kidsData.dress.color = this.dressAns[3] === ''?'null':this.dressAns[3];

    this.kidsData.clothingSet = {};
    this.kidsData.clothingSet.size = this.clothingsetAns[0] === ''?'null':this.clothingsetAns[0];
    this.kidsData.clothingSet.price = this.clothingsetAns[1] === ''?'null':this.clothingsetAns[1];
    this.kidsData.clothingSet.pattern = this.clothingsetAns[2] === ''?'null':this.clothingsetAns[2];
    this.kidsData.clothingSet.color = this.clothingsetAns[3] === ''?'null':this.clothingsetAns[3];

    this.kidsData.shirts = {};
    this.kidsData.shirts.size = this.shirtAns === ''?'null':this.shirtAns[0];
    this.kidsData.shirts.price = this.shirtAns[1] === ''?'null':this.shirtAns[1];
    this.kidsData.shirts.pattern = this.shirtAns[2] === ''?'null':this.shirtAns[2];
    this.kidsData.shirts.color = this.shirtAns[3] === ''?'null':this.shirtAns[3];

    this.kidsData.shorts = {};
    this.kidsData.shorts.size = this.shortsAns[0] === ''?'null':this.shortsAns[0];
    this.kidsData.shorts.price = this.shortsAns[1] === ''?'null':this.shortsAns[1];
    this.kidsData.shorts.pattern = this.shortsAns[2] === ''?'null':this.shortsAns[2];
    this.kidsData.shorts.color = this.shortsAns[3] === ''?'null':this.shortsAns[3];

    this.kidsData.kurthis = {};
    this.kidsData.kurthis.size = this.kurthisAns[0] === ''?'null':this.kurthisAns[0];
    this.kidsData.kurthis.price = this.kurthisAns[1] === ''?'null':this.kurthisAns[1];
    this.kidsData.kurthis.pattern = this.kurthisAns[2] === ''?'null':this.kurthisAns[2];
    this.kidsData.kurthis.color = this.kurthisAns[3] === ''?'null':this.kurthisAns[3];
  }

  setKidsCommonQuestions(data:any){
    this.kidsData.commonQuestions = data;

  }

  getUid(){


  }




  saveKidsData(){
    this.setKidsData();
    var header = {
      headers: new HttpHeaders()
      .set('Authorization',  `bearer ${(this.authService.getToken())}`)
    }
    this.kidsData.userId = this.uid;
    console.log(JSON.parse(JSON.stringify(this.kidsData)));
    return this.http.post(this.apiUrl+"kq",JSON.parse(JSON.stringify(this.kidsData)));
  }

  public checkKidsQuizExist() {
    return this.http.get(this.apiUrl+'kq/'+this.authService.getUid());
  }

  public updateKidsQuiz(){
    this.kidsData.userId = this.authService.getUid();
    this.kidsData.status = "200";
    return this.http.put(this.apiUrl+'kq/'+this.authService.getUid(),JSON.parse(JSON.stringify(this.kidsData)));
  }

}
