import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FishGuideService {
  private apiUrl = 'http://localhost:1337/api/fish-guides'; 

  constructor(private http: HttpClient) { }

  getFishes(): Observable<any[]> {
    return this.http.get<any>(this.apiUrl).pipe(
      map(response => response.data) 
    );
  }
}