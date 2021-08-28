import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.scss']
})
export class MaleComponent implements OnInit {

  id: number = 1;
  backBtnActive: boolean = false;
  nextBtnActive: boolean = true;
  count: number = 7;
  arrIndex: number = 0;

  question = ['Question 1','Question 2', 'Question 3', 'Question 4', 'Question 5', 'Question 6', 'Question 7'];

  options = [
    ['q1-option1', 'q1-option2', 'q1-option3', 'q1-option4'],
    ['q2-option1', 'q2-option2', 'q1-option3', 'q1-option4'],
    ['q3-option1', 'q3-option2', 'q1-option3', 'q1-option4', 'q1-option5', 'q3-option6'],
    ['q4-option1', 'q4-option2', 'q1-option3', 'q1-option4'],
    ['q5-option1', 'q5-option2', 'q1-option3', 'q1-option4'],
    ['q6-option1', 'q6-option2', 'q1-option3', 'q1-option4'],
    ['q7-option1', 'q7-option2', 'q1-option3', 'q1-option4'],
  ];

  selectedAnswer!: string;

  answers = ['','','','','','',''];

  quizOptions: string[] = ['option 1', 'option 2', 'option 3', 'option 4'];

  constructor(private activeRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(routeParams => {
      this.id = +routeParams.id;
      this.checkRouteChanges();
    });
  }

  checkRouteChanges() {
    this.arrIndex = this.id - 1;

    if(this.id > 1) {
      this.backBtnActive = true;
    }
    else {
      this.backBtnActive = false;
    }

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

  goBack() {
    let currentRoute = this.id;
    let prevRoute = currentRoute - 1;
    this.route.navigate(['quiz/male/' + prevRoute]);
  }

  goNext() {
    let currentRoute = this.id;
    let nextRoute = currentRoute + 1;
    this.route.navigate(['quiz/male/' + nextRoute]);
    this.answers[this.id - 1] = this.selectedAnswer;

    console.log("Answers Array");
    console.log(this.answers);
  }

  markAnswers(data:any) {
    console.log(data);
    this.selectedAnswer = data;
  }

}
