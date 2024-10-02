import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { NgbModal, NgbRatingConfig, NgbRatingModule, NgbScrollSpyModule } from '@ng-bootstrap/ng-bootstrap';
import { ClickOutSideDirective } from '../../../../shared/directive/click-out-side.directive';
import { menuListingList } from '../../../../shared/interface/menu-listing';
import { OrderService } from '../../../../shared/services/order.service';
import { CustomFoodComponent } from '../../widgets/modal/custom-food/custom-food.component';

@Component({
  selector: 'app-order-online',
  standalone: true,
  imports: [CommonModule,ClickOutSideDirective,NgbScrollSpyModule,NgbRatingModule],
  templateUrl: './order-online.component.html',
  styleUrl: './order-online.component.scss'
})

export class OrderOnlineComponent {

  @Input() menuList: menuListingList[];
  public rate = 5;

  constructor(public modalServices: NgbModal, public rating: NgbRatingConfig,public orderService : OrderService) {
    rating.readonly = true;
    rating.max = 5;
  }

  addProduct() {
    this.modalServices.open(CustomFoodComponent, { windowClass: 'customized-modal', centered: true })
  }

  outSideClose(){
    this.orderService.mobileMenu = false;
  }

}
