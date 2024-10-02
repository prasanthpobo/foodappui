import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavService } from '../../../../shared/services/nav.service';

@Component({
  selector: 'app-shop-sidebar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './shop-sidebar.component.html',
  styleUrl: './shop-sidebar.component.scss'
})

export class ShopSidebarComponent {

  constructor(public navService :NavService) { }

}
