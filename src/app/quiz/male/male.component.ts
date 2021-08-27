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
  }

}
