import { Component } from '@angular/core';
import { BreadcrumbComponent } from '../../../shared/components/common/breadcrumb/breadcrumb.component';
import { productData } from '../../../shared/interface/product';
import { WishlistService } from '../../../shared/services/wishlist.service';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wishlist',
  standalone: true,
  imports: [BreadcrumbComponent, DeleteProductComponent, RouterModule,CommonModule],
  templateUrl: './wishlist.component.html',
  styleUrl: './wishlist.component.scss'
})

export class WishlistComponent {

  public breadcrumb = {
    title: 'Wishlist',
    page: 'Home',
    sub_page: 'Wishlist'
  }

  public wishList: productData[];

  constructor(public wishlistServices: WishlistService, public modal: NgbModal) { }

  ngOnInit() {
    this.wishlistServices.getWishlist().subscribe(Response => {
      this.wishList = Response.wishlist;
      document.body.classList.add('bg-color')
    })
  }

  deleteWishlist(index: number) {
    const modal = this.modal.open(DeleteProductComponent, { windowClass: "address-details-modal", centered: true, })
    modal.componentInstance.data = this.wishList;
    modal.componentInstance.index = index;
  }
  
  ngOnDestroy() {
    document.body.classList.remove('bg-color')
  }
}


