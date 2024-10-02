import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { ProductBoxComponent } from '../../../shared/components/common/product-box/product-box.component';
import { TitleComponent } from '../../../shared/components/common/title/title.component';
import { home } from '../../../shared/interface/home';
import { HomeService } from '../../../shared/services/home.service';
import { SkeletonService } from '../../../shared/services/skeleton.service';
import { SkeletonCompactComponent } from '../../../shared/skeleton-loader/home/skeleton-compact/skeleton-compact.component';
import { BrandForYouComponent } from '../widgets/brand-for-you/brand-for-you.component';
import { CategoriesSectionComponent } from '../widgets/categories-section/categories-section.component';
import { TodaysDealComponent } from '../widgets/todays-deal/todays-deal.component';
import { CompactTopSectionComponent } from './compact-top-section/compact-top-section.component';
import { MarqueeComponent } from './marquee/marquee.component';

@Component({
  selector: 'app-compact',
  standalone: true,
  imports: [CompactTopSectionComponent,TitleComponent,CategoriesSectionComponent,SkeletonCompactComponent,
    MarqueeComponent,BrandForYouComponent,ProductBoxComponent,TodaysDealComponent,CommonModule],
  templateUrl: './compact.component.html',
  styleUrl: './compact.component.scss'
})

export class CompactsComponent {

  public compactData: home;

  constructor(public homeService: HomeService,public skeletonService : SkeletonService) { }

  ngOnInit() {
    this.homeService.getCompactData().subscribe(Res => {
       if(Res){
         this.compactData = Res;
       }
    })
  }

}
