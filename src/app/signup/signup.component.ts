import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InternalService } from '../services/internal.service';
import { SignupService } from '../services/signup.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  responseData:any={};

  constructor(private fb: FormBuilder, 
    private route: Router,
    private internalService:InternalService,
    private signupService:SignupService) { }

  ngOnInit(): void {
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
      Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_-]).*$')
    ]],
    confirmPassword: ['', [
      Validators.required,
      this.checkSimilarity
    ]],
    // doorNo: ['', [
    //   Validators.required
    // ]],
    // streetName: ['', [
    //   Validators.required
    // ]],
    // city: ['', [
    //   Validators.required
    // ]],
    // state: ['', [
    //   Validators.required
    // ]],
    // pincode: ['', [
    //   Validators.required,
    //   Validators.minLength(6),
    //   Validators.pattern('^[1-9]{1}[0-9]{2}\\s{0,1}[0-9]{3}$')
    // ]],
    gender: ['', [
      Validators.required
    ]],
    dob: ['', [
      Validators.required
    ]]
  });

  get fab() {
    return this.signupForm.controls;
  }

  onSubmit() {
    // console.log(JSON.parse(JSON.stringify(this.signupForm.value)));
    
    this.signupService.addUser(this.internalService.changeToSignUpModel(JSON.parse(JSON.stringify(this.signupForm.value)))).subscribe((data)=>{
      this.responseData = JSON.parse(JSON.stringify(data));
      console.log(this.responseData);
      
      if((this.responseData.message === "User Successfully created")){
        this.route.navigateByUrl('login');
      }else if(this.responseData.message === "Email Address Already Exists"){
        alert(this.responseData.message);
      }
      
    });
    // console.log(this.internalService.changeToSignUpModel(JSON.parse(JSON.stringify(this.signupForm.value))));
  }

}
