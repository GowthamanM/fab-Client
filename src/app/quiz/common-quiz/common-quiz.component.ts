import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonQuizService } from 'src/app/services/common-quiz.service';
import { FemaleQuizService } from 'src/app/services/female-quiz.service';
import { KidsQuizService } from 'src/app/services/kids-quiz.service';
import { MaleQuizService } from 'src/app/services/male-quiz.service';

@Component({
  selector: 'app-common-quiz',
  templateUrl: './common-quiz.component.html',
  styleUrls: ['./common-quiz.component.scss']
})
export class CommonQuizComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private commonQuizService: CommonQuizService,
    private maleQuiz:MaleQuizService,private femaleQuiz:FemaleQuizService,private kidsQuiz:KidsQuizService) { }

  selectedOption: any;

  ngOnInit(): void {
    this.getSelectedOption();
    window.scrollTo(0, 0);
  }

  getSelectedOption() {
    this.selectedOption = this.commonQuizService.userSelected;
  }

  commonQuizAns = ['','','','','',''];

  commonQuiz = this.fb.group({
    reasons: [''],
    height: [''],
    weight: [''],
    bodyType: [''],
    brands: [''],
    birthday: ['']
  });

  makeArray() {
    this.commonQuizAns[0] = this.commonQuiz.value.reasons;
    this.commonQuizAns[1] = this.commonQuiz.value.height;
    this.commonQuizAns[2] = this.commonQuiz.value.weight;
    this.commonQuizAns[3] = this.commonQuiz.value.bodyType;
    this.commonQuizAns[4] = this.commonQuiz.value.brands;
    this.commonQuizAns[5] = this.commonQuiz.value.birthday;
    console.log(this.commonQuizAns);
  }

  onSubmit() {
    this.makeArray();
  }

  goNext() {
    this.makeArray();
    if(this.selectedOption == "men") {
      this.maleQuiz.setMaleCommonQuestions(this.commonQuizAns);
      this.route.navigate(['/quiz/male']);
    }
    else if(this.selectedOption == "women") {
      this.femaleQuiz.setFemaleCommonQuestions(this.commonQuizAns);
      this.route.navigate(['/quiz/female']);
    }
    else if(this.selectedOption == "kids") {
      this.kidsQuiz.setKidsCommonQuestions(this.commonQuizAns);
      this.route.navigate(['/quiz/kids']);
    }
  }

}
