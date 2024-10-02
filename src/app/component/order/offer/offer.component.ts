import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { OfferService } from '../../../shared/services/offer.service';
import { offer } from '../../../shared/interface/offer';
import { TitleCasePipe } from '@angular/common';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { AvailableCouponsComponent } from './available-coupons/available-coupons.component';
import { BankOffersComponent } from './bank-offers/bank-offers.component';

@Component({
  selector: 'app-offer',
  standalone: true,
  imports: [BreadcrumbComponent,TitleComponent,AvailableCouponsComponent,BankOffersComponent],
  templateUrl: './offer.component.html',
  styleUrl: './offer.component.scss'
})

export class OfferComponent {

  public offer: offer;

  public breadcrumb = {
    title: 'Offer',
    page: 'Home',
    sub_page: 'Offer'
  }

  constructor(public offerServices: OfferService) { }

  ngOnInit() {
    this.offerServices.getOffer().subscribe(Response => {
       if(Response){
         this.offer = Response ;
       }
    })
    document.body.classList.add('bg-color');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
