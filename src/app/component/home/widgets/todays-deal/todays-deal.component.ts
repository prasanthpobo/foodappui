import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../shared/components/common/title/title.component';
import { DealData } from '../../../../shared/interface/deal';
import { DealService } from '../../../../shared/services/deal.service';

@Component({
  selector: 'app-todays-deal',
  standalone: true,
  imports: [TitleComponent, CarouselModule, RouterModule],
  templateUrl: './todays-deal.component.html',
  styleUrl: './todays-deal.component.scss'
})

export class TodaysDealComponent {

  @Input() id: number[];
  @Input() type: string;
  public dealData: DealData[];
  public homeFiveTodaysDeal : DealData[];

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 2,
      },
      375: {
        items: 2.5,
      },
      576: {
        items: 3,
      },
      767: {
        items: 4,
      },
      991: {
        items: 5,
      },
      1200: {
        items: 5,
      }
    },
    nav: true
  }

  constructor(private dealService: DealService) { }

  ngOnInit() {
    this.dealService.getDeal().subscribe(response => {
        this.homeFiveTodaysDeal = response.homeFiveTodaysDeal;
        this.dealData = response.todaysDeal;
      if (Array.isArray(this.id)) {
        this.dealData = this.dealData.filter((element => {
          return this.id.includes(element.id);
        }))
      }

      if (Array.isArray(this.id)) {
        this.homeFiveTodaysDeal = this.homeFiveTodaysDeal.filter((element => {
          return this.id.includes(element.id);
        }))
      }
    })
  }

}
