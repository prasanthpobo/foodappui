import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { ProductFilterWiseDataComponent } from '../../../shared/components/common/product-filter-wise-data/product-filter-wise-data.component';

@Component({
  selector: 'app-restaurant-listing',
  standalone: true,
  imports: [ProductFilterWiseDataComponent , BreadcrumbComponent],
  templateUrl: './restaurant-listing.component.html',
  styleUrl: './restaurant-listing.component.scss'
})

export class RestaurantListingComponent {

  public breadcrumb = {
    title: 'Restaurant Listing',
    page: 'Home',
    sub_page: 'Restaurant Listing'
  }

  ngOnInit() {
    document.body.classList.add('bg-color')
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }

}
