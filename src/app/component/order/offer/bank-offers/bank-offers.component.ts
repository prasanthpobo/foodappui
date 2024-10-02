import { Component, Input } from '@angular/core';
import { offerData } from '../../../../shared/interface/offer';

@Component({
  selector: 'app-bank-offers',
  standalone: true,
  imports: [],
  templateUrl: './bank-offers.component.html',
  styleUrl: './bank-offers.component.scss'
})

export class BankOffersComponent {

  @Input() data :offerData[];

}
