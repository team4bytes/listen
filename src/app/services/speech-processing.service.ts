import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { NlpKB } from '../speech-processing/nlp-kb';
import { MessageService } from '../message.service';

@Injectable()
export class SpeechProcessingService {

  private nlpKBUrl = 'api/nlpKB';  // URL to web api


  constructor(private http: HttpClient, private messageService: MessageService) { }

    /** GET NlpKB from the server */
  getNlpKB (): Observable<NlpKB[]> {
    return this.http.get<NlpKB[]>(this.nlpKBUrl)
      .pipe(
        tap(kbs => this.log(`fetched NLP_KB`)),
        catchError(this.handleError('getNlpKB', []))
      );
  }
 
  
 
  
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a ProductService message with the MessageService */
  private log(message: string) {
    this.messageService.add('ProductService: ' + message);
  }

  
}
