import { Component } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})


export class LogoutComponent {
  constructor(private router: Router) { }
  goTosetting() {
    this.router.navigate(['setting']);
  }

}
