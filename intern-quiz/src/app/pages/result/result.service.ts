import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FishResponse } from '../../models/fish.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private http: HttpClient) { }
    getMinScore():Observable<FishResponse> {
      const apiUrl = `http://localhost:1337/api/scores/?populate=*&filters[user][id][$eq]=${sessionStorage.getItem('scoreMin')}`; 
      return this.http.get<FishResponse>(apiUrl,{
        headers:{
          Authorization: `Bearer ${sessionStorage.getItem('token')}`
        }
      });
    }
}
