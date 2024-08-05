import { Component } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-result',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent {
  constructor(private router: Router) { }

  replayQuiz(): void {
    this.router.navigate(['/quiz']);
  }

  goToHome(): void {
    this.router.navigate(['']);
  }
}
