import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { OrderCartItemsComponent } from '../../../shared/components/common/order-cart-items/order-cart-items.component';
import { menuGrid } from '../../../shared/interface/menu-grid';
import { product } from '../../../shared/interface/product';
import { MenuGridService } from '../../../shared/services/menu-grid.service';
import { ProductBoxComponent } from '../../../shared/components/common/product-box/product-box.component';

@Component({
  selector: 'app-menu-grid',
  standalone: true,
  imports: [BreadcrumbComponent, OrderCartItemsComponent, ProductBoxComponent],
  templateUrl: './menu-grid.component.html',
  styleUrl: './menu-grid.component.scss'
})

export class MenuGridComponent {

  public menuGrid: menuGrid
  public breadcrumb = {
    title: 'Menu Grid',
    page: 'Home',
    sub_page: 'Menu Grid'
  }
  public product: product;

  constructor(public menuGridServices: MenuGridService) { }

  ngOnInit() {
    this.menuGridServices.getMenuGrid().subscribe(Response => {
      this.menuGrid = Response;
    })
    document.body.classList.add('bg-color');
  }

  ngOnDestroy() {
    document.body.classList.remove('bg-color');
  }

}
