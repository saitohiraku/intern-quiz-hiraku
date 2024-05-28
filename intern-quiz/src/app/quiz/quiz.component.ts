import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarComponent } from '../components/toolbar/toolbar.component';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [ToolbarComponent],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent {
}
