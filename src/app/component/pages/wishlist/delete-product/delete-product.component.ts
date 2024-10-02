import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { productData } from '../../../../shared/interface/product';
import { WishlistService } from '../../../../shared/services/wishlist.service';

@Component({
  selector: 'app-delete-product',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './delete-product.component.html',
  styleUrl: './delete-product.component.scss'
})

export class DeleteProductComponent {

  @Input() data: productData[];
  @Input() index: number;

  constructor(public modal: NgbModal, public wishlistServices: WishlistService) { }

  remove(index: number) {
    this.data.splice(index, 1);
    this.modal.dismissAll();
  }

}
