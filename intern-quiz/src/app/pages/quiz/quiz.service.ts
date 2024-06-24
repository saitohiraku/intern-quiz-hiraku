import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizResponse } from '../../models/quiz.types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:1337/api/questions'; 

  constructor(private http: HttpClient) { }

  getQuizData(): Observable<QuizResponse> {
    return this.http.get<any>(this.apiUrl);
  }
}
