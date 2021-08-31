import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class KidsQuizService {

  selectionArray:any = [];
  selectedQuiz:any = [];

  bodysuitAns:any = ['','',''];
  tshirtAns:any = ['','',''];
  dressAns:any = ['','',''];
  clothingsetAns:any = ['','',''];
  shirtAns:any = ['','',''];
  shortsAns:any = ['','',''];
  kurthisAns:any = ['','',''];

  constructor() { }

  BodySuit:any = [
    [
      'BodySuit','Size', ['New Born', '9-12 months']
    ],
    [
      'BodySuit','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'BodySuit','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
    ]
  ];

  TShirt:any = [
    [
      'TShirt','Size', ['6-12 months', '6-7 years']
    ],
    [
      'TShirt','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'TShirt','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
    ]
  ];

  Dress:any = [
    [
      'Dress','Size', ['6-12 months', '24-36 months']
    ],
    [
      'Dress','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Dress','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
    ]
  ];

  ClothingSet:any = [
    [
      'ClothingSet','Size', ['New Born', '3-4 years']
    ],
    [
      'ClothingSet','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'ClothingSet','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
    ]
  ];

  Shirt:any = [
    [
      'Shirt','Size', ['0-6 months', '3-4 years']
    ],
    [
      'Shirt','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Shirt','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
    ]
  ];

  Shorts:any = [
    [
      'Shorts','Size', ['0-6 months', '3-4 years']
    ],
    [
      'Shorts','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Shorts','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
    ]
  ];

  Kurthis:any = [
    [
      'Kurthis','Size', ['3-6 months', '13-14 years']
    ],
    [
      'Kurthis','Price', ['Below 500','1000 - 2000','2000 - 3000','3000 - 4000','4000 - 5000', 'More than 5000','Not specified']
    ],
    [
      'Kurthis','Pattern', ['Solid','Printed','Checked','Stripes','Not Specific']
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

}
