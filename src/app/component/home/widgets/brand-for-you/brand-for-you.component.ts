import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { TitleComponent } from '../../../../shared/components/common/title/title.component';
import { BrandData } from '../../../../shared/interface/brand';
import { BrandService } from '../../../../shared/services/brand.service';

@Component({
  selector: 'app-brand-for-you',
  standalone: true,
  imports: [CarouselModule, RouterModule,TitleComponent],
  templateUrl: './brand-for-you.component.html',
  styleUrl: './brand-for-you.component.scss'
})

export class BrandForYouComponent {

  public brandData: BrandData[];
  @Input() id: number[];

  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    dots: false,
    autoplay : true,
    navSpeed: 700,
    navText: ["<span class='owl-prev-icon'></span>", "<span class='owl-next-icon'></span>"],
    responsive: {
      0: {
        items: 2,
      },
      375: {
        items: 3,
      },
      576: {
        items: 4,
      },
      767: {
        items: 5,
      },
      991: {
        items: 6,
      },
      1200: {
        items: 8,
      }
    },
    nav: false
  }

  constructor(private brandServices: BrandService) { }

  ngOnInit() {
    this.brandServices.getBrandForYou().subscribe(response => {
      this.brandData = response.brand;
      if (Array.isArray(this.id)) {
        this.brandData = this.brandData.filter((element => {
          return this.id.includes(element.id);
        }))
      }
    })
  }

}
