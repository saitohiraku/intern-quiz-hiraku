import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FishResponse } from '../../models/fish.types';  

@Injectable({
  providedIn: 'root'
})
export class FishGuideService {
  private apiUrl = 'http://localhost:1337/api/scores'; 


  constructor(private http: HttpClient) { }

  getFishes(): Observable<FishResponse> {
    return this.http.get<FishResponse>(this.apiUrl);
  }
  getMyScores():Observable<FishResponse> {
    const apiUrl = `http://localhost:1337/api/scores/?populate=*&filters[user][id][$eq]=${sessionStorage.getItem('user')}`; 
    return this.http.get<FishResponse>(apiUrl,{
      headers:{
        Authorization: `Bearer ${sessionStorage.getItem('token')}`
      }
    });
  }
}
// headers: {
//   Authorization: `Bearer ${this.token}`,
// },