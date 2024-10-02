import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { orderData } from '../../../../shared/interface/order';

@Component({
  selector: 'app-order-details',
  standalone: true,
  imports: [],
  templateUrl: './order-details.component.html',
  styleUrl: './order-details.component.scss'
})

export class OrderDetailsComponent {

  @Input() data: orderData;
  public myGroup: FormGroup;
  public total: string;

  constructor(public modal: NgbModal) { }
}
