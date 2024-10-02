import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { review } from '../interface/review';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ReviewService {

  constructor(private http: HttpClient) { }

  getReview() :Observable<review> {
    return this.http.get<review>('assets/json/review.json')
  }

}
