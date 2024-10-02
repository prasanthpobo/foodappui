import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../interface/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {

  constructor(private http: HttpClient) { }
 
  getWishlist(): Observable<product> {
    return this.http.get<product>('assets/json/wishlist.json')
  }
  
}
