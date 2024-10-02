import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { faq } from '../interface/faq';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }

  getFaq() :Observable<faq> {
    return this.http.get<faq>('assets/json/faq.json')
  }

}
