import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {


  payload:any={};

  constructor(private credentialService: CredentialService, private route: Router,
    private authService:AuthService) { }

  ngOnInit(): void {
   this.authService.decodeToken().subscribe(data=>{
     this.payload = JSON.parse(JSON.stringify(data));
     localStorage.setItem('uid',this.payload.payload.id+"");
   }) 
  }

  takeToQuiz() {
    this.route.navigateByUrl('/quiz');
  }

  takeToWardrobe() {
    this.route.navigateByUrl('/wardrobe')
  }
}
