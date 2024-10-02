import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { order } from '../interface/order';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }
   public mobileMenu : boolean = false
  getOrder() :Observable<order> {
    return this.http.get<order>('assets/json/order-list.json')
  }

}
