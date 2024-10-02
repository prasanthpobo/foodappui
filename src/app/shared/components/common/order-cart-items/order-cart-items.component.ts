import { Component, Input } from '@angular/core';
import { cart } from '../../../interface/cart';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-order-cart-items',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './order-cart-items.component.html',
  styleUrl: './order-cart-items.component.scss'
})

export class OrderCartItemsComponent {

  public cartItem: any;
  @Input() title: boolean;
  @Input() buttonTitle: string;
  @Input() showBillings: boolean=true;
  @Input() buttonURL: string='';
  @Input() showPayButton:boolean=true;
  sub_total: any = 0;
  discount_price: any = 0;
  to_pay: any = 0;
  CartHeadings:any="Cart Details"
  constructor(public productService: ProductService, public cartServices: CartService) { }

  ngOnInit() {
    this.productService.getProductAPI().subscribe(response => {
      if (response.products) {      
        let cartItems = response.cartItems ? response.cartItems : [];
        this.productService.itemsSource.next(cartItems);     
      }     
    })
    this.productService.itemsSource.subscribe(x => {
      this.cartItem = x;
      this.calculateSubTotal();
    });
    
  }

  increaseDecrease(i: number, qty: number) {
    this.cartItem.data.forEach((item: any) => {
      if (item.id == i) {
        if (qty == -1 && item.qty > 1) {
          item.qty -= 1;
        } else if (qty == 1) {
          item.qty += 1;
        }
        this.calculateSubTotal();
      }
    })
  }

  calculateSubTotal() {
    this.sub_total = this.cartItem.reduce((total: any, product: any) => {
      let totalPrice = product.value * product.price;
      return total + totalPrice;
    }, 0);
    let discount = 10;
    this.discount_price = ((this.sub_total * discount) / 100);
    this.to_pay = this.sub_total - this.discount_price;
  }
}
