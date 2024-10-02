import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { productData } from '../../../interface/product';
import { ProductService } from '../../../services/product.service';
import { ProductBoxOneComponent } from './product-box-one/product-box-one.component';
import { ProductBoxTwoComponent } from './product-box-two/product-box-two.component';
import { ProductBoxThreeComponent } from './product-box-three/product-box-three.component';
import { ProductBoxFourComponent } from './product-box-four/product-box-four.component';
import { ProductBoxFiveComponent } from './product-box-five/product-box-five.component';

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [  ProductBoxOneComponent,ProductBoxTwoComponent,ProductBoxThreeComponent,ProductBoxFourComponent,ProductBoxFiveComponent,
    CommonModule,RouterModule],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})

export class ProductBoxComponent {

  @Input() id: number[];
  @Input() type: string;
  @Input() class: string;
  public productData: productData[];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(response => {
      this.productData = response.product;
      if (Array.isArray(this.id)) {
        this.productData = this.productData.filter((element => {
          return this.id.includes(element.id)
        }))
      }
    })
  }

}
