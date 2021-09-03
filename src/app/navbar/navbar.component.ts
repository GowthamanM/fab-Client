import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class NavbarComponent implements OnInit {

  navActive: boolean = false;
  bodyContent = document.querySelector('body');
  userData:any;

  isLoggedIn = false;

  userName = '';
  userNameInitial = '';

  constructor(private credentialService: CredentialService,
    private authService:AuthService,
    private router:Router,
    private userService:UserService,
    private el: ElementRef
    ) {
  }

  ngOnInit(): void {
    this.checkLogin();
    this.successUser();
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

  checkLogin() {
    this.isLoggedIn = this.authService.getAuthStatus();
  }

  successUser() {
    this.userService.getUserData().subscribe((data)=>{


      this.userName = data.User.fullName;
      this.userNameInitial =  data.User.fullName.charAt(0);
    });
  }

  logout() {
    localStorage.setItem('authStatus','false');
    localStorage.setItem('userToken','null');
    localStorage.setItem('uid','null');
    this.isLoggedIn = this.authService.getAuthStatus();
    this.router.navigateByUrl('');
  }


  // popupBtn = document.querySelector('.js-menu-popup-btn');
  // console.log(menuPopup);

  // popupBtn.addEventListener('click', togglePopup);


  profilePopup() {
    let menuPopup =  document.querySelector('.menu-popup');
    menuPopup?.classList.toggle('fab-pro-active');
  }

  profilePopupMD() {
    let menuPopup =  document.querySelector('.menu-popup-md');
    menuPopup?.classList.toggle('fab-pro-active');
  }



  // Close the dropdown if the user clicks outside of it
  profileClose() {
    var menuPopup =  document.querySelector('.menu-popup');
    menuPopup?.classList.remove('fab-pro-active');
  }

  onClick(event:any) {
    if (!this.el.nativeElement.contains(event.target)) {// or some similar check
      this.profileClose();
    }
  }
}
