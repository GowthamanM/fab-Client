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
      'Shirt','Shirt Question 1', ['q1','q1-option2','q1-option3','q1-option4','q1-option5']
    ],
    [
      'Shirt','Shirt 2', ['q2-optfadsion1','q2-option2 ddasd fdafafda fda','q2-option3','q2-option4','q2-option5']
    ],
    [
      'Shirt','Shirt Question 3', ['q3','q3-option2','q3-option3']
    ],
    [
      'Shirt','Shirt Question', ['q4-option1','q4-optiofdsfafn2','q4-option3','q4-option4','q4-option5']
    ],
    [
      'Shirt','Shirt Question 5 extra', ['q5-option1','q5-option2','q5-option3','q5-option4']
    ],
  ];

  Pant:any = [
    [
      'Pant','Pant Question 1', ['q1','q1-option2','q1-option3','q1-option4','q1-option5']
    ],
    [
      'Pant','Pant 2', ['q2-optfadsion1','q2-option2 ddasd fdafafda fda','q2-option3','q2-option4','q2-option5']
    ],
    [
      'Pant','Pant Question 3', ['q3','q3-option2','q3-option3']
    ]
  ];

  Trouser:any = [
    [
      'Trouser','Trouser Question 1', ['q1','q1-option2','q1-option3','q1-option4','q1-option5']
    ],
    [
      'Trouser','Trouser 2', ['q2-optfadsion1','q2-option2 ddasd fdafafda fda','q2-option3','q2-option4','q2-option5']
    ],
    [
      'Trouser','Trouser Question 3', ['q3','q3-option2','q3-option3']
    ],
    [
      'Trouser','Trouser q4', ['q4-optfadsion1','q4-option2 fda','q4-option3','q4-option4']
    ],
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
    console.log("Trouser Answers");
    console.log(this.trouserAns);
  }

  viewAnswerAlert() {
    let message = ` All Data
    Shirt Answers : ${this.shirtAns},
    Pant Answers : ${this.pantAns},
    Trouser Answers : ${this.trouserAns}.
    `;
    alert(message);
  }
}
