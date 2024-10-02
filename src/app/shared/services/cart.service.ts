import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cart } from '../interface/cart';

@Injectable({
  providedIn: 'root'
})

export class CartService {
  itemsSource = new BehaviorSubject([]);
  currentItems = this.itemsSource.asObservable()
  cartItems:any = [];
  constructor(private http: HttpClient) { }

  getCart() :Observable<cart> {
    return this.http.get<cart>('assets/json/cart.json')
  } 
  getCartAPI() :Observable<any> {
    return this.http.get<any>('assets/json/cart.json')
  }  
  addItem(newCartItem:any) {

    const prevCartItem = this.cartItems.find((el:any) => el.product._id == newCartItem.product._id)
    
    if(prevCartItem) {
      // update item qty
      this.cartItems = this.cartItems.map((item:any) => {
        if (item.product._id == prevCartItem.product._id ) {
          item.qty = item.qty + 1;
        }
        return item
      })
      console.log(this.cartItems);
    }else {
      this.cartItems.push(newCartItem);
    }
    
    this.itemsSource.next(this.cartItems);
  }

  updateItems(items: []) {
    this.cartItems = items;
    this.itemsSource.next(this.cartItems);
  }
}
