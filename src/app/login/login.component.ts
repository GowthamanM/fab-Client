import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CredentialService } from '../services/credential.service';
import { LoginService } from '../services/login.service';
import { QuizService } from '../services/quiz.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { UserService } from '../services/user.service';
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

  socialUser:any={}
  googleErrorResponse:any;
  googleUserChange:any = {};

  constructor(private fb: FormBuilder, private route: Router, private credentialService: CredentialService,
    private loginService:LoginService,
    private quizService:QuizService,
    private authService:AuthService,
    private socialAuthService: SocialAuthService,
    private userService:UserService) {
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
        this.subscribeNavigateCheck();
      }else{
        this.route.navigateByUrl('');
      }
    })
  }

  subscribeNavigateCheck(){
    this.userService.getUserData().subscribe(data=>{
      // console.log('login :: '+data);
      
      if(data.User.isSubscribed == true){
        this.route.navigateByUrl('/wardrobe');
      }else{
        this.route.navigateByUrl('/subscription');
      }
    })
  }

  authenticate(){}

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      console.log(this.socialUser);
      
      if(this.socialUser != null){
      this.googleUserChange.idToken = this.socialUser.idToken;
       this.loginAPIWithGoogle();
       
       
      }else{
        alert('Login Failed');
      }
    });
    
  }


  loginAPIWithGoogle(){

    this.loginService.googleUserLogin(this.googleUserChange).subscribe(resp=>{
      let temp = JSON.parse(JSON.stringify(resp.body));  
    
      if(temp === "Please Signup first"){
        this.googleErrorResponse = "Please Signup first";
      }else if(temp.message.message === "Authentication Successful"){

      localStorage.setItem('userToken',resp.headers.get('token')+"");
      localStorage.setItem('authStatus','true');
      localStorage.setItem('uid',temp.message.userId+"");
      
      this.navigateCheck();
    }else {
      this.googleErrorResponse = "Login Failed";
    } 

    });

  }

}
