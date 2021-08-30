import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialService } from '../services/credential.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private credentialService: CredentialService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    userName: ['', [
      Validators.required
    ]],
    password: ['', [
      Validators.required
    ]]
  });

  get fab() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if(this.loginForm.value.userName && this.loginForm.value.password === 'admin-fab') {
      this.credentialService.userLoggedIn = true;
      this.route.navigate(['/']);
    }
    else {
      alert("Incorrect Credentials");
    }
    console.log(this.loginForm.value);
    console.log(this.loginForm.value.userName);
  }

}
