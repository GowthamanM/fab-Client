import { Component, ElementRef, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss'],
  host: {
    '(document:click)': 'onClick($event)',
  }
})
export class SecondaryNavbarComponent implements OnInit {

  userName = '';
  userNameInitial = '';
  walletAmount = '';

  constructor(
    private credentialService: CredentialService,
    private userService:UserService,
    private el: ElementRef,
    private authService:AuthService,
    private router:Router) {
  }

  ngOnInit(): void {
    this.successUser();
  }

  successUser() {
    this.userService.getUserData().subscribe((data)=>{
      this.userName = data.User.fullName;
      this.userNameInitial =  data.User.fullName.charAt(0);
      this.walletAmount = data.User.wallet;
    });
  }

  profilePopup() {
    let menuPopup =  document.querySelector('.menu-popup');
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

  logout() {
    localStorage.setItem('authStatus','false');
    localStorage.setItem('userToken','null');
    localStorage.setItem('uid','null');
    this.profileClose();
    this.router.navigateByUrl('');
  }

  goToQuiz(data:any){
    if(data == 1)
      this.router.navigateByUrl('/quiz');
    else if(data == 2)
      this.router.navigateByUrl('/quiz');
    else
      this.router.navigateByUrl('/quiz');
  }

  goToWardrobe(){
    console.log('enter');
    
    this.userService.getUserData().subscribe(data=>{
      
      let temp = data;
      
      if(temp.User.isSubscribed === true){
        this.router.navigateByUrl('/wardrobe');
      }else{
        this.router.navigateByUrl('/subscription');
      }
    })
  }
}
