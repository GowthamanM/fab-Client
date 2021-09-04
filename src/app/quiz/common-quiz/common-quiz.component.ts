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

  activeSelection = {
    'tryNewItems' : false,
    'discoverNewTrends' : false,
    'saveTime' : false,
    'expertAdvice'  : false,
    'accessToDiffBrands' : false
  }

  bodyType = {
    'slim' : false,
    'average' : false,
    'athletic' : false,
    'husky' : false
  }

  ngOnInit(): void {
    this.getSelectedOption();
    window.scrollTo(0, 0);
  }

  getSelectedOption() {
    this.selectedOption = this.commonQuizService.userSelected;
  }

  // The User Answers are stored here
  commonQuizAns = ['','','','','',''];

  commonQuiz = this.fb.group({
    height: [''],
    weight: [''],
    brands: [''],
    birthday: ['']
  });

  slim() {
    this.bodyType.slim = true;
    this.bodyType.average = false;
    this.bodyType.athletic = false;
    this.bodyType.husky = false;
  }

  average() {
    this.bodyType.slim = false;
    this.bodyType.average = true;
    this.bodyType.athletic = false;
    this.bodyType.husky = false;
  }

  athletic() {
    this.bodyType.slim = false;
    this.bodyType.average = false;
    this.bodyType.athletic = true;
    this.bodyType.husky = false;
  }

  husky() {
    this.bodyType.slim = false;
    this.bodyType.average = false;
    this.bodyType.athletic = false;
    this.bodyType.husky = true;
  }

  getReasonAns() {
    let ans = [];
    let ansString;
    if(this.activeSelection.tryNewItems == true) {
      ans.push('Try New Items');
    }
    if(this.activeSelection.discoverNewTrends == true) {
      ans.push('Discover New Trends');
    }
    if(this.activeSelection.saveTime == true) {
      ans.push('Save Time');
    }
    if(this.activeSelection.expertAdvice == true) {
      ans.push('Expert Advice');
    }
    if(this.activeSelection.accessToDiffBrands == true) {
      ans.push('Access to Different Brands');
    }
    ansString = ans.join(',');
    // console.log(ans);
    // console.log(ansString);
    return ansString;
  }

  getBodyTypeAns() {
    if(this.bodyType.slim == true) {
      return "Slim";
    }
    if(this.bodyType.average == true) {
      return "Average";
    }
    if(this.bodyType.athletic == true) {
      return "Athletic";
    }
    if(this.bodyType.husky == true) {
      return "Husky";
    }
    return '';
  }

  makeArray() {
    this.commonQuizAns[0] = this.getReasonAns();
    this.commonQuizAns[1] = this.commonQuiz.value.height;
    this.commonQuizAns[2] = this.commonQuiz.value.weight;
    this.commonQuizAns[3] = this.getBodyTypeAns();
    this.commonQuizAns[4] = this.commonQuiz.value.brands;
    this.commonQuizAns[5] = this.commonQuiz.value.birthday;
    console.log(this.commonQuizAns);
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
