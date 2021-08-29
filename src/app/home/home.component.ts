import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private credentialService: CredentialService, private route: Router) { }

  ngOnInit(): void {
  }

  takeToQuiz() {
    if(this.credentialService.userLoggedIn) {
      this.route.navigate(['quiz']);
    }
    else {
      this.route.navigate(['login']);
    }
  }
}
