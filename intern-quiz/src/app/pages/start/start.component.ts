import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-start',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './start.component.html',
  styleUrl: './start.component.css'
})
export class StartComponent {
  constructor(private router: Router) { }

goToLogin() {
  this.router.navigateByUrl('login');
}
goToSignup() {
  this.router.navigateByUrl('signup');
}
}
