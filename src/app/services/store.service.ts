import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Store } from '../store/store';
import { MessageService } from '../message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class StoreService {

  private storeUrl = 'api/storeData';  // URL to web api


  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** getStoreData from the server */
  getStoreData(): Observable<Store[]> {
    return this.http.get<Store[]>(this.storeUrl)
      .pipe(
        tap(storeData => this.log(`fetched Store data`)),
        catchError(this.handleError('getStoreData', []))
      );
  }


  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a StoreService message with the MessageService */
  private log(message: string) {
    this.messageService.add('StoreService: ' + message);
  }



}
