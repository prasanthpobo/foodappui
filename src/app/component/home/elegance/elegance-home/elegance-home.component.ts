import { Component, Input } from '@angular/core';
import { Data } from '../../../../shared/interface/home';
import { RestaurantSearchService } from '../../../../shared/services/restaurant-search.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClickOutSideDirective } from '../../../../shared/directive/click-out-side.directive';

@Component({
  selector: 'app-elegance-home',
  standalone: true,
  imports: [RouterModule,FormsModule,ClickOutSideDirective],
  templateUrl: './elegance-home.component.html',
  styleUrl: './elegance-home.component.scss'
})

export class EleganceHomeComponent {

  @Input() category: Data;

  constructor(public restaurantService: RestaurantSearchService) {}


}
