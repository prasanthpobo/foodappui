import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { offer } from '../interface/offer';

@Injectable({
  providedIn: 'root'
})
export class OfferService {

  constructor(private http: HttpClient) { }

  getOffer() :Observable<offer> {
    return this.http.get<offer>('assets/json/offer.json')
  }

}
