import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
    })
    export class LoginService {
    private apiUrl = 'http://localhost:1337/api/auth/local';

    constructor(private http: HttpClient) { }

    login( identifier: string, password: string): Observable<any> {
        return this.http.post<any>(this.apiUrl, { identifier, password });
    }
}
