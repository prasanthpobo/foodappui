import { Component } from '@angular/core';
import { ServiceComponent } from '../../../../shared/components/common/service/service.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../../shared/services/product.service';
import { productData } from '../../../../shared/interface/product';
import { RouterModule } from '@angular/router';
import { ClickOutSideDirective } from '../../../../shared/directive/click-out-side.directive';
import { RestaurantSearchService } from '../../../../shared/services/restaurant-search.service';

@Component({
  selector: 'app-classic-home',
  standalone: true,
  imports: [ServiceComponent, FormsModule, RouterModule, ClickOutSideDirective],
  templateUrl: './classic-home.component.html',
  styleUrl: './classic-home.component.scss'
})

export class ClassicHomeComponent {

  constructor(public restaurantService: RestaurantSearchService) {}
  
}
