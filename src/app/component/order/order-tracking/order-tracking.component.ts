import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { OrderStatusDetailsComponent } from './order-status-details/order-status-details.component';
import { GoogleMapComponent } from '../../../shared/components/common/google-map/google-map.component';

@Component({
  selector: 'app-order-tracking',
  standalone: true,
  imports: [BreadcrumbComponent, OrderStatusDetailsComponent,GoogleMapComponent],
  templateUrl: './order-tracking.component.html',
  styleUrl: './order-tracking.component.scss'
})

export class OrderTrackingComponent {

  public breadcrumb = {
    title: 'Order Tracking',
    page: 'Home',
    sub_page: 'Order Tracking'
  }

  ngOnInit() {
    document.body.classList.add('bg-color');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
