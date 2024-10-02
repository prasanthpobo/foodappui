import { Component } from '@angular/core';
import { RestaurantSearchService } from '../../../../shared/services/restaurant-search.service';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ClickOutSideDirective } from '../../../../shared/directive/click-out-side.directive';

@Component({
  selector: 'app-minimal-top-section',
  standalone: true,
  imports: [RouterModule,FormsModule,ClickOutSideDirective],
  templateUrl: './minimal-top-section.component.html',
  styleUrl: './minimal-top-section.component.scss'
})

export class MinimalTopSectionComponent {

  constructor(public restaurantService: RestaurantSearchService) {}

}
