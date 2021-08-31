import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CredentialService } from '../services/credential.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router, private credentialService: CredentialService,
    private loginService:LoginService) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    password: ['', [
      Validators.required
    ]]
  });

  get fab() {
    return this.loginForm.controls;
  }

  onSubmit() {
   this.loginService.userLogin(this.loginForm.value).subscribe(resp=>{
    let temp = JSON.parse(JSON.stringify(resp.body));  
    if(temp.message === "Authentication Successful"){
      localStorage.setItem('userToken',resp.headers.get('token')+"");
      localStorage.setItem('authStatus','true');
      this.route.navigateByUrl('');
    }else{
      alert("login Failed")
    } 
   })
   
  }

}
