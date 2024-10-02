import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { CommonAddressComponent } from '../../../shared/components/common/common-address/common-address.component';
import { OrderCartItemsComponent } from '../../../shared/components/common/order-cart-items/order-cart-items.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { Self } from '../../../shared/interface/self';
import { SelfService } from '../../../shared/services/self.service';
import { OrderComponent } from '../widgets/order/order.component';
import { AddEditAddressComponent } from './widgets/add-edit-address/add-edit-address.component';

@Component({
  selector: 'app-address',
  standalone: true,
  imports: [BreadcrumbComponent,OrderCartItemsComponent,OrderComponent,
    TitleComponent,RouterModule,CommonAddressComponent],
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})

export class AddressComponent {

  public self : Self;
  public breadcrumb = {
    title: 'Address',
    page: 'Home',
    sub_page: 'Address'
  }

  constructor(public selfService : SelfService,public modalServices: NgbModal){}

  ngOnInit() {
    this.selfService.getSelf().subscribe(Response =>{
      this.self =  Response;
    })
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

  addEditAddress(){
    this.modalServices.open(AddEditAddressComponent, { windowClass: 'address-details-modal' , centered: true })
  }

}
