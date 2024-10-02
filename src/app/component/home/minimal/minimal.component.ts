import { Component } from '@angular/core';
import { ServiceComponent } from '../../../shared/components/common/service/service.component';
import { home } from '../../../shared/interface/home';
import { HomeService } from '../../../shared/services/home.service';
import { AppBannerSectionComponent } from '../widgets/app-banner-section/app-banner-section.component';
import { MinimalTopSectionComponent } from './minimal-top-section/minimal-top-section.component';
import { ProductBoxComponent } from '../../../shared/components/common/product-box/product-box.component';
import { SkeletonMinimalComponent } from '../../../shared/skeleton-loader/home/skeleton-minimal/skeleton-minimal.component';
import { SkeletonService } from '../../../shared/services/skeleton.service';

@Component({
  selector: 'app-minimal',
  standalone: true,
  imports: [MinimalTopSectionComponent, AppBannerSectionComponent, 
    SkeletonMinimalComponent,ServiceComponent, ProductBoxComponent],
  templateUrl: './minimal.component.html',
  styleUrl: './minimal.component.scss'
})

export class MinimalComponent {

  public minimalData: home;

  constructor(public homeService: HomeService,public skeletonService : SkeletonService) {}
  
  ngOnInit() {
    this.homeService.getMinimalData().subscribe(Res => {
       if(Res){
         this.minimalData = Res;
       }
    })
    document.body.classList.add('position-relative', 'noice-background')
  }

  ngOnDestroy() {
    document.body.classList.remove('position-relative', 'noice-background')
  }
}
