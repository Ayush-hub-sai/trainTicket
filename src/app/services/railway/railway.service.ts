import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CONSTANT } from 'src/app/constantApi/api';
import { ResponseModel } from 'src/app/interface/railywayInterface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RailwayService {

  public apiUrl: any = environment.apiUrl;

  private apiEndPoint: any = CONSTANT.ENDPOINTS;

  myBehaviorSubject = new BehaviorSubject<any>('en');

  constructor(private http: HttpClient) { }

  getAllStations(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>(`${this.apiUrl}${this.apiEndPoint.GET_ALL_STATIONS}`);
  }

  getAllTrainBetweenStations(departureStationId: number, arrivalStationId: number, departureDate: string): Observable<ResponseModel> {
    const url = `${this.apiUrl}${this.apiEndPoint.GET_TRAINS_BETWEEN_STATIONS}`;

    // Set up the query parameters
    let params = new HttpParams()
      .set('departureStationId', departureStationId.toString())
      .set('arrivalStationId', arrivalStationId.toString())
      .set('departureDate', departureDate);

    // Make the GET request with the constructed URL and query parameters
    return this.http.get<ResponseModel>(url, { params });
  }

  bookTicket(obj: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}${this.apiEndPoint.BOOK_TRAIN}`, obj);

  }

}
