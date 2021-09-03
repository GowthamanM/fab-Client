import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-quiz',
  templateUrl: './sign-up-quiz.component.html',
  styleUrls: ['./sign-up-quiz.component.scss']
})
export class SignUpQuizComponent implements OnInit {

  activeSelection = {
    'q1' : {
      'option1': false,
      'option2': false,
      'option3': false,
      'option4': false,
      'selected' : false
    },
    'q2' : {
      'option1': false,
      'option2': false,
      'option3': false,
      'option4': false,
      'option5': false,
      'selected' : false
    },
    'q3' : {
      'option1': false,
      'option2': false,
      'option3': false,
      'selected' : false
    }
  }

  signUpQuizAns:any = ['','',''];

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  // Question 1
  q1o1() {
    this.activeSelection.q1.option1 = true;
    this.activeSelection.q1.option2 = false;
    this.activeSelection.q1.option3 = false;
    this.activeSelection.q1.option4 = false;

    this.activeSelection.q1.selected = true;
    this.signUpQuizAns[0] = 'option q1o1';
  }

  q1o2() {
    this.activeSelection.q1.option1 = false;
    this.activeSelection.q1.option2 = true;
    this.activeSelection.q1.option3 = false;
    this.activeSelection.q1.option4 = false;

    this.activeSelection.q1.selected = true;
    this.signUpQuizAns[0] = 'option q1o2';
  }

  q1o3() {
    this.activeSelection.q1.option1 = false;
    this.activeSelection.q1.option2 = false;
    this.activeSelection.q1.option3 = true;
    this.activeSelection.q1.option4 = false;

    this.activeSelection.q1.selected = true;
    this.signUpQuizAns[0] = 'option q1o3';
  }

  q1o4() {
    this.activeSelection.q1.option1 = false;
    this.activeSelection.q1.option2 = false;
    this.activeSelection.q1.option3 = false;
    this.activeSelection.q1.option4 = true;

    this.activeSelection.q1.selected = true;
    this.signUpQuizAns[0] = 'option q1o4';
  }



  // Question 2
  q2o1() {
    this.activeSelection.q2.option1 = true;
    this.activeSelection.q2.option2 = false;
    this.activeSelection.q2.option3 = false;
    this.activeSelection.q2.option4 = false;
    this.activeSelection.q2.option5 = false;

    this.activeSelection.q2.selected = true;
    this.signUpQuizAns[1] = 'option q2o1';
  }

  q2o2() {
    this.activeSelection.q2.option1 = false;
    this.activeSelection.q2.option2 = true;
    this.activeSelection.q2.option3 = false;
    this.activeSelection.q2.option4 = false;
    this.activeSelection.q2.option5 = false;

    this.activeSelection.q2.selected = true;
    this.signUpQuizAns[1] = 'option q2o2';
  }

  q2o3() {
    this.activeSelection.q2.option1 = false;
    this.activeSelection.q2.option2 = false;
    this.activeSelection.q2.option3 = true;
    this.activeSelection.q2.option4 = false;
    this.activeSelection.q2.option5 = false;

    this.activeSelection.q2.selected = true;
    this.signUpQuizAns[1] = 'option q2o3';
  }

  q2o4() {
    this.activeSelection.q2.option1 = false;
    this.activeSelection.q2.option2 = false;
    this.activeSelection.q2.option3 = false;
    this.activeSelection.q2.option4 = true;
    this.activeSelection.q2.option5 = false;

    this.activeSelection.q2.selected = true;
    this.signUpQuizAns[1] = 'option q2o4';
  }

  q2o5() {
    this.activeSelection.q2.option1 = false;
    this.activeSelection.q2.option2 = false;
    this.activeSelection.q2.option3 = false;
    this.activeSelection.q2.option4 = true;
    this.activeSelection.q2.option5 = false;

    this.activeSelection.q2.selected = true;
    this.signUpQuizAns[1] = 'option q2o5';
  }



  // Question 3
  q3o1() {
    this.activeSelection.q3.option1 = true;
    this.activeSelection.q3.option2 = false;
    this.activeSelection.q3.option3 = false;

    this.activeSelection.q3.selected = true;
    this.signUpQuizAns[2] = 'option q3o1';
  }

  q3o2() {
    this.activeSelection.q3.option1 = false;
    this.activeSelection.q3.option2 = true;
    this.activeSelection.q3.option3 = false;

    this.activeSelection.q3.selected = true;
    this.signUpQuizAns[2] = 'option q3o2';
  }

  q3o3() {
    this.activeSelection.q3.option1 = false;
    this.activeSelection.q3.option2 = false;
    this.activeSelection.q3.option3 = true;

    this.activeSelection.q3.selected = true;
    this.signUpQuizAns[2] = 'option q3o3';
  }




  goNext() {
    console.log(this.signUpQuizAns);
    // console.log(this.selectionArray);
    this.route.navigate(['quiz']);
  }

}
