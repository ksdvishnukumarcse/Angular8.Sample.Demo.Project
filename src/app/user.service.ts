import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Posts } from './post';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private postGetUrl = 'https://jsonplaceholder.typicode.com/posts';  
  constructor(
    private http: HttpClient) { }

    getPosts(): Observable<Posts[]>
    {
      return this.http.get<Posts[]>(this.postGetUrl)
      .pipe(
        catchError(this.handleError<Posts[]>('getPosts', []))
      );
    }

    getPostById(id: number): Observable<Posts>
    {
      return this.http.get<Posts>(this.postGetUrl+"/"+id)
      .pipe(
        catchError(this.handleError<Posts>('getPostById'))
      );
    }

    private handleError<T>(operation = 'operation', result?: T) {
      return (error: any): Observable<T> => {      
        console.error(error); // log to console instead
    
        // TODO: better job of transforming error for user consumption
        //this.log(`${operation} failed: ${error.message}`);
    
        // Let the app keep running by returning an empty result.
        return of(result as T);
      };
    }
}
