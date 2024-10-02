import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { ProductBoxComponent } from '../../../shared/components/common/product-box/product-box.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { ClickOutSideDirective } from '../../../shared/directive/click-out-side.directive';
import { home } from '../../../shared/interface/home';
import { HomeService } from '../../../shared/services/home.service';
import { NavService } from '../../../shared/services/nav.service';
import { SkeletonService } from '../../../shared/services/skeleton.service';
import { SkeletonModernComponent } from '../../../shared/skeleton-loader/home/skeleton-modern/skeleton-modern.component';
import { MarqueeComponent } from '../compact/marquee/marquee.component';
import { BrandForYouComponent } from '../widgets/brand-for-you/brand-for-you.component';
import { CategoriesSectionComponent } from '../widgets/categories-section/categories-section.component';
import { ShopSidebarComponent } from './shop-sidebar/shop-sidebar.component';

@Component({
  selector: 'app-modern',
  standalone: true,
  imports: [ShopSidebarComponent,ProductBoxComponent,BrandForYouComponent,MarqueeComponent,SkeletonModernComponent,
       ClickOutSideDirective,CategoriesSectionComponent,TitleComponent,CarouselModule,RouterModule,CommonModule],
  templateUrl: './modern.component.html',
  styleUrl: './modern.component.scss'
})

export class ModernComponent {

  public modernData: home;
  
  public customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    navSpeed: 700,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 8
      }
    },
    nav: true
  }

  constructor(public homeServices: HomeService ,public navService :NavService,public skeletonService : SkeletonService) { }

  ngOnInit() {
    this.homeServices.getModernData().subscribe(Response => {
      if (Response) {
        this.modernData = Response
      }
    })
  }

}
