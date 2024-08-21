import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignupService {
  // post(name: string, email: string, password: string) {
  //   throw new Error('Method not implemented.');
  // }
  private apiUrl = 'http://localhost:1337/api/users';
  constructor(private http: HttpClient) { }
  signup( username: string, email:string, password: string): Observable<any> {
    const user = {
      username,
      email,
      password,
      role: '1' 
    };
    return this.http.post<any>(this.apiUrl,user);
}
}
