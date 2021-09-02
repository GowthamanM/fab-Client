import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';
import { LoginService } from '../services/login.service';
import { QuizService } from '../services/quiz.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isQuizTaken:boolean=false;
  payload:any={};

  userData:any={};
  uid:any;
  pass:any;

  constructor(private fb: FormBuilder, private route: Router, private credentialService: CredentialService,
    private loginService:LoginService,
    private quizService:QuizService,
    private authService:AuthService) {
    }

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
    
    if(temp.message.message === "Authentication Successful"){

      localStorage.setItem('userToken',resp.headers.get('token')+"");
      localStorage.setItem('authStatus','true');
      localStorage.setItem('uid',temp.message.uid+"");
      
      this.navigateCheck();
      
      

    }else{
      alert("login Failed")
    } 
   })
   
  }

  navigateCheck(){
    this.quizService.isQuizTaken().subscribe(data=>{
      let temp = JSON.parse(JSON.stringify(data));
      if(temp.result == true){
        this.route.navigateByUrl('/wardrobe');
      }else{
        this.route.navigateByUrl('');
      }
    })
  }

  authenticate(){}

}
