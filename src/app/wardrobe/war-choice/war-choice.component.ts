import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-war-choice',
  templateUrl: './war-choice.component.html',
  styleUrls: ['./war-choice.component.scss']
})
export class WarChoiceComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }

  men() {
    console.log("Men");
    this.route.navigate(['wardrobe/product']);
  }

  women() {
    console.log("Women");
    this.route.navigate(['wardrobe/product']);
  }

  kids() {
    console.log("Kids");
    this.route.navigate(['wardrobe/product']);
  }
}
