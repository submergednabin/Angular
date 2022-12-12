import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { throwError, Observable } from 'rxjs';
import { Flights } from '../shared/Flight';

@Injectable()
export class BookFlightService {
  flightDetail!: any;
  error!: any;
  errorMessage!: String;
  constructor(private http: HttpClient) {}

  bookFlight(data: any): Observable<any> {
    //Consume the exposed URI's specified in QP
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post('http://localhost:1020/bookings', data, {
      headers: options,
    });
  }

  getAllFlights(): Observable<Flights[]> {
    //Consume the exposed URI's specified in QP
    return this.http.get<Flights[]>('http://localhost:1020/bookings');
  }

  updateFlight(flightId: any, data: any): Observable<any> {
    //Consume the exposed URI's specified in QP
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.put(`http://localhost:1020/${flightId}`, data, {headers: options})
  }
}
