import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';
import { OrderComponent } from '../widgets/order/order.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { NgbAccordionConfig, NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderCartItemsComponent } from '../../../shared/components/common/order-cart-items/order-cart-items.component';
import { CreditDebitCardComponent } from './credit-debit-card/credit-debit-card.component';
import { MyWalletComponent } from './my-wallet/my-wallet.component';
import { DeliveryOptionComponent } from './delivery-option/delivery-option.component';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [BreadcrumbComponent,OrderComponent,TitleComponent,
    OrderCartItemsComponent,CreditDebitCardComponent,DeliveryOptionComponent,
    MyWalletComponent,DeliveryOptionComponent,NgbAccordionModule,RouterModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss'
})

export class PaymentComponent {

  public breadcrumb = {
    title: 'Payment',
    page: 'Home',
    sub_page: 'Payment'
  }

  constructor(config: NgbAccordionConfig) {
		config.closeOthers = true;
	}

  ngOnInit() {
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
