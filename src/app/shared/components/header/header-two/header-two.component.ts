import { Component, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { MyAccountComponent } from '../widgets/my-account/my-account.component';
import { CartComponent } from '../widgets/cart/cart.component';
import { LocationComponent } from '../widgets/location/location.component';
import { NavService } from '../../../services/nav.service';
import { ClickOutSideDirective } from '../../../directive/click-out-side.directive';

@Component({
  selector: 'app-header-two',
  standalone: true,
  imports: [CartComponent,MyAccountComponent,RouterModule,ClickOutSideDirective],
  templateUrl: './header-two.component.html',
  styleUrl: './header-two.component.scss'
})

export class HeaderTwoComponent {

  @Input() routePath: string;

  constructor(public modalServices: NgbModal , public navService :NavService) {
  }

  openLocation() {
    this.modalServices.open(LocationComponent, { windowClass: 'location-modal' , centered : true ,backdrop : 'static'})
  }

}
