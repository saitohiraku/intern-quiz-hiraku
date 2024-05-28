import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrl: 'toolbar.component.css',
  standalone: true,
  imports: [MatToolbarModule, 
            MatButtonModule, 
            MatIconModule],
})
export class ToolbarComponent {
  constructor(private router: Router) { }

  goToHome() {
    this.router.navigate(['']);
}
}