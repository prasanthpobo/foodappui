import { Component, Input } from '@angular/core';
import { offerData } from '../../../../shared/interface/offer';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-available-coupons',
  standalone: true,
  imports: [NgbNavModule, CommonModule],
  templateUrl: './available-coupons.component.html',
  styleUrl: './available-coupons.component.scss'
})

export class AvailableCouponsComponent {

  @Input() data: offerData[];
  public filterData: offerData[];
  public openTab: string = "new_coupon";
  public active = 1;
  public tabData = [{ category: 'new_coupon', name: 'New Coupon' },
  { category: 'used_coupon', name: 'Used Coupon' },
  { category: 'expired_coupon', name: 'Expired Coupon' },
  ];

  ngOnInit() {
    this.changeTab(this.openTab);
  }

  copyMessage(val: string) {
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = val;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  public changeTab(value: string) {
    this.openTab = value;
    if (value == 'new_coupon') {
      this.filterData = this.data.filter(x => x.type === 'new')
    } else if (value == 'used_coupon') {
      this.filterData = this.data.filter(x => x.type === 'used')
    } else if (value == 'expired_coupon') {
      this.filterData = this.data.filter(x => x.type === 'expired')
    }
  }

}
