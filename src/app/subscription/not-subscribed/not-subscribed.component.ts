import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-not-subscribed',
  templateUrl: './not-subscribed.component.html',
  styleUrls: ['./not-subscribed.component.scss']
})
export class NotSubscribedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
