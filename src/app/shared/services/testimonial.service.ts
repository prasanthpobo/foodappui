import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { testimonial } from '../interface/testimonial';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {

  constructor(private http: HttpClient) { }

  getTestimonial() :Observable<testimonial> {
    return this.http.get<testimonial>('assets/json/testimonial.json')
  }


}
