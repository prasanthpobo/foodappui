import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { orderData } from '../../../shared/interface/order';
import { OrderService } from '../../../shared/services/order.service';
import { ProfileSectionComponent } from '../widgets/profile-section/profile-section.component';


@Component({
  selector: 'app-my-order',
  standalone: true,
  imports: [BreadcrumbComponent, OrderDetailsComponent,TitleComponent,ProfileSectionComponent],
  templateUrl: './my-order.component.html',
  styleUrl: './my-order.component.scss'
})

export class MyOrderComponent {

  public order: orderData[];
  public breadcrumb = {
    title: 'My Order',
    page: 'Home',
    sub_page: 'My Order'
  }

  constructor(public orderServices: OrderService, public modal: NgbModal) { }

  ngOnInit() {
    this.orderServices.getOrder().subscribe(response => {
      this.order = response.order;
      response.order.forEach(element => {
        element.totalPrice = element.product.reduce((total, product) => {
          const totalPriceForProduct = product.qty * product.price;
          product.totalPrice = totalPriceForProduct;
          return total + totalPriceForProduct;
        }, 0);
      })
    })
  }

  details(id: number) {
    let data = this.order.find(ele => ele.transaction_id === id);
    const modal = this.modal.open(OrderDetailsComponent, { centered: true, windowClass: 'order-details-modal' })
    modal.componentInstance.data = data;
  }

}
