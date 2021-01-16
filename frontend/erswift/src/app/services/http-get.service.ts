import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IHospitalArea } from '../interfaces/ihospital-area';

@Injectable({
  providedIn: 'root'
})
export class HttpGetService {

  private erswiftAPIUrl = "http://127.0.0.1:8000/api/";

  constructor(private http: HttpClient) { }

  getPriorityQueue(id:number): Observable<IHospitalArea> {
    return this.http.get<IHospitalArea>(this.erswiftAPIUrl + "hospital-areas/hospital-priority-areas/" + id + "/").pipe(
      catchError(this.handleError)
    )
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage = "";
    if (err.error instanceof ErrorEvent) {
        errorMessage = "An error has occured: " + err.error.message;
    } else {
        errorMessage = "Server returned code: " + err.status + " error message is " + err.message;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
