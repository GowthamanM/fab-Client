import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-male',
  templateUrl: './male.component.html',
  styleUrls: ['./male.component.scss']
})
export class MaleComponent implements OnInit {

  // id: number = 1;
  // backBtnActive: boolean = false;
  // nextBtnActive: boolean = true;
  // arrIndex: number = 0;

  // question = ['Size(Chest)','Size(S M L)', 'Fit', 'Price', 'Pattern', 'Body Type', 'Your preference'];

  // options = [
  //   ['30 - 35', '35 - 40', '40 - 45'],
  //   ['s', 'M', 'L', 'XL','XXL','XXXL'],
  //   ['slim fit', 'xxa', 'sdvs'],
  //   ['Below 500', '1000 - 2000', '2000 - 3000', '3000 - 4000', '4000 - 5000', 'Not Specified'],
  //   ['Solid', 'Printed', 'Checked', 'Stripes'],
  //   ['Slim', 'Average', 'Athletic', 'Husky'],
  //   ['Slim', 'Regular', 'Large']
  // ];

  // selectedAnswer!: string;
  // count: number = this.question.length;

  // answers = ['','','','','','',''];

  constructor(private activeRoute: ActivatedRoute, private route: Router) {
  }

  ngOnInit(): void {
    // this.activeRoute.params.subscribe(routeParams => {
    //   this.id = +routeParams.id;
    //   this.checkRouteChanges();
    // });
  }

  // checkRouteChanges() {
  //   this.arrIndex = this.id - 1;

  //   if(this.id > 1) {
  //     this.backBtnActive = true;
  //   }
  //   else {
  //     this.backBtnActive = false;
  //   }

  //   if(this.id == this.count) {
  //     this.nextBtnActive = false;
  //   }
  //   else if(this.id > this.count) {
  //     this.route.navigate(['page-not-found']);
  //   }
  //   else {
  //     this.nextBtnActive = true;
  //   }
  // }

  // goBack() {
  //   let currentRoute = this.id;
  //   let prevRoute = currentRoute - 1;
  //   this.route.navigate(['quiz/male/' + prevRoute]);
  // }

  // goNext() {
  //   let currentRoute = this.id;
  //   let nextRoute = currentRoute + 1;
  //   this.route.navigate(['quiz/male/' + nextRoute]);
  //   this.answers[this.id - 1] = this.selectedAnswer;
  // }

  // onSubmit() {
  //   let currentRoute = this.id;
  //   this.answers[this.id - 1] = this.selectedAnswer;
  //   console.log("Answers Array");
  //   console.log(this.answers);
  //   alert(this.answers);
  //   this.route.navigate(['/wardrobe']);
  // }

  // markAnswers(data:any) {
  //   console.log(data);
  //   this.selectedAnswer = data;
  // }

}
