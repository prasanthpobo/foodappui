import { Component } from '@angular/core';
import { ProductBoxComponent } from '../../../shared/components/common/product-box/product-box.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { home } from '../../../shared/interface/home';
import { HomeService } from '../../../shared/services/home.service';
import { AppBannerSectionComponent } from '../widgets/app-banner-section/app-banner-section.component';
import { BrandForYouComponent } from '../widgets/brand-for-you/brand-for-you.component';
import { CategoriesSectionComponent } from '../widgets/categories-section/categories-section.component';
import { TodaysDealComponent } from '../widgets/todays-deal/todays-deal.component';
import { ClassicHomeComponent } from './classic-home/classic-home.component';
import { SkeletonClassicComponent } from '../../../shared/skeleton-loader/home/skeleton-classic/skeleton-classic.component';
import { SkeletonService } from '../../../shared/services/skeleton.service';
import { ProductFilterWiseDataComponent } from '../../../shared/components/common/product-filter-wise-data/product-filter-wise-data.component';

@Component({
  selector: 'app-classic',
  standalone: true,
  imports: [ClassicHomeComponent, CategoriesSectionComponent, TodaysDealComponent, TitleComponent, ProductBoxComponent,
    BrandForYouComponent, AppBannerSectionComponent, ProductFilterWiseDataComponent, SkeletonClassicComponent],
  templateUrl: './classic.component.html',
  styleUrl: './classic.component.scss'
})

export class ClassicComponent {

  public classicData: home;
  public type = 'home_one';
  constructor(public homeServices: HomeService, public skeletonService: SkeletonService) { }

  ngOnInit() {
    this.homeServices.getClassicData().subscribe(Response => {
      if(Response){
        this.classicData = Response;
      }
    })
    document.body.classList.add('position-relative')
    //this.getClassicDataAPI();
  }

  ngOnDestroy() {
    document.body.classList.remove('position-relative')
  }
  getClassicDataAPI() {    
    this.homeServices.getClassicDataAPI().subscribe(Response => {
      if (Response) {
        this.classicData = Response;
      }
    })
    document.body.classList.add('position-relative')
  }

}
