import { Component, OnInit } from '@angular/core';
import { CredentialService } from '../services/credential.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

  userName = '';
  userNameInitial = '';

  constructor(private credentialService: CredentialService,
    private userService:UserService) {
  }

  ngOnInit(): void {
    this.successUser();
  }

  successUser() {
    this.userService.getUserData().subscribe((data)=>{
      this.userName = data.User.fullName;
      this.userNameInitial =  data.User.fullName.charAt(0);
    });
  }

}
