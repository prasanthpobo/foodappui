import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { OrderCartItemsComponent } from '../../../shared/components/common/order-cart-items/order-cart-items.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from '../widgets/order/order.component';

@Component({
  selector: 'app-confirm-order',
  standalone: true,
  imports: [BreadcrumbComponent,OrderCartItemsComponent,RouterModule,OrderComponent],
  templateUrl: './confirm-order.component.html',
  styleUrl: './confirm-order.component.scss'
})

export class ConfirmOrderComponent {

  public breadcrumb = {
    title: 'Confirm Order',
    page: 'Home',
    sub_page: 'Confirm Order'
  }

  ngOnInit() {
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
