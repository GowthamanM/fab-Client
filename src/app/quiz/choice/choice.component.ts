import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  male() {
    this.route.navigate(['quiz/male/1']);
  }

  female() {
    this.route.navigate(['quiz/female/1']);
  }

  kids() {
    this.route.navigate(['quiz/kids/1']);
  }
}
