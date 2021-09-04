import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonQuizService } from 'src/app/services/common-quiz.service';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor(private route: Router, private commonQuizService: CommonQuizService) { }

  ngOnInit(): void {
  }

  men() {
    this.commonQuizService.userSelected = "men";
    this.route.navigate(['/quiz/common-quiz']);
  }

  women() {
    this.commonQuizService.userSelected = "women";
    this.route.navigate(['/quiz/common-quiz']);
  }

  kids() {
    this.commonQuizService.userSelected = "kids";
    this.route.navigate(['/quiz/common-quiz']);
  }
}
