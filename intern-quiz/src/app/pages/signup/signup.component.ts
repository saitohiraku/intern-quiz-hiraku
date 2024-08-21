import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { SignupService } from './signup.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string ='';
  signupForm: FormGroup;
  constructor(
    private router: Router,
    private SignupService: SignupService,
    private formBuilder: FormBuilder
    ) {
      this.signupForm = new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required)
      })
    };
    goTosetting() {
      console.log('this.signupForm', this.signupForm)
      if (this.signupForm.valid) {
        const { username, email, password } = this.signupForm.value;
        this.SignupService.signup(username, email, password).subscribe(
          (response: any) => {
            console.log('新規登録成功', response);
            this.router.navigate(['setting']);
          },
          (error: any) => {
            console.error('失敗', error);
          }
        );
      } else {
        console.log('フォームが無効です');
      }
    }
  }