import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PasswordService } from '../services/password.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  errorMessage='';
  successMessage='';
  constructor(
    private fb: FormBuilder,
    private passwordService:PasswordService
    ) { }
  
  loginForm = this.fb.group({
    email: ['', [
      Validators.required,
      Validators.email
    ]]
  });

  ngOnInit(): void {
  }

  get fab() {
    return this.loginForm.controls;
  }

  onSubmit(){
    this.passwordService.sendResetLink(this.loginForm.value.email).subscribe(data=>{
      var temp = JSON.parse(JSON.stringify(data));
      if(temp.message === "Mail Sent Successfully"){
        this.errorMessage = '';
        this.successMessage = temp.message;
      }else{
        this.errorMessage = temp.message;
      }
    })
  }

}
