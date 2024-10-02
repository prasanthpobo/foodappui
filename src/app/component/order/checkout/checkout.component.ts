import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { OrderCartItemsComponent } from '../../../shared/components/common/order-cart-items/order-cart-items.component';
import { OrderComponent } from '../widgets/order/order.component';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [BreadcrumbComponent, OrderCartItemsComponent,RouterModule,OrderComponent],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})

export class CheckoutComponent {

  public breadcrumb = {
    title: 'Checkout',
    page: 'Home',
    sub_page: 'Checkout'
  }

  ngOnInit() {
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }


}
