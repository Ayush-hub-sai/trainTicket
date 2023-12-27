// authService.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CONSTANT } from 'src/app/constantApi/api';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl: string = environment.apiUrl;
  private apiEndPoint: any = CONSTANT.ENDPOINTS;

  constructor(private http: HttpClient) { }

  login(obj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${this.apiEndPoint.LOGIN}`, obj);
  }

  register(obj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${this.apiEndPoint.ADD_UPDATE_PASSENGERS}`, obj);
  }
}
