import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navActive: boolean = false;
  bodyContent = document.querySelector('body');

  isLoggedIn = false;

  userName = '';
  userNameInitial = '';

  constructor(private credentialService: CredentialService,
    private authService:AuthService,
    private router:Router) {
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
    this.userName = this.credentialService.userName;
    this.userNameInitial = this.credentialService.userNameInitial;
  }

  logout() {
    localStorage.setItem('authStatus','false');
    localStorage.setItem('userToken','null');
    this.isLoggedIn = this.authService.getAuthStatus();
    this.router.navigateByUrl('');
  }
}
