import { Component, Input } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { productData } from '../../../interface/product';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-product-filter-wise-data',
  standalone: true,
  imports: [TitleComponent, NgbNavModule, CommonModule, RouterModule],
  templateUrl: './product-filter-wise-data.component.html',
  styleUrl: './product-filter-wise-data.component.scss'
})

export class ProductFilterWiseDataComponent {

  public openTab: string = "fast_delivery";
  public product: productData[];
  public products: productData[];
  @Input() title: string;
  @Input() loader: boolean;

  @Input() data: productData[];
  @Input() class: string;
  public cartItems: any = [];
  public orderDetails: any = [];

  public tabData = [{ category: 'fast_delivery', name: 'Fast Delivery' },
  { category: 'rating', name: 'Rating' },
  { category: 'pure_veg', name: 'Pure Veg' },
  { category: 'cost', name: 'Cost' },
  ];

  constructor(public productService: ProductService) { }

  ngOnInit() {
    this.productService.getProductAPI().subscribe(response => {
      if (response.products) {
        this.orderDetails = response.order;
        this.cartItems = response.cartItems ? response.cartItems : [];
        this.productService.itemsSource.next(this.cartItems);
        this.product = response.products;
        this.products = response.products;
        this.data = response.products;
      }
      //this.changeTab(this.openTab);
    })

    // if (orderId != '') {
    //   this.productService.getCartAPI(orderId).subscribe(response => {

    //     this.cartItems = response.order;
    //   })
    // }

  }

  public changeTab(value: string) {
     this.openTab = value;
    // if (value == 'fast_delivery') {
    //   this.products = this.product.sort((one, two) => (one.time > two.time ? 1 : -1));
    // } else if (value == 'rating') {
    //   this.products = this.product.sort((one, two) => (one.rating > two.rating ? -1 : 1));
    // } else if (value == 'pure_veg') {
    //   this.products = this.product.filter(x => x.type === 'veg')
    // } else if (value == 'cost') {
    //   this.products = this.product.sort((one, two) => (one.price > two.price ? 1 : -1));
    // }
  }
  showCartQTY(id: any): any {
    if (this.cartItems) {
      let obj = this.cartItems?.find((x: any) => x.id === id);
      if (obj) {
        return obj.value ? Number(obj.value) : 0;
      }
      return 0;
    } else {
      return 0;
    }

  }
  increaseDecrease(product: any, i: number, qty: number, isNew: boolean) {
    debugger
    let userData: any = localStorage.getItem('user');
    if (userData) {
      let orderId: any = localStorage.getItem("orderId") || '';
      if (this.cartItems) {
        if (isNew) {
          product.value += 1;
          this.cartItems = this.cartItems.filter((obj:any) => obj !== product);
          this.cartItems.push(product);
        } else {
          this.cartItems.forEach((item: any) => {
            if (item.id == i) {
              if (qty == -1 && item.value > 0) {
                item.value -= 1;
                if(item.value==0){
                  this.cartItems = this.cartItems.filter((obj:any) => obj !== item);
                }
              } else if (qty == 1) {
                item.value += 1;
              }
            }
          });
        }

        this.orderCreate(this.cartItems, orderId, userData?.Id);
      } else {
        product.value += 1;
        let cartList: any = [];
        cartList.push(product);
        this.orderCreate(cartList, orderId, userData?.Id);
      }

    } else {
      alert("No user Found")
    }
  }


  orderCreate(cartItems: any, orderId: any, customerId: any) {
    let payload = [{
      orderId: orderId,
      customerId: customerId,
      cartItems: cartItems
    }];
    debugger
    this.productService.orderCreate(payload).subscribe((data: any) => {
      if (data.success == true) {
        const orderId = data.order._id;
        let orderNo: any = localStorage.getItem("orderId") || '';
        if (orderNo == "" || orderNo != orderId) {
          localStorage.setItem("orderId", orderId);
        }
        this.productService.itemsSource.next(data.order.cartItems);

        //navigate to order success
        //this.router.navigate(['order','success',orderId])
        //this.cartService.updateItems([]); //clear cart
      }
    });
  }


}
