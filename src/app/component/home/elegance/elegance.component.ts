import { Component } from '@angular/core';
import { ProductBoxComponent } from '../../../shared/components/common/product-box/product-box.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { home } from '../../../shared/interface/home';
import { HomeService } from '../../../shared/services/home.service';
import { AppBannerSectionComponent } from '../widgets/app-banner-section/app-banner-section.component';
import { BrandForYouComponent } from '../widgets/brand-for-you/brand-for-you.component';
import { CategoriesSectionComponent } from '../widgets/categories-section/categories-section.component';
import { TodaysDealComponent } from '../widgets/todays-deal/todays-deal.component';
import { EleganceHomeComponent } from './elegance-home/elegance-home.component';
import { SkeletonEleganceComponent } from '../../../shared/skeleton-loader/home/skeleton-elegance/skeleton-elegance.component';
import { SkeletonService } from '../../../shared/services/skeleton.service';
import { ProductFilterWiseDataComponent } from '../../../shared/components/common/product-filter-wise-data/product-filter-wise-data.component';

@Component({
  selector: 'app-elegance',
  standalone: true,
  imports: [EleganceHomeComponent,TodaysDealComponent,CategoriesSectionComponent,TitleComponent,SkeletonEleganceComponent,
  ProductFilterWiseDataComponent,BrandForYouComponent,AppBannerSectionComponent,ProductBoxComponent],
  templateUrl: './elegance.component.html',
  styleUrl: './elegance.component.scss'
})

export class EleganceComponent {

  public eleganceData: home;
  
  constructor(public homeServices: HomeService,public skeletonService : SkeletonService) { }

  ngOnInit() {
    this.homeServices.getEleganceData().subscribe(Response => {
      if (Response) {
        this.eleganceData = Response
      }
    })
    document.body.classList.add('position-relative')
  }

  ngOnDestroy() {
    document.body.classList.remove('position-relative')
  }

}
