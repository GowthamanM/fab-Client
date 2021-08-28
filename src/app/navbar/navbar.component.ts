import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navActive: boolean = false;
  bodyContent = document.querySelector('body');

  constructor() {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    window.addEventListener('scroll',this.navScroll, true);
  }

  showhideNavbar() {
    if(this.navActive === true) {
      this.navActive = false;
      this.bodyContent!.classList.remove('fab-body-fixed');
    }
    else {
      this.bodyContent!.classList.add('fab-body-fixed');
      this.navActive = true;
    }
  }

  navScroll() {
    let header = document.querySelector('.fab-header');
    if(window.scrollY < 50) {
      header!.classList.remove('fab-nav-colored');
    }
    else {
      header!.classList.add('fab-nav-colored');
    }
  }
}
