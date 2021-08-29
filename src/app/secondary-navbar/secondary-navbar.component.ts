import { Component, OnInit } from '@angular/core';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-secondary-navbar',
  templateUrl: './secondary-navbar.component.html',
  styleUrls: ['./secondary-navbar.component.scss']
})
export class SecondaryNavbarComponent implements OnInit {

  userName = '';
  userNameInitial = '';

  constructor(private credentialService: CredentialService) {
  }

  ngOnInit(): void {
    this.successUser();
  }

  successUser() {
    this.userName = this.credentialService.userName;
    this.userNameInitial = this.credentialService.userNameInitial;
  }

}
