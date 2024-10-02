import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OrderCartItemsComponent } from '../../../shared/components/common/order-cart-items/order-cart-items.component';
import { ClickOutSideDirective } from '../../../shared/directive/click-out-side.directive';
import { menuListingList } from '../../../shared/interface/menu-listing';
import { overView, productData } from '../../../shared/interface/product';
import { MenuListingService } from '../../../shared/services/menu-listing.service';
import { OrderService } from '../../../shared/services/order.service';
import { ProductService } from '../../../shared/services/product.service';
import { OrderOnlineComponent } from './order-online/order-online.component';
import { OverviewComponent } from './overview/overview.component';
import { PhotosComponent } from './photos/photos.component';
import { ReviewComponent } from './review/review.component';

@Component({
  selector: 'app-menu-listing',
  standalone: true,
  imports: [OrderCartItemsComponent, RouterModule, ClickOutSideDirective,
    OrderOnlineComponent, OverviewComponent, PhotosComponent, ReviewComponent, NgbModule, CommonModule],
  templateUrl: './menu-listing.component.html',
  styleUrl: './menu-listing.component.scss'
})

export class MenuListingComponent {

  public active = 1;
  public slug: string;
  public isLike : boolean = false;
  public overView: overView[];
  public menuList: menuListingList[];
  public selectedProduct: productData[];
  public slugUrl: string;
  public mobileMenu: boolean = false;

  constructor(
    public menuListingServices: MenuListingService,
    private route: ActivatedRoute,
    public orderService: OrderService,
    private productService: ProductService) {
    this.route.params.subscribe(res => {
      if (res) {
        this.slugUrl = res['slug'];
      }
    })
    window.scrollTo(0, 0);  
  }

  ngOnInit() {
    this.productService.getProduct().subscribe(response => {
      if (response.product) {
        this.selectedProduct = response.product;
        this.selectedProduct = this.selectedProduct.filter(ele => ele.slug === this.slugUrl);
      }
    })

    this.menuListingServices.getMenuListing().subscribe(response => {
      if (response.menuListing) {
        this.menuList = response.menuListing;
      }
    })

    document.body.classList.add('bg-color', 'position-relative');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color', 'position-relative')
  }
  
}
