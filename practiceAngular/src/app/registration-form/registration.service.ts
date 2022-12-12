import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  constructor(private http: HttpClient) {}

  addRegistration(register: Registration): Observable<any> {
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });

    console.log(register);
    return this.http
      .post('/', register, { headers: options })
      .pipe(catchError(this.handleError));
  }
  private handleError(err: HttpErrorResponse): Observable<any> {
    let errMsg = '';
    if (err.error instanceof Error) {
      // A client-side or network error occured.
      //handle it accordingly
      console.log('An error Occured: ', err.error.message);
      errMsg = err.error.message;
    } else {
      //the backend return an unsuccessful response code.
      //the response body may contain clues as to what went wrong
      console.log(`Backend returned code ${err.status}`);
      errMsg = err.error.status;
    }
    return throwError(() => errMsg);
  }
}
