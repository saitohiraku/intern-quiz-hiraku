import { Component, OnInit } from '@angular/core';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { QuizService } from './quiz.service';
import { QuizResponse, Quiz } from '../../models/quiz.types'; 
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule, 
            ToolbarComponent,
            HttpClientModule,
            FormsModule],
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css'],
  providers: [QuizService]
})
export class QuizComponent implements OnInit {
  quizList: Quiz[] = []; 
  displayQuestions: Quiz[] = []; 
  selectedQuestion: Quiz | null = null;
  resultImage: string = '/assets/kozakana_ao.png';
  selectedFish: any = null;
  questionCount: number = 0; 
  maxQuestions: number = 8;
  userAnswer: string = '';
  username: string = '';
  email: string = '';
  password: string ='';
  quizForm: FormGroup;
  scoreMin: number =0;
  user: string ='';
  fishguide: string = '';
  constructor(
    private router: Router,
    private quizService: QuizService,
    private http: HttpClient,
    private formBuilder: FormBuilder

    ) {
      this.quizForm = new FormGroup({
        scoreMin: new FormControl('', Validators.required),
        user: new FormControl('', Validators.required),
        fishguide: new FormControl('', Validators.required)
      })
    };



  ngOnInit(): void {
    this.getRandomFish();
  }

  getRandomFish(): void {
    this.quizService.getAnswer().subscribe(
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
    this.quizService.getQuiz().subscribe(
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

  getRandomQuestions(count: number): Quiz[] { 
    const shuffleArray = this.quizList.sort(() => Math.random() - 0.5);
    return shuffleArray.slice(0, count);
  }

  onSelectQuestion(question: Quiz): void {
    this.selectedQuestion = question;
    this.checkAnswer(question);
    this.questionCount++;
    if (this.questionCount < this.maxQuestions) {
      this.shuffleQuestions();
    } else {
      this.resultImage = '/assets/kozakana_ao_finish.png';
    }
  }

  checkAnswer(question: Quiz): void {
    if (this.questionCount >= this.maxQuestions) {
      return;
    }
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
          this.resultImage = '/assets/kozakana_ao_incorrect_question.png';
        }
        console.log(question.question); 
        console.log(matchAnswer); 
      }
    );
  }

  shuffleQuestions(): void {
    this.displayQuestions = this.getRandomQuestions(4);
  }
  UserAnswer(): void {
    if (this.userAnswer === this.selectedFish.fishName) {
        this.resultImage = '/assets/kozakana_ao_correct.png';
        this.quizForm.patchValue({
            fishguide: this.selectedFish.fishName,
            scoreMin: this.questionCount,
            user: sessionStorage.getItem('user')
        });
        console.log('フォームの内容:', this.quizForm.value);
        if (this.quizForm.valid) {
            const { scoreMin, user, fishguide } = this.quizForm.value;
            const payload = {
              data:{
                  scoreMin,
                  user,
                  fishguide
              }
          };
            this.quizService.quiz(scoreMin, user, fishguide).subscribe(
                (response: any) => {
                    console.log('スコア登録成功', response);
                },
                (error: any) => {
                    console.error('スコア登録失敗', error);
                }
            );
          } 
        setTimeout(() => {
          this.router.navigate(['/result']);
      }, 3000);
    } else {
        this.resultImage = '/assets/kozakana_ao_incorrect.png';
        console.log(this.userAnswer);
        setTimeout(() => {
            this.router.navigate(['/incorrect']);
        }, 3000);
    }
}

}
