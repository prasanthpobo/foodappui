import { Component } from '@angular/core';
import { RestaurantSearchService } from '../../../../shared/services/restaurant-search.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClickOutSideDirective } from '../../../../shared/directive/click-out-side.directive';

@Component({
  selector: 'app-compact-top-section',
  standalone: true,
  imports: [RouterModule,FormsModule,ClickOutSideDirective],
  templateUrl: './compact-top-section.component.html',
  styleUrl: './compact-top-section.component.scss'
})

export class CompactTopSectionComponent {

  constructor(public restaurantService: RestaurantSearchService) {}

}
