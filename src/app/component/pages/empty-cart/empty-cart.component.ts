import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-empty-cart',
  standalone: true,
  imports: [BreadcrumbComponent,RouterModule],
  templateUrl: './empty-cart.component.html',
  styleUrl: './empty-cart.component.scss'
})

export class EmptyCartComponent {

  public breadcrumb = {
    title: 'Cart',
    page: 'Home',
    sub_page: 'Cart'
  }

}
