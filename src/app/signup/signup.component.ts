import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: Router) { }

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
    ]]
  });

  get fab() {
    return this.signupForm.controls;
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }

}
