import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { QuizService } from './quiz.service';
import { QuizResponse, QuizData } from '../../models/quiz.types'; 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, 
            ToolbarComponent,
            HttpClientModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizList: QuizData[] = []; 
  displayQuestions: QuizData[] = []; 
  selectedQuestion: QuizData | null = null;
  resultImage: string = '/assets/kozakana_ao.png';
  selectedFish: any = null;

  constructor(private quizService: QuizService, private http: HttpClient) { }

  ngOnInit(): void {
    this.getRandomFish();
  }

  getRandomFish(): void {
    this.quizService.getAnswerData().subscribe(
      (response: any) => {
        const fishList = response.data;
        const randomFish = fishList[Math.floor(Math.random() * fishList.length)].attributes;
        this.selectedFish = randomFish;
        console.log('クイズの答え', randomFish.fishName); 
        this.loadQuestions();
      }
    );
  }

  loadQuestions(): void {
    this.quizService.getQuizData().subscribe(
      (response: any) => {
        const questionData = response.data;
        this.quizList = questionData.map((item: any) => ({
          question: item.attributes.questionText,
          fishName: item.attributes.fishName
        }));
        this.displayQuestions = this.getRandomQuestions(4);
      }
    );
  }

  getRandomQuestions(count: number): QuizData[] { 
    const shuffleArray = this.quizList.sort(() => Math.random() - 0.5);
    return shuffleArray.slice(0, count);
  }

  onSelectQuestion(question: QuizData): void {
    this.selectedQuestion = question;
    this.checkAnswer(question);
  }

  checkAnswer(question: QuizData): void {
    this.quizService.checkCorrect().subscribe(
      (response: any) => {
        const answers = response.data;
        const matchAnswer = answers.find((answer: any) => 
          answer.attributes.question.data.some((q: any) => q.attributes.questionText === question.question) &&
          answer.attributes.fishguide.data.some((fish: any) => fish.attributes.fishName === this.selectedFish.fishName)
        );
        if (matchAnswer && matchAnswer.attributes.isCorrect) {
          this.resultImage = '/assets/kozakana_ao_correct_question.png';
        } else {
          this.resultImage = '/assets/kozakana_ao_incorrect.png';
        }
        console.log(question.question); 
        console.log(matchAnswer); 
      }
    );
  }
}
