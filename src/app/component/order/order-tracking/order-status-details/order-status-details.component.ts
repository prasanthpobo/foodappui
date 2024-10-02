import { Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderCartItemsComponent } from '../../../../shared/components/common/order-cart-items/order-cart-items.component';

@Component({
  selector: 'app-order-status-details',
  standalone: true,
  imports: [NgbNavModule,OrderCartItemsComponent],
  templateUrl: './order-status-details.component.html',
  styleUrl: './order-status-details.component.scss'
})

export class OrderStatusDetailsComponent {

  public active = 1;

}
