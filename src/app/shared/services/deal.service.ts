import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Deal } from '../interface/deal';

@Injectable({
  providedIn: 'root'
})
export class DealService {

  constructor(private http: HttpClient) { }

  getDeal() :Observable<Deal> {
    return this.http.get<Deal>('assets/json/deal.json')
  }

}
