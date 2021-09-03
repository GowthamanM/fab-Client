import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';
import { UserService } from '../services/user.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  navActive: boolean = false;
  bodyContent = document.querySelector('body');
  userData:any;
  socialUser:any = {};

  isLoggedIn = false;

  userName = '';
  userNameInitial = '';

  constructor(private credentialService: CredentialService,
    private authService:AuthService,
    private router:Router,
    private userService:UserService,
    private socialAuthService: SocialAuthService
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
    this.socialAuthService.signOut();
    this.isLoggedIn = this.authService.getAuthStatus();
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      if(this.socialUser != null){
        console.log(this.socialUser);
      }else{
        console.log('null');
        
      }
    });
    this.router.navigateByUrl('');
  }
}
