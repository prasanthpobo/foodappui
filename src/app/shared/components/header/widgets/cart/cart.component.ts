import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})

export class CartComponent {

  @Input() routePath: string;
  count: any = 0;
  public cartItem: any = [];
  Total: any=0;
  constructor(public productService: ProductService) {
    this.productService.itemsSource.subscribe(x => {
      this.cartItem = x;
      this.count = this.cartItem.length;
      this.calculateSubTotal();
    });

  }
  calculateSubTotal() {
    this.Total = this.cartItem.reduce((total: any, product: any) => {
      let totalPrice = product.value * product.price;
      return total + totalPrice;
    }, 0);    
  }

}
