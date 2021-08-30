import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MaleQuizService {

  selectionArray:any = [];
  selectedQuiz:any = [];

  shirtAns:any = ['','','','',''];
  pantAns:any = ['','',''];
  trouserAns:any = ['','','',''];

  constructor() { }

  Shirt:any = [
    [
      'Shirt','Size (Chest)', ['39','40','41','42','43']
    ],
    [
      'Shirt','Size (S | M | L)', ['S','M','L','XL','XXL']
    ],
    [
      'Shirt','Fit', ['Slim Fit','xxa','sdvs']
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
    ]
  ];

  Trouser:any = [
    [
      'Trouser','Type', ['Briefs','Trunks','Boxer briefs','Inner boxers']
    ],
    [
      'Trouser','Vest', ['Sleeve less','Sleeved vests','Gym Vests']
    ],
    [
      'Trouser','Colors', ['grey','red','blue']
    ]
  ];

  allQuiz:any = [this.Shirt, this.Pant, this.Trouser];

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

  setAnswers(shirtData:any, pantData:any, trouserData:any) {
    this.shirtAns = shirtData;
    this.pantAns = pantData;
    this.trouserAns = trouserData;
  }

  viewAllAnswers() {
    console.log("Shirt Answers");
    console.log(this.shirtAns);
    console.log("Pant Answers");
    console.log(this.pantAns);
    console.log("InnerWear Answers");
    console.log(this.trouserAns);
  }

  viewAnswerAlert() {
    let message = ` All Data
    Shirt Answers : ${this.shirtAns},
    Pant Answers : ${this.pantAns},
    InnerWear Answers : ${this.trouserAns}.
    `;
    alert(message);
  }
}
