import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { passwordValidator } from '../shared/password-validator';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  date:Date = new Date();
  signUpForm: FormGroup;
  

  
  onSubmit() {
    console.log(this.signUpForm);
  }

  get username() {return this.signUpForm.get('username')};
  get email() {return this.signUpForm.get('email')};
  get password() {return this.signUpForm.get('password')};

  
  constructor() { }
  
  ngOnInit(): void {

    this.signUpForm = new FormGroup({
      username: new FormControl('', [
        Validators.required,
        Validators.minLength(4)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.email
      ] ),
      password: new FormControl('', [
        Validators.required,
        passwordValidator
      ]),
      role: new FormControl(''),
    });
    
  }


}
