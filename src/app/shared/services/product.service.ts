import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  itemsSource = new BehaviorSubject([]);
  currentItems = this.itemsSource.asObservable();
  
  APIURL: any = "https://foodappapi-drdo.onrender.com/api/v1/"
  constructor(private http: HttpClient) { }

  getProduct(): Observable<product> {
    return this.http.get<product>('assets/json/product.json')
  }
  getProductAPI(): Observable<any> {
    let id: any = localStorage.getItem("orderId") || '0';
    return this.http.get<any>(this.APIURL + 'allproducts/' + id)
  }
  getCartAPI(id: any): Observable<any> {
    return this.http.get<any>(this.APIURL + 'order/' + id)
  }

  orderCreate(order: any) {
    return this.http.post(this.APIURL + 'order', order)
  }

}
