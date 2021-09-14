import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternalService } from '../services/internal.service';
import { SignupService } from '../services/signup.service';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  responseData:any={};
  socialUser:any={};
  googleUserChange:any={};
  googleErrorResponse:any;
  signUpErrorResponse:any;
  counter:any = 1;

  constructor(private fb: FormBuilder, 
    private route: Router,
    private internalService:InternalService,
    private signupService:SignupService,
    private socialAuthService: SocialAuthService) { }

  ngOnInit(): void {
    // this.socialAuthService.authState.subscribe((user) => {
    //   this.socialUser = user;
    //   this.isLoggedin = (user != null);
    //   console.log(this.socialUser);
    // });
  }

  checkSimilarity: ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    let formData = this.signupForm?.value;
    let pass = formData?.password;

    return pass != control.value ? { nonSimilar: true} : null;
  }

  signupForm = this.fb.group({
    userName: ['', [
      Validators.required
    ]],
    email: ['', [
      Validators.required,
      Validators.email
    ]],
    phoneno: ['', [
      Validators.required,
      Validators.minLength(10)
    ]],
    password: ['', [
      Validators.required,
      Validators.minLength(6),
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$')
    ]],
    confirmPassword: ['', [
      Validators.required,
      this.checkSimilarity
    ]]
  });

  get fab() {
    return this.signupForm.controls;
  }

  onSubmit() {
    
    this.signupService.addUser(this.internalService.changeToSignUpModel(JSON.parse(JSON.stringify(this.signupForm.value)))).subscribe((resp)=>{
      this.responseData = JSON.parse(JSON.stringify(resp.body));
      
      if((this.responseData.message.message === "User Successfully created")){
        localStorage.setItem('userToken',resp.headers.get('token')+"");
        localStorage.setItem('authStatus','true');
        localStorage.setItem('uid',this.responseData.message.userId+"");
        this.route.navigateByUrl('/sign-up-quiz');
      }else if(this.responseData.message === "Email Address Already Exists"){
        this.signUpErrorResponse = this.responseData.message
      }
      
    });
  }

  loginWithGoogle(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.socialAuthService.authState.subscribe((user) => {
      this.socialUser = user;
      if(this.socialUser != null){
      this.googleUserChange.idToken = this.socialUser.idToken;
       this.signUpWithGoogle();
       
       
      }else{
        this.googleErrorResponse = 'Login Failed'
      }
    });
    
  }

  signUpWithGoogle(){
    
    this.signupService.addGoogleUser(JSON.parse(JSON.stringify(this.googleUserChange))).subscribe(resp=>{

      this.responseData = JSON.parse(JSON.stringify(resp.body));
      // if(localStorage.getItem('authStatus') == 'false'){

        if((this.responseData.message.message === "User Successfully created")){
          localStorage.setItem('userToken',resp.headers.get('token')+"");
          localStorage.setItem('authStatus','true');
          localStorage.setItem('uid',this.responseData.message.userId+"");
          this.route.navigateByUrl('/sign-up-quiz');
        }else if(this.responseData.message === "Email Address Already Exists"){
          this.googleErrorResponse = this.responseData.message;
          
        }
      // }

    });
  }

}
