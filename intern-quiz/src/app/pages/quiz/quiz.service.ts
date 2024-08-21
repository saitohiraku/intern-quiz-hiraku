import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QuizResponse } from '../../models/quiz.types';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'http://localhost:1337/api/scores';
  constructor(private http: HttpClient) { }
  getQuiz(): Observable<QuizResponse> {
    const apiUrl = 'http://localhost:1337/api/questions'; 
    return this.http.get<QuizResponse>(apiUrl,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
  }
  getAnswer(): Observable<QuizResponse> {
    const apiUrl = 'http://localhost:1337/api/fish-guides';
    return this.http.get<QuizResponse>(apiUrl,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
  }
  checkCorrect(): Observable<QuizResponse> {
    const apiUrl = 'http://localhost:1337/api/answers?populate=fishguide,question';
    return this.http.get<QuizResponse>(apiUrl,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
  }
  getMyScores():Observable<QuizResponse> {
    const apiUrl = `http://localhost:1337/api/scores/?populate=*&filters[user][id][$eq]=${sessionStorage.getItem('user')}`; 
    return this.http.get<QuizResponse>(apiUrl,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
  }
  quiz( scoreMin: number, user:string, fishguide: string): Observable<any> {
    const payload = {
      data: {
          scoreMin,
          user,
          fishguide
      }
  };
    return this.http.post<any>(this.apiUrl, payload,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
  }
}
