import { Component, Input } from '@angular/core';
import { Address } from '../../../interface/self';
import { RouterModule } from '@angular/router';
import { AddEditAddressComponent } from '../../../../component/order/address/widgets/add-edit-address/add-edit-address.component';
import { SelfService } from '../../../services/self.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'app-common-address',
  standalone: true,
  imports: [RouterModule, TitleComponent],
  templateUrl: './common-address.component.html',
  styleUrl: './common-address.component.scss'
})

export class CommonAddressComponent {

  @Input() data: Address[];
  @Input() deliver: boolean;
  @Input() class: string;
  @Input() title: string;
  @Input() subTitle: string;
  @Input() animation: boolean;
  @Input() type: string;

  constructor(public selfService: SelfService, public modalServices: NgbModal) { }

  addEditAddress(title?: string) {
    let data = this.data.find(x => x.title === title)
    const modal = this.modalServices.open(AddEditAddressComponent, { windowClass: 'address-details-modal', centered: true })
    modal.componentInstance.data = data;
  }
}
