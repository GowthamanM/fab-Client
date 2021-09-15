import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { InternalService } from '../services/internal.service';
import { PasswordService } from '../services/password.service';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  errorMessage='';
  successMessage='';
  token:any;

  constructor(private fb: FormBuilder, 
    private route: ActivatedRoute,
    private passwordService:PasswordService,
    private router:Router
    ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
  });
  }

  checkSimilarity: ValidatorFn = (control: AbstractControl):ValidationErrors | null => {
    let formData = this.signupForm?.value;
    let pass = formData?.password;

    return pass != control.value ? { nonSimilar: true} : null;
  }

  signupForm = this.fb.group({
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
    var data = {
      'password':this.signupForm.value.password
    };
    this.passwordService.updatePassword(this.token,data).subscribe(data=>{
      console.log(data);
      
      let temp = JSON.parse(JSON.stringify(data));
      if(temp.message == "Password updated successfully"){
        this.errorMessage = '';
        this.successMessage = temp.message;
        setTimeout(() => {
          this.router.navigateByUrl('/login');
        }, 2000);
      }else{
        this.errorMessage = temp.message+'! Link Expired.';
      }
    })
  }

}
