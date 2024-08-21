import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) {
    this.loginForm = new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log('this.loginForm', this.loginForm)
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;
      this.loginService.login(email, password).subscribe(
        (response) => {
          const jwt = response.jwt;
          const user = response.user.id;
          sessionStorage.setItem('token', jwt);
          sessionStorage.setItem('user', user);
          console.log(sessionStorage.getItem('token'));
          console.log(sessionStorage.getItem('user'));
          this.router.navigate(['/home']);
          console.log('成功');
        },
        (error) => {
          console.error('失敗', error);
        }
      );
    } else {
      console.log('フォームが無効です');
    }
  }
}
