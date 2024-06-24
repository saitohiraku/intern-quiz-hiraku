import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { QuizService } from './quiz.service';
import { QuizResponse, QuizData } from '../../models/quiz.types'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, ToolbarComponent],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizList: QuizData[] = []; 
  displayQuestions: QuizData[] = []; 

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizData().subscribe(
      (response: any) => { 
        console.log('API Response:', response);
          const questionData = response.data;
          this.quizList = questionData.map((item: any) => ({
            question: item.attributes.questionText
          }));
          this.displayQuestions = this.getRandomQuestions(4);
      },
      (error) => {
        console.error('API request failed', error);
      }
    );
  }

  getRandomQuestions(count: number): QuizData[] { 
    const shuffleArray = this.quizList.sort(() => Math.random() - 0.5);
    return shuffleArray.slice(0, count);
  }
}
