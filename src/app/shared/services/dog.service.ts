

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class DogService {

  private dogBreedsUrl = 'https://dog.ceo/api/breeds/list/all';
  private dogBreedsPicsUrl = 'https://dog.ceo/api/breed/';
  public dog: any;
  public img: any;

  constructor(private http: HttpClient) { }

  dogDetails(dog: any, img: any){
    this.dog = dog;
    this.img = img;
  }

  getDogsList(): Observable<any> {
    return this.http.get<any>(this.dogBreedsUrl)
    .pipe(
      catchError(this.handleError('getDogsList', []))
    );
}

  getBreedsPic(dog: any): Observable<any> {
    return this.http.get<any>(this.dogBreedsPicsUrl + `${dog}/images/random`)
      .pipe(
        catchError(this.handleError('getBreedsPic', []))
  );
}

    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          console.error(error); // log to console instead
          return of(result as T);
        };
      }
}
